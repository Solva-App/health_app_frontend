import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack?: () => void;
  onScan?: () => void;
}

const ScanQRCodeScreen = ({ onBack, onScan }: Props) => {
  return (
    <div className="scan-qr-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Scan QR Code</div>
      </div>

      <div className="scan-qr-body">
        <div className="scan-qr-camera-view">
          
          {/* Mock Camera Viewfinder */}
          <img 
            src="/scan-qr-placeholder.png" 
            alt="Scan QR" 
            className="scan-qr-camera-img"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      </div>

      <div className="scan-qr-footer">
        <button 
          className="scan-qr-btn fluid-btn--solid" 
          onClick={onScan}
        >
          <div className="scan-qr-btn-overlay">
            Scan
          </div>
        </button>
      </div>
    </div>
  );
};

export default ScanQRCodeScreen;
