
import React from 'react';
import { ArrowLeft, MessageCircle, Mail, Phone } from 'lucide-react';

interface Props {
  onBack?: () => void;
  onLiveChat?: () => void;
}

const SupportOption = ({ icon, title, desc, onClick }: { icon: React.ReactNode, title: string, desc: string, onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="support-option-btn"
  >
    <div className="support-option-icon">
      {icon}
    </div>
    <div>
      <div className="support-option-title">{title}</div>
      <div className="support-option-desc">{desc}</div>
    </div>
  </button>
);

const ContactSupportMenuScreen = ({ onBack, onLiveChat }: Props) => {
  return (
    <div className="main-content" style={{ background: '#fff' }}>
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}><ArrowLeft size={24} /></button>
        <div className="page-title">Contact Support</div>
      </div>

      <div className="support-menu-container">
        <h3 className="support-menu-header">How can we halp?</h3>

        <SupportOption
          icon={<MessageCircle size={32} strokeWidth={2} fill="#c80000" color="#c80000" />}
          title="Live"
          desc="Chat with a support specialist now"
          onClick={onLiveChat}
        />

        <SupportOption
          icon={<Mail size={32} strokeWidth={2} color="#c80000" />}
          title="Email"
          desc="Email us at support@med.com"
        />

        <SupportOption
          icon={<Phone size={32} strokeWidth={2} fill="#c80000" color="#c80000" />}
          title="Phone"
          desc="Call us at 5551626737367"
        />
      </div>
    </div>
  );
};

export default ContactSupportMenuScreen;
