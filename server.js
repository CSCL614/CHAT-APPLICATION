const express = require('express');
const path = require('path');
const app = express();

// Serve static files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Set up the root route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Socket.io setup, if needed
const server = app.listen(process.env.PORT || 10000, () => {
    console.log('Server running on port ' + (process.env.PORT || 10000));
});

// Socket.io setup (optional for real-time chat)
const io = require('socket.io')(server);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
