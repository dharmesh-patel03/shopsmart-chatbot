import React, { useState } from 'react';
import ChatWindow from './ChatWindow';

const Chatbot = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="w-96 bg-white shadow-lg rounded-lg p-4">
      <h1 className="text-xl font-semibold mb-4 text-gray-700">Sales Chatbot</h1>
      {!showChat ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setShowChat(true)}
        >
          Start Chat
        </button>
      ) : (
        <ChatWindow />
      )}
    </div>
  );
};

export default Chatbot;
