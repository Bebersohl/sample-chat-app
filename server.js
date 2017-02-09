var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var SocketIo = require('socket.io');

var app = express();
var compiler = webpack(config);

app.use('/static', express.static(path.join(__dirname, 'static')))

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});

const io = new SocketIo(server);
const users = {};
io.on('connection', (socket) => {
  const usersChange = () => {
    const userValues = Object.keys(users)
      .map(key => users[key])
      .filter(user => user.name.length !== 0)
      .sort(function(a, b) {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    io.emit('users change', userValues)
  }
  console.log('a user connected');
  users[socket.id] = {
    id: socket.id,
    name: '',
  }
  socket.on('set name', (name) => {
    console.log('set name')
    users[socket.id].name = name;
    usersChange();
    console.log(users)
  })
  socket.on('send message', ({to, message}) => {
    console.log('send message', to, message)
    socket.broadcast.to(to).emit('forward message', {message, from: socket.id});
  })
  socket.on('disconnect', () => {
    console.log('user disconnected');
    delete users[socket.id]
    usersChange();
    console.log(users)
  });
});