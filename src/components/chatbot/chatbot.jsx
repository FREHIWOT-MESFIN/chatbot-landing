import React, { useState } from 'react';
import './chatbot.css';
import data from '../../assets/data.json';

function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [contact, setContact] = useState(false);
  const [chat, setChat] = useState(false);

  const handleMessage = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const newMessage = inputValue;
      setMessages((prev) => [...prev, { text: newMessage, type: 'user' }]);
      setInputValue('');

      // Simulated bot response
      setTimeout(() => {
        const response = checkMessage(newMessage);
        setMessages((prev) => [...prev, { text: response, type: 'bot' }]);
      }, 1000);
    }
  };

  const checkMessage = (message) => {
    if (message.toLowerCase().includes('menu')) {
      return data.menu.map(item => `${item.name}: ${item.description}`).join('\n');
    }
    if (message.toLowerCase().includes('company') || message.toLowerCase().includes('info')) {
      const { name, description } = data.companyInfo;
      return `${name}: ${description}`;
    }
    const faq = data.faqs.find((faq) => faq.question.toLowerCase().includes(message.toLowerCase()));
    return faq ? faq.answer : "I'm sorry, I didn't understand that.";
  };

  const handleOptionClick = (option) => {
    const response = checkMessage(option);
    setMessages((prev) => [...prev, { text: response, type: 'bot' }]);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setContact(false);
  };

  return (
    <>
      <div className={`chatbot ${chatOpen ? 'active' : ''}`} onClick={() => setChatOpen((prev) => !prev)}>
        <div className="plBot"></div>
      </div>
      {chatOpen && (
        <div className="bot-active">
          <div className="option">
            {!contact ? (
              <div className="chat">
                {chat ? (
                  <div className='bot-chat'>
                    <div className='chat-nav'>Chat</div>
                    <div className="bot">
                      {messages.length === 0 && (
                        <div className="bot-message">
                          <div className="query">
                            <p>{data.greeting.text}</p>
                          </div>
                          <div className="data-options">
                            {data.greeting.options.map((option, index) => (
                              <li key={index} onClick={() => handleOptionClick(option)}>{option}</li>
                            ))}
                          </div>
                        </div>
                      )}
                      {messages.map((message, index) => (
                        <div key={index} className={message.type === 'bot' ? 'bot-message' : 'user-query'}>
                          <div className="query">
                            <p>{message.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder='Your message...'
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleMessage}
                    />
                  </div>
                ) : (
                  <div>
                    <h2>Hello,</h2>
                    <h2>How can we help you?</h2>
                    <div className='choice-card'>
                      <p>Ask a question</p>
                      <i className="ri-robot-2-fill"></i>
                      <i className="ri-arrow-right-s-line" onClick={() => setChat(true)}></i>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="contact">
                <form onSubmit={handleContactSubmit}>
                  <label>Name</label>
                  <input type="text" required />
                  <label>Email</label>
                  <input type="email" required />
                  <label>Message</label>
                  <textarea required></textarea>
                  <button type="submit">Send</button>
                </form>
              </div>
            )}
            {!contact && !chat && (
              <div className='choice-card'>
                <p>Contact Us</p>
                <i className="ri-arrow-right-s-line" onClick={() => setContact(true)}></i>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
