
import React from 'react';
import { ArrowLeft, Search, Truck, MonitorDot } from 'lucide-react';

interface Props {
  onBack?: () => void;
}

const HelpRow = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="help-row">
    <div className="help-row-icon">
      {icon}
    </div>
    <div>
      <h4 className="help-row-title">{title}</h4>
      <p className="help-row-desc">{desc}</p>
    </div>
  </div>
);

const HelpCenterScreen = ({ onBack }: Props) => {
  return (
    <div className="main-content" style={{ background: '#fff' }}>
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}><ArrowLeft size={24} /></button>
        <div className="page-title">Help& FAQ</div>
      </div>

      <div className="help-container">
        <div className="help-search-wrapper">
          <div className="help-search-icon">
            <Search size={18} strokeWidth={2.5} />
          </div>
          <input
            type="text"
            placeholder="Search for help"
            className="help-search-input"
          />
        </div>

        <h3 className="help-section-title">Popular Topics</h3>

        <HelpRow
          icon={<span style={{ fontSize: 32, fontWeight: 900, letterSpacing: -2 }}>Rx</span>}
          title="Prescriptions"
          desc="learn how to manage your prescription"
        />

        <HelpRow
          icon={<MonitorDot size={36} strokeWidth={2} />}
          title="Ordering"
          desc="find out how to order your medications"
        />

        <HelpRow
          icon={<span style={{ fontSize: 40, fontWeight: 900 }}>?</span>}
          title="General"
          desc="Get answers to common questions"
        />

        <HelpRow
          icon={<Truck size={36} strokeWidth={2} />}
          title="Delivery"
          desc="Learn about our delivery options"
        />
      </div>
    </div>
  );
};

export default HelpCenterScreen;
