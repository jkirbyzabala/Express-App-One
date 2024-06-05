const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Define your routes and other middleware here
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(404).send('File not found');
        }
    });
});

app.get('/about', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'about.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(404).send('File not found');
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});