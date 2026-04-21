import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Image, ArrowRight } from 'lucide-react';

interface Message {
  role: 'ai' | 'user';
  text: string;
}

interface Props {
  onBack?: () => void;
}

const initialMessages: Message[] = [
  { role: 'ai', text: 'Hello! I\'m your AI Health Assistant. I can help answer general health questions. How can I help you today?' },
  { role: 'user', text: 'What are the common side effects of Ibuprofen?' },
  { role: 'ai', text: 'Common side effects of Ibuprofen include upset stomach, nausea, heartburn, and dizziness. Take with food to reduce stomach irritation.' },
  { role: 'user', text: 'Can I take it on an empty stomach?' },
];

const HealthAssistantScreen = ({ onBack }: Props) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'ai',
        text: 'I understand your concern. Please consult a licensed pharmacist or doctor for personalised advice. Remember: this is not a medical diagnosis.'
      }]);
    }, 800);
  };

  return (
    <div className="main-content health-assistant-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Health Assistant</div>
      </div>

      <div className="chat-divider" />

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-row ${msg.role}`}>
            {msg.role === 'ai' && (
              <div className="chat-avatar ai-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="5" fill="#c80000" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#c80000" />
                </svg>
              </div>
            )}
            <div className={`chat-bubble-wrap ${msg.role}`}>
              {msg.role === 'ai' && <div className="chat-speaker">AI Assistant</div>}
              {msg.role === 'user' && <div className="chat-speaker">You</div>}
              <div className={`chat-bubble ${msg.role}`}>{msg.text}</div>
            </div>
            {msg.role === 'user' && (
              <div className="chat-avatar user-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="5" fill="#c80000" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#c80000" />
                </svg>
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="chat-disclaimer">
        Safety disclaimer ("This is not a medical diagnosis").
      </div>

      <div className="chat-input-row">
        <input
          className="chat-input"
          type="text"
          placeholder="Ask a Question"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button className="chat-action-btn" title="Upload image">
          <Image size={20} color="#c80000" />
        </button>
        <button className="chat-send-btn" onClick={handleSend}>
          <ArrowRight size={20} color="white" />
        </button>
      </div>
    </div>
  );
};

export default HealthAssistantScreen;
