
import React, { useState, useRef, useEffect } from 'react';
import ChatIcon from './ChatIcon';
import XIcon from './XIcon';
import LogoIcon from './LogoIcon';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
    options?: { text: string; action: 'quote' | 'services' | 'contact' | 'restart' }[];
}

interface ChatbotProps {
    onQuoteClick: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onQuoteClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const initialMessage: Message = {
        id: 1,
        sender: 'bot',
        text: "Hello! Welcome to Geneva. How can I assist you today?",
        options: [
            { text: 'Request a Quote', action: 'quote' },
            { text: 'View Our Services', action: 'services' },
            { text: 'Contact Information', action: 'contact' },
        ]
    };
    
    const [messages, setMessages] = useState<Message[]>([initialMessage]);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(scrollToBottom, [messages]);

    const handleOptionClick = (option: { text: string; action: 'quote' | 'services' | 'contact' | 'restart' }) => {
        const userMessage: Message = {
            id: Date.now(),
            sender: 'user',
            text: option.text,
        };
        setMessages(prev => [...prev, userMessage]);

        setTimeout(() => {
            let botResponse: Message;
            switch (option.action) {
                case 'quote':
                    onQuoteClick();
                    setIsOpen(false);
                    botResponse = { id: Date.now() + 1, sender: 'bot', text: "I've opened the quote request form for you." };
                    break;
                case 'services':
                    botResponse = { id: Date.now() + 1, sender: 'bot', text: "We offer Printing Services, Transaction Clearing, and Corporate Solutions. You can find more details on our services page!" };
                    break;
                case 'contact':
                    botResponse = { id: Date.now() + 1, sender: 'bot', text: "You can reach us at info@genevapct.com or call +971 3 762 0403. Our office is in Al Ain, Abu Dhabi." };
                    break;
                case 'restart':
                    setMessages([initialMessage]);
                    return;
            }
            
            const restartOption: Message = {
                id: Date.now() + 2,
                sender: 'bot',
                text: "Is there anything else I can help with?",
                options: [ { text: 'Start Over', action: 'restart' } ]
            };

            setMessages(prev => [...prev, botResponse, restartOption]);

        }, 500);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 z-40"
                aria-label="Open Chat"
            >
                {isOpen ? <XIcon className="w-8 h-8"/> : <ChatIcon className="w-8 h-8" />}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] bg-white rounded-lg shadow-2xl z-40 flex flex-col transition-all duration-300 origin-bottom-right">
                    {/* Header */}
                    <div className="bg-dark text-white p-4 flex items-center gap-3 rounded-t-lg">
                        <LogoIcon className="h-8 w-8 object-contain" />
                        <div>
                            <h3 className="font-unbounded font-bold">Geneva Assistant</h3>
                            <p className="text-xs text-gray-300">Online</p>
                        </div>
                    </div>
                    
                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto bg-light-gray">
                        {messages.map((msg) => (
                             <div key={msg.id} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-white text-dark'}`}>
                                    <p className="text-sm">{msg.text}</p>
                                    {msg.options && (
                                        <div className="mt-2 flex flex-col gap-2">
                                            {msg.options.map(opt => (
                                                <button key={opt.action} onClick={() => handleOptionClick(opt)} className="text-left text-sm font-semibold bg-primary/10 text-primary px-3 py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-200">
                                                    {opt.text}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Footer */}
                    <div className="p-2 border-t text-xs text-center text-gray-400">
                        Powered by Geneva
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;