import { ArrowLeft, Home, Book } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  onBack?: () => void;
}

const PrescriptionStatusScreen = ({ onBack }: Props) => {
  const { addresses } = useApp();
  const address = addresses.length > 0 ? addresses[0] : null;

  return (
    <div className="ps-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Prescription status</div>
      </div>

      <div className="ps-divider" />

      <div className="ps-body">
        <div className="ps-header-info">
          <h3 className="ps-order-id">Ordern #1524363546</h3>
          <p className="ps-order-date">
            Submied on 10/20/2025
          </p>
        </div>

        <div className="ps-status-card">
          <div className="ps-icon-wrap">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path d="M8 8h48a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H20l-12 8V12a4 4 0 0 1 4-4z" fill="#e53935" />
              <polygon points="32,20 36,28 45,29 39,35 41,44 32,39 23,44 25,35 19,29 28,28" fill="white" />
            </svg>
          </div>
          <h4 className="ps-status-card__title">Pending Review</h4>
          <p className="ps-status-card__desc">
            Your prescription is under review. we'll notify you once it's approved or if any further information is needed
          </p>
        </div>

        <div className="ps-extracted-info">
          <h3 className="ps-extracted-title">Extracted from Upload</h3>

          <div className="ps-info-row">
            <div className="ps-info-icon">
              <Home size={34} color="#333" strokeWidth={1.5} />
            </div>
            <div>
              <div className="ps-info-label">Address</div>
              <div className="ps-info-value">
                {address ? (
                  <>{address.line1}<br />{address.line2}</>
                ) : (
                  <>123 Eke Street, Apt 48<br />Anytown, CA 92176</>
                )}
              </div>
            </div>
          </div>

          <div className="ps-info-row">
            <div className="ps-info-icon ps-info-icon--red">
              <Book size={24} color="white" strokeWidth={2} />
            </div>
            <div>
              <div className="ps-info-label">Precribe by</div>
              <div className="ps-info-label">Dr Ruth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionStatusScreen;
