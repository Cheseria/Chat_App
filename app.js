const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files and handle POST requests
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

// Serve the index.html as the default landing page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

// Handle the login form submission
app.post('/login', (req, res) => {
  const username = req.body.username;

  // Redirect to the chat page with the username as a query parameter
  res.redirect(`/chat.html?username=${username}`);
});

// Serve the chat page
app.get('/chat.html', (req, res) => {
    // Extract the username from the URL query parameter
    const username = req.query.username;
  
    // Serve the chat page with the username passed as a query parameter
    res.sendFile(__dirname + '/chat.html');
  });

// Handle incoming chat messages
io.on('connection', (socket) => {
// Handle typing events and broadcast them to other clients
socket.on('typing', (data) => {
  socket.broadcast.emit('typing', data);
});

  socket.on('chat message', (message) => {
    // Broadcast the message to all connected clients
    const timestamp = new Date().toISOString(); // Convert the current date to ISO 8601 format
    io.emit('chat message', { ...message, timestamp });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on http://localhost:3000');
});

