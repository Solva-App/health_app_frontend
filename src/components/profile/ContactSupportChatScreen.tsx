
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  onBack?: () => void;
}

const ContactSupportChatScreen = ({ onBack }: Props) => {
  return (
    <div className="chat-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}><ArrowLeft size={24} /></button>
        <div className="page-title">Contact Support</div>
      </div>

      <div className="chat-container">
        <h3 className="chat-header">How can we halp?</h3>

        {/* Support agent bubble */}
        <div className="chat-row-support">
          <div className="chat-avatar">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7C17 4.24 14.76 2 12 2ZM5 20V21H19V20C19 17.67 14.33 16 12 16C9.67 16 5 17.67 5 20Z"></path>
            </svg>
          </div>
          <div className="chat-bubble">
            hdsakjlkssssssssssssssssssssssssssssssssssddddddssssssssssssssssssssssdddddddddddddddd
          </div>
        </div>

        {/* User bubble */}
        <div className="chat-row-user">
          <div className="chat-bubble">
            hdsakjlkssssssssssssssssssssssssssssssssssddddddssssssssssssssssssssssdddddddddddddddd
          </div>
          <div className="chat-avatar">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="chat-footer">
        <div className="chat-input-wrapper">
          <input
            type="text"
            placeholder="Type your message"
            className="chat-input"
          />
          <button className="chat-send-btn">
            <ArrowRight color="#fff" size={20} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Bottom border indicator */}
      <div className="chat-border-indicator" />
    </div>
  );
};

export default ContactSupportChatScreen;
