const fs = require('fs');
const path = require('path');

// mk dir structure
fs.mkdirSync(path.join(__dirname, "dist/public"), {recursive: true});

// copy frontend
fs.cpSync(path.join(__dirname, "frontend", "build"), path.join(__dirname, "dist", "public"), {recursive: true});

// copy backend
fs.cpSync(path.join(__dirname, "backend", "dist"), path.join(__dirname, "dist"), {recursive: true});