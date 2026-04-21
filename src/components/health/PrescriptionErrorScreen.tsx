import { ArrowLeft, X } from 'lucide-react';
import BottomNav from '../main/BottomNav';

interface Props {
  onBack?: () => void;
  onRetry?: () => void;
  onTabChange?: (tab: string) => void;
}

const PrescriptionErrorScreen = ({ onBack, onRetry, onTabChange }: Props) => {
  return (
    <div className="ps-error-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}><ArrowLeft size={24} /></button>
        <div className="page-title">Upload Prescription</div>
      </div>

      <div className="ps-error-divider" />

      <div className="ps-error-body">
        <div className="ps-error-card">
          <div className="ps-error-icon-wrap">
            <X size={50} color="#fff" strokeWidth={3} />
          </div>

          <h3 className="ps-error-title">
            INVALID PRESCRIPTION UPLOAD
          </h3>

          <p className="ps-error-desc">
            Please ensure the image is clear and all informaton is visible. then, try again
          </p>

          <button className="ps-error-btn fluid-btn--solid" onClick={onRetry}>
            <div className="ps-error-btn-overlay">
              Retry
            </div>
          </button>
        </div>
      </div>

      {onTabChange && <BottomNav currentTab="home" onTabChange={onTabChange} />}
    </div>
  );
};

export default PrescriptionErrorScreen;
