
import { ArrowLeft, QrCode, SquareAsterisk } from 'lucide-react';

interface Props {
  onBack?: () => void;
  onNext?: () => void;
  onScanQRCode?: () => void;
  onEnterCode?: () => void;
}

const LinkTestScreen = ({ onBack, onScanQRCode, onEnterCode }: Props) => {
  return (
    <div className="main-content" style={{ backgroundColor: '#fafafa' }}>
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Link Test</div>
      </div>

      <div style={{ padding: '20px' }}>
        <h3 style={{ color: '#f44336', fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
          Link your test session
        </h3>
        <p style={{ color: '#000', fontSize: 13, lineHeight: 1.4, marginBottom: 30 }}>
          Link your test session at the station to create a<br />
          temporary unpaid session
        </p>

        <h4 style={{ fontSize: 16, fontWeight: 800, color: '#000', marginBottom: 20 }}>
          Link New Test
        </h4>
      </div>

      <div className="scan-card" onClick={onScanQRCode}>
        <QrCode size={40} className="scan-card-icon" />
        <h4>Scan QR Code</h4>
      </div>

      <div className="scan-card" onClick={onEnterCode}>
        <SquareAsterisk size={40} className="scan-card-icon" />
        <h4>Enter Code</h4>
      </div>
    </div>
  );
};

export default LinkTestScreen;
