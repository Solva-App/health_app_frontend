import { ArrowLeft, Clock, Building2, ClipboardList } from 'lucide-react';

interface Props {
  onBack?: () => void;
  onPayAfterTest?: () => void;
  onLabTestStations?: () => void;
  onTestHistoryResult?: () => void;
}

const LaboratoryTestScreen = ({ onBack, onPayAfterTest, onLabTestStations, onTestHistoryResult }: Props) => {
  return (
    <div className="lab-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Laboratory Test</div>
      </div>

      <div className="lab-body">
        <div className="lab-how-it-works">
          <h2 className="lab-how-it-works__title">How it works</h2>
          <p className="lab-how-it-works__desc">
            Pay now to comfirm your tes - result will be sent to your phone instantly after testing
          </p>
        </div>

        <button className="lab-option-card" onClick={onPayAfterTest}>
          <div className="lab-option-card__icons">
            <Clock size={36} color="#f44336" />
          </div>
          <div className="lab-option-card__text">
            <h4 className="lab-option-card__title">Pay After Test</h4>
            <p className="lab-option-card__desc">Pay after your test is completed,<br />Visit the lab</p>
          </div>
        </button>

        <button className="lab-option-card" onClick={onLabTestStations}>
          <div className="lab-option-card__icons">
            <Building2 size={36} color="#f44336" fill="#f44336" />
          </div>
          <div className="lab-option-card__text">
            <h4 className="lab-option-card__title">Lab Test Stations</h4>
          </div>
        </button>

        <button className="lab-option-card" onClick={onTestHistoryResult}>
          <div className="lab-option-card__icons">
            <ClipboardList size={36} color="#f44336" />
          </div>
          <div className="lab-option-card__text">
            <h4 className="lab-option-card__title">Test History Result</h4>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LaboratoryTestScreen;
