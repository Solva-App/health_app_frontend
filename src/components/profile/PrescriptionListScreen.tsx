
import { ArrowLeft, Book } from 'lucide-react';

interface Props {
  onBack?: () => void;
  onSelectPrescription?: () => void;
}

const PrescriptionCard = ({ onClick }: { onClick?: () => void }) => (
  <button 
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      width: '100%',
      padding: '24px 20px',
      background: '#fff',
      border: 'none',
      borderRadius: '8px',
      marginBottom: 16,
      cursor: 'pointer',
      boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
      textAlign: 'left'
    }}
  >
    <div style={{
      width: 44, height: 44, borderRadius: '8px', background: '#c80000',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <Book color="#fff" size={24} />
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 18, fontWeight: 700, color: '#000', marginBottom: 2 }}>Prescription for ibufrome</div>
      <div style={{ fontSize: 14, color: '#000', fontWeight: 500 }}>Uploaded on 10/20/2025</div>
    </div>
    <span style={{ fontSize: 20, color: '#000', fontWeight: 600 }}>{'>'}</span>
  </button>
);

const PrescriptionListScreen = ({ onBack, onSelectPrescription }: Props) => {
  return (
    <div className="main-content" style={{ background: '#fff', overflowY: 'auto' }}>
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}><ArrowLeft size={24} /></button>
        <div className="page-title">Prescription</div>
      </div>

      <div style={{ padding: '30px 20px 40px' }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#000', marginBottom: 24 }}>Upload Prescription</h3>

        <PrescriptionCard onClick={onSelectPrescription} />
        <PrescriptionCard onClick={onSelectPrescription} />
        <PrescriptionCard onClick={onSelectPrescription} />
        <PrescriptionCard onClick={onSelectPrescription} />
      </div>
    </div>
  );
};

export default PrescriptionListScreen;
