module.exports = (io) => {
  io.on('connection', (socket) => {
      console.log('A user connected');

      socket.on('addItem', (item) => {
          // İşlemler burada yapılabilir
          io.emit('itemAdded', item);
      });

      socket.on('disconnect', () => {
          console.log('User disconnected');
      });
  });
};