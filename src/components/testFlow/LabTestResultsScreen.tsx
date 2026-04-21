import { useState } from 'react';
import { ArrowLeft, RotateCw, Lock, Building2, CreditCard, ChevronRight } from 'lucide-react';

interface Props {
  onBack?: () => void;
  onPayBank?: () => void;
  onPayCard?: () => void;
}

const LabTestResultsScreen = ({ onBack, onPayBank, onPayCard }: Props) => {
  const [showSheet, setShowSheet] = useState(false);

  return (
    <div className="ltr-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Lab Test Results</div>
      </div>

      <div className="ltr-body">
        <hr className="ltr-divider" />
        
        <h4 className="ltr-subtitle">
          Your test result are ready
        </h4>

        <div className="ltr-icon-wrapper">
          <div className="ltr-icon-composed">
            <RotateCw size={100} color="#e53935" className="ltr-icon-spin" strokeWidth={2.5} />
            <Lock size={44} color="#e53935" fill="#e53935" className="ltr-icon-lock" />
          </div>
        </div>

        <h3 className="ltr-status-title">Test complete</h3>
        <p className="ltr-status-desc">
          10 parameters measured<br />
          pay to see details
        </p>
      </div>

      <div className="ltr-footer">
        <button 
          className="ltr-btn fluid-btn--solid" 
          onClick={() => setShowSheet(true)}
        >
          <div className="ltr-btn-overlay">
            Pay N1,000 to unlock detailed results
          </div>
        </button>
      </div>

      {showSheet && (
        <div className="ltr-sheet-overlay" onClick={() => setShowSheet(false)}>
          <div className="ltr-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="ltr-sheet-handle"></div>
            <div className="ltr-sheet-title">Chose Payment Method</div>
            
            <button className="ltr-sheet-item ltr-sheet-item--red" onClick={onPayBank}>
              <div className="ltr-sheet-item__left">
                <Building2 size={24} className="ltr-sheet-item__icon" />
                Bank Transfer
              </div>
              <ChevronRight size={24} className="ltr-sheet-item__chevron" />
            </button>

            <button className="ltr-sheet-item ltr-sheet-item--faded" onClick={onPayCard}>
              <div className="ltr-sheet-item__left">
                <CreditCard size={24} fill="#fff" className="ltr-sheet-item__icon" />
                <span>Card</span>
              </div>
              <ChevronRight size={24} className="ltr-sheet-item__chevron" />
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default LabTestResultsScreen;
