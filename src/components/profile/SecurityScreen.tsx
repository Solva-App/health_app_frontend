
import { ArrowLeft, ShieldCheck } from 'lucide-react';

interface Props {
  onBack?: () => void;
}

const SecurityScreen = ({ onBack }: Props) => {
  return (
    <div className="main-content" style={{ background: '#fff' }}>
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}><ArrowLeft size={24} /></button>
        <div className="page-title">security</div>
      </div>

      <div className="security-container">
        <div className="security-header">
          <h2 className="security-title">Change password</h2>
          <ShieldCheck size={28} color="#c80000" fill="#c80000" style={{ color: '#fff' }} />
        </div>

        <div className="security-input-wrapper">
          <input
            type="password"
            placeholder="New password"
            className="security-input"
          />
        </div>

        <div className="security-input-wrapper">
          <input
            type="password"
            placeholder="Comfirm password"
            className="security-input"
          />
        </div>
      </div>
    </div>
  );
};

export default SecurityScreen;
