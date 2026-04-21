import { ArrowLeft, QrCode } from 'lucide-react';

interface Props {
  onBack?: () => void;
}

const ActiveTestSessionsScreen = ({ onBack }: Props) => {
  return (
    <div className="ats-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Laboratory Test</div>
      </div>

      <div className="ats-body">
        <h2 className="ats-page-title">Active Test Sessions</h2>

        <div className="ats-card">
          <div className="ats-card__left">
            <h4 className="ats-card__name">Urine Analysis</h4>
            <p className="ats-card__status">Active - Ready to use</p>
            <div className="ats-card__code-box">
              <QrCode size={28} className="ats-card__qr-icon" />
              <div className="ats-card__code-text">
                Session Code<br />1234567890
              </div>
            </div>
          </div>
          <div className="ats-card__right">
            <img
              src="/test-tube-sample.jpg"
              alt="Urine Analysis"
              className="ats-card__img"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveTestSessionsScreen;
