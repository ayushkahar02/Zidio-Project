//original
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(savedMessages);
  }, []);

  const sendMessage = () => {
    if (!newMessage.trim() || !userName.trim()) {
      alert("Please enter your name and message.");
      return;
    }

    const messageData = {
      id: Date.now(),
      user: userName,
      text: newMessage,
      timestamp: new Date().toLocaleTimeString(),
    };

    const updatedMessages = [...messages, messageData];
    setMessages(updatedMessages);
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
    setNewMessage("");
  };

  const deleteMessage = (id, sender) => {
    if (sender !== userName) {
      alert("You can only delete your own messages.");
      return;
    }

    const updatedMessages = messages.filter((msg) => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
  };

  return (
    <div className="flex w-screen h-screen bg-gray-100">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col w-full max-w-[1000px] p-6 bg-white rounded shadow border border-[#8357DA] h-[570px] ml-auto mr-auto">
          <h2 className="text-[30px] font-bold underline text-[#8357DA] text-center">Chat</h2>
          <hr className="w-full text-[#8357DA]" />

          {/* Chat Messages */}
          <div className="h-[400px] overflow-y-auto p-4 my-4">
            {messages.length > 0 ? (
              messages.map((msg) => (
                <div key={msg.id} className="mb-2 border border-[#8357DA] flex justify-between items-center p-2">
                  <div>
                    <span className="font-bold text-[black] text-[18px]">{msg.user}:</span>
                    <span className="ml-2 text-[black] text-[18px]">{msg.text}</span>
                    <span className="text-[18px] text-[#8357DA] text-sm"><sub>({msg.timestamp})</sub></span>
                  </div>
                  {msg.user === userName && (
                    <button
                      onClick={() => deleteMessage(msg.id, msg.user)}
                      className="bg-[white] text-red-500 border hover:border-[#8357DA] ml-4"
                      style={{ color: "red" }}
                    >
                      🗑️
                    </button>
                  )}
                </div>
              ))
            ) : (
              <p className="text-[black] text-[18px]">No messages yet.</p>
            )}
          </div>

          {/* Input Fields */}
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border p-2 mb-3 w-full h-[40px] bg-[#f7e6f4] text-[18px] text-[black]"
          />

          <input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="border p-2 mb-3 w-full h-[40px] bg-[#f7e6f4] text-[18px] text-[black]"
          />

          <button
            onClick={sendMessage}
            className="bg-[white] text-[#000000] hover:text-white border border-[#8357DA] py-2 w-full h-[45px] hover:bg-[#8357DA] text-[18px]"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;