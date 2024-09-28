import { addDoc, collection, onSnapshot, serverTimestamp, query, where, orderBy } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useEffect, useRef, useState } from "react";
import Message from "../components/Message";
import { IoSend } from "react-icons/io5";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState();
  const lastMsg = useRef();

  useEffect(() => {
    const messagesCol = collection(db, "messages");
    const q = query(messagesCol, where("room", "==", room), orderBy("createdAt", "asc"));
    onSnapshot(q, (snaphot) => {
      let tempMsg = [];
      snaphot.docs.forEach((doc) => tempMsg.push(doc.data()));
      setMessages(tempMsg);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messagesCol = collection(db, "messages");
    await addDoc(messagesCol, {
      room,
      text: e.target[0].value,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
    lastMsg.current.scrollIntoView({ behavior: "smooth" });
    e.target.reset();
  };

  return (
    <div className="chat-page">
      <header>
        <p>{auth?.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>
      <main>
        {!messages ? <p>Sohbete ilk mesajı gönderiniz</p> : messages?.map((data, i) => <Message data={data} key={i} />)}
        <div ref={lastMsg} />
      </main>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Mesajınızı yazınız..." required />
        <button>
          <IoSend size={25} />
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
