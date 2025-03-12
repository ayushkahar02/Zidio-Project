

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
    <div className="flex h-screen w-screen bg-[black]">
      <Navbar />
      <div className="flex flex-col ml-[100px] w-[1000px] mt-[50px] p-4 bg-white rounded shadow border border-[#8357DA] h-[570px] ml-[200px]">
        <h2 className="text-2xl font-bold underline  text-[#8357DA] ml-[450px] ">Chat</h2>
      
        {/* Chat Messages */}
        <div className="h-[400px] overflow-y-auto p-4 my-4">
          {messages.length > 0 ? (
            messages.map((msg) => (
              <div key={msg.id} className="mb-2 border border-b-[#8357DA] flex justify-between items-center p-2">
                <div>
                  <span className="font-bold text-[#8357DA] ">{msg.user}:</span>
                  <span className="ml-2 text-[white]"> {msg.text}</span>
                  <span className="text-gray-500 text-[white] text-sm"> <sub>({msg.timestamp})</sub> </span>
                </div>
            

                {msg.user === userName && (
                  <button
                    onClick={() => deleteMessage(msg.id, msg.user)}
                    className="ml-[320px] bg-[black] text-red-500 border hover:border-[#8357DA]"
                  >
                     🗑️
                  </button>
                )}
              </div>
            ))
          ) : (
            <p className="text-[white]">No messages yet.</p>
          )}
        </div>
        
        {/* Input Fields */}
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border p-2 mb-3 w-[995px] h-[40px] bg-[#e0e0eb]"
        />

        <input
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border p-2 mb-3 w-[995px] h-[40px] bg-[#e0e0eb]"
        />
        <button
          onClick={sendMessage}
          className="bg-[black] text-[#8357DA] hover:text-[#ffffff] border border-[#8357DA] pointer bold py-2 w-[1000px] h-[45px] hover:bg-[#8357DA]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;

