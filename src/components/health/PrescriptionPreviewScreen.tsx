import { ArrowLeft, UploadCloud } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  onBack?: () => void;
  onContinue?: () => void;
}

const PrescriptionPreviewScreen = ({ onBack, onContinue }: Props) => {
  const { user } = useApp();

  return (
    <div className="rx-preview-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Upload Prescription</div>
      </div>

      <div className="rx-preview-body">
        <h3 className="rx-preview-header">prescription Preview</h3>

        <div className="rx-card">
          <div className="rx-header">
            <h2 className="rx-clinic">MARVIS HEALTH TECH</h2>
            <div className="rx-clinic-sub">
              <span>1234 Mercy Lane, Health City</span>
              <span>123-456-7890</span>
            </div>
          </div>

          <h3 className="rx-title">PRESCRIPTION</h3>

          <div className="rx-field-group">
            <span className="rx-field-label">Patient Name</span>
            <div className="rx-field-value">{user.name || 'John Doe'}</div>
          </div>

          <div className="rx-two-col">
            <div>
              <span className="rx-field-label">Age</span>
              <div className="rx-field-value">32 years</div>
            </div>
            <div>
              <span className="rx-field-label">Date</span>
              <div className="rx-field-value">08/10/2025</div>
            </div>
          </div>

          <div className="rx-field-group">
            <span className="rx-field-label">Prescription:</span>
            <ul className="rx-list">
              <li>Urinalysis (Full Routine Urine Examination)</li>
              <li>Urine Culture &amp; Sensitivity Test</li>
              <li>Microalbumin Test</li>
            </ul>
          </div>

          <div className="rx-field-group">
            <span className="rx-field-label">Purpose / Note:</span>
            <div className="rx-field-value" style={{ lineHeight: 1.5 }}>
              Check for infection, glucose, protein, and microalbumin levels. Fasting not required. Collect midstream urine sample.
            </div>
          </div>

          <div className="rx-footer">
            <div>
              <div className="rx-dr-name">Dr. Ruth (M.D.)</div>
              <div className="rx-demo-label">Sample / Demo Only</div>
            </div>
            <div className="rx-signature">Ruth</div>
          </div>
        </div>
      </div>

      <div className="rx-preview-footer">
        <button className="rx-btn rx-btn--reupload" onClick={onBack}>
          <UploadCloud size={24} />
          <span>Re - upload</span>
        </button>
        <button className="rx-btn fluid-btn--solid rx-btn--continue" onClick={onContinue}>
          <div className="rx-btn-overlay">
            Continue
          </div>
        </button>
      </div>
    </div>
  );
};

export default PrescriptionPreviewScreen;
