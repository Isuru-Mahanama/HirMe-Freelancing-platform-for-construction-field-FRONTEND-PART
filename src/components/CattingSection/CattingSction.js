import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, newMessage]);
    setNewMessage('');
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const searchResults = messages.filter(message => message.includes(searchValue));
    setSearchResults(searchResults);
  }

  return (
    <div className="chat-container">
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            value={searchValue} 
            onChange={e => setSearchValue(e.target.value)} 
            placeholder="Search messages..." 
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
      <div className="message-container">
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={newMessage} 
            onChange={e => setNewMessage(e.target.value)} 
            placeholder="Type a message..." 
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
