import { ArrowLeft, FlaskConical } from 'lucide-react';
import BottomNav from '../main/BottomNav';

interface Props {
  onBack?: () => void;
  onTabChange?: (tab: string) => void;
}

const NotificationInboxScreen = ({ onBack, onTabChange }: Props) => {
  return (
    <div className="ninbox-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Notification</div>
      </div>

      <div className="ninbox-body">
        <div className="ninbox-card">
          <div className="ninbox-icon-wrap">
            <FlaskConical size={36} color="#e53935" fill="#e53935" strokeWidth={1.5} />
          </div>
          <div className="ninbox-text">
            <h3 className="ninbox-title">Lab Results</h3>
            <p className="ninbox-desc">your urine test is ready - pay to view full results</p>
          </div>
        </div>
      </div>

      {onTabChange && <BottomNav currentTab="home" onTabChange={onTabChange} />}
    </div>
  );
};

export default NotificationInboxScreen;
