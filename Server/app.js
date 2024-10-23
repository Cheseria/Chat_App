const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files and handle POST requests
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.get('/about', (req, res) => {
  const teamInfo = {
      team: 'Deno',
      members: [
          { id: '410855372', name: '葉賢賢' },
          { id: '410855091', name: '楊鎧隆' },
          { id: '410855987', name: '巴睿旭' },
          { id: '410855018', name: '陳佳惠' }
      ]
  };

  res.json(teamInfo);
});

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
  
io.on('connection', client => {
    console.log(`connection recieved`);
    client.on('new_message', (chat) => {
        console.log(`new message recieved: ${chat}`)
        io.emit('broadcast', chat)
    })

    client.on('typing', (data) => {
      client.broadcast.emit('typing', data);
  });
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.error(`Server error: ${error.message}`);
});
