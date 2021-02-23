const app = require('express')();
const http = require('http').createServer(app);

const io = require('socket.io')(http);

app.get('/runCommand', (req, res) => {
    command = req.query.command
    io.emit("command",{command:command})
  res.send('<h1>Sent command for running</h1>'+command);
});



http.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});