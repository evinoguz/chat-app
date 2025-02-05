const RoomPage = ({ setIsAuth, setRoom }) => {
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const room = e.target[0].value.trim().toLowerCase();
    setRoom(room);
  };
  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Gireceksiniz</p>
      <input type="text" placeholder="ör: haftaici" required />
      <button type="submit">Odaya Gir</button>
      <button onClick={logout} type="button">
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
