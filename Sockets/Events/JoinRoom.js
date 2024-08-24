module.exports = (socket, io) => (roomID) => {
  socket.join(roomID);
  console.log(`Kullanıcı ${socket.id} oda ${roomID} katıldı.`);
};