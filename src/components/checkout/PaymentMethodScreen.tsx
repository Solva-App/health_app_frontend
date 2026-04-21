import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, Landmark, CreditCard, Grip } from 'lucide-react';

interface Props {
  onBack?: () => void;
  onNext?: () => void;
}

const PaymentMethodScreen = ({ onBack, onNext }: Props) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  return (
    <div className="main-content" style={{ backgroundColor: '#fff', minHeight: '100vh', paddingBottom: 100 }}>
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Payment</div>
      </div>

      <div className="pmt-section-title">
        Select a Payment Method
      </div>

      <div className="pmt-box">
        <div className="pmt-box__header">
          <div className="pmt-box__header-left">
            <div className="pmt-paystack-icon">
              <span>$</span>
            </div>
            <span className="pmt-paystack-text">Paystack</span>
          </div>
          <ChevronDown size={20} color="#000" />
        </div>

        <div 
          className="pmt-option" 
          style={{ borderColor: selectedMethod === 'bank' ? '#f44336' : '#f2f2f2' }}
          onClick={() => setSelectedMethod('bank')}
        >
          <div className="pmt-option__text">
            <h4>Bank Transfer</h4>
            <p>Pay via your bank app</p>
          </div>
          <Landmark size={24} color="#555" />
        </div>

        <div 
          className="pmt-option" 
          style={{ borderColor: selectedMethod === 'card' ? '#f44336' : '#f2f2f2' }}
          onClick={() => setSelectedMethod('card')}
        >
          <div className="pmt-option__text">
            <h4>Card</h4>
            <p>Pay with your debt card</p>
          </div>
          <CreditCard size={24} color="#f44336" fill="#111" strokeWidth={1} />
        </div>

        <div 
          className="pmt-option" 
          style={{ borderColor: selectedMethod === 'ussd' ? '#f44336' : '#f2f2f2' }}
          onClick={() => setSelectedMethod('ussd')}
        >
          <div className="pmt-option__text">
            <h4>USSD</h4>
            <p>Pay via USSD code</p>
          </div>
          <Grip size={24} color="#f44336" />
        </div>
      </div>

      <div className="pmt-other-box">
        <span className="pmt-other-text">Other Payment Methods</span>
        <ChevronUp size={20} color="#000" />
      </div>

      <div className="main-bottom-actions">
        <button 
          className="fluid-btn fluid-btn--solid" 
          onClick={onNext}
        >
          <div className="fluid-btn__overlay">
            <span>Pay Now</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodScreen;
