module.exports = (socket, io) => {
  console.log('Yeni bir kullanıcı bağlandı:', socket.id);

  socket.on('disconnect', () => {
    console.log('Kullanıcı bağlantısı koptu:', socket.id);
  });
};