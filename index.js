const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const session = require('express-session');
const crypto = require('crypto');
const { generateSecureSessionId } = require('./session-generator'); // Use our secure generator

const app = express();
const PORT = process.env.PORT || 5000; // Match app.json port

// Security middleware FIRST
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "trusted-cdn.com"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "secure.gravatar.com"],
        }
    },
    hsts: { maxAge: 31536000, includeSubDomains: true }
}));

// Rate limiting for session endpoints
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per window
    standardHeaders: true,
    legacyHeaders: false,
});

// Secure session configuration
app.use(session({
    genid: () => generateSecureSessionId(32), // CRITICAL: USE SECURE GENERATOR
    secret: crypto.randomBytes(32).toString('hex'), // Dynamic secret
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Path sanitization
const safePath = (filename) => {
    const basePath = path.resolve(__dirname);
    const requestedPath = path.resolve(basePath, filename);
    if (!requestedPath.startsWith(basePath)) {
        throw new Error('Path traversal detected!');
    }
    return requestedPath;
};

// Body parsers BEFORE routes
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// API routes with rate limiting
app.use('/server', apiLimiter, require('./qr'));
app.use('/code', apiLimiter, require('./pair'));

// Secure static routes
app.get('/pair', (req, res) => {
    res.sendFile(safePath('pair.html'));
});

app.get('/qr', (req, res) => {
    res.sendFile(safePath('qr.html'));
});

app.get('/', (req, res) => {
    res.sendFile(safePath('main.html'));
});

// Security headers for static content
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    next();
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    if (err.message.includes('Path traversal')) {
        return res.status(403).send('Invalid path request');
    }
    res.status(500).send('Something broke!');
});

// Listen on configured port
app.listen(PORT, () => {
    console.log(`\n✅ Secure server running on port ${PORT}`);
    console.log(`🔒 Session ID length: 32 bytes (256 bits entropy)`);
    console.log(`🛡️  Security headers: Enabled (CSP, HSTS, X-Frame-Options)`);
    console.log(`⏱️  Session timeout: 24 hours\n`);
});

module.exports = app;