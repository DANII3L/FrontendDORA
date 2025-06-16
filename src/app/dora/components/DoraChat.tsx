import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot } from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'dora';
  text: string;
}

const DoraChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'dora', text: '¡Hola! Soy D.O.R.A., tu asistente de IA. ¿En qué puedo ayudarte hoy?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage: Message = { id: messages.length + 1, sender: 'user', text: inputMessage.trim() };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const newDoraMessage: Message = {
        id: messages.length + 2,
        sender: 'dora',
        text: `¡Hola! Has dicho: "${newUserMessage.text}". Por ahora solo puedo repetir lo que dices, pero pronto aprenderé más.`, 
      };
      setMessages((prevMessages) => [...prevMessages, newDoraMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-card-background rounded-2xl shadow-lg border border-border p-6">
      <h2 className="text-2xl font-bold text-text-primary mb-4">Hablar con D.O.R.A.</h2>
      <div className="flex-1 overflow-y-auto pr-4 mb-4 custom-scrollbar">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'dora' && (
              <div className="w-8 h-8 rounded-full bg-orange-primary/10 flex items-center justify-center mr-3">
                <Bot className="h-5 w-5 text-orange-primary" />
              </div>
            )}
            <div
              className={`p-3 rounded-lg max-w-[70%]
                ${message.sender === 'user'
                  ? 'bg-gradient-to-r from-orange-primary to-red-primary text-white'
                  : 'bg-background text-text-primary border border-border'
                }`}
            >
              {message.text}
            </div>
            {message.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center ml-3">
                <User className="h-5 w-5 text-blue-500" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex items-center space-x-3 mt-auto">
        <input
          type="text"
          className="flex-1 p-3 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-orange-primary"
          placeholder="Escribe tu mensaje..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="p-3 bg-gradient-to-r from-orange-primary to-red-primary text-white rounded-lg shadow-md hover:from-orange-600 hover:to-red-600 transition-all duration-200"
          onClick={handleSendMessage}
        >
          <Send className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default DoraChat; 