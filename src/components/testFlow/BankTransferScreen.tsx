import { useState } from 'react';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  onBack?: () => void;
  onNext?: () => void;
}

const BankTransferScreen = ({ onBack, onNext }: Props) => {
  const { showToast } = useApp();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (value: string, field: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedField(field);
      showToast(`${field} copied!`, 'success');
      setTimeout(() => setCopiedField(null), 2000);
    }).catch(() => {
      showToast('Could not copy to clipboard', 'error');
    });
  };

  const bankDetails = [
    { label: 'Account Name',   value: 'Medication co.',  field: 'Account Name'   },
    { label: 'Account Number', value: '1234567890',       field: 'Account Number' },
    { label: 'Bank Name',      value: 'Zenith',           field: 'Bank Name'      },
  ];

  return (
    <div className="bt-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Payment</div>
      </div>

      <div className="bt-body">
        <h2 className="bt-heading">Bank Transfer</h2>
        
        <p className="bt-desc">
          Please make a bank transfer to the following account to complete your payment. Once you've made the transfer, tap 'I've made payment' below
        </p>

        {bankDetails.map(({ label, value, field }) => (
          <div key={field} className="bt-info-card">
            <div className="bt-info-left">
              <span className="bt-info-label">{label}</span>
              <span className="bt-info-value">{value}</span>
            </div>
            <button
              className="bt-copy-btn"
              onClick={() => copyToClipboard(value, field)}
              title={`Copy ${label}`}
            >
              {copiedField === field
                ? <Check size={18} color="#22c55e" />
                : <Copy size={18} color="#e53935" />
              }
            </button>
          </div>
        ))}

        <div className="bt-amount-section">
          <h4 className="bt-amount-label">Amout</h4>
          <div className="bt-amount-value">1,000</div>
        </div>
      </div>

      <div className="bt-footer">
        <button 
          className="bt-btn fluid-btn--solid" 
          onClick={onNext}
        >
          <div className="bt-btn-overlay">
            I've made Payment
          </div>
        </button>
      </div>
    </div>
  );
};

export default BankTransferScreen;
