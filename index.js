const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define your routes 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
// Route handler for the 'about' page
app.get('/about', (req, res) => {
  res.render('about');
});

// Route handler for the 'user' page
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.render('user', { userId });
});
// Route for downloading the image
app.get('/download', (req, res) => {
    const imagePath = __dirname + '/public/Images/llama4.jpg';
    res.download(imagePath, '/public/Images/llama4.jpg');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});