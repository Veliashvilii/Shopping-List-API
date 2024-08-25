module.exports = (socket, io) => {
  console.log('A new user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
};