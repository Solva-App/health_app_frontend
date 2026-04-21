import { useState } from 'react';
import { ArrowLeft, CreditCard, Clock, Lock, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  onBack?: () => void;
  onNext?: () => void;
}

const CardPaymentScreen = ({ onBack, onNext }: Props) => {
  const { placeOrder, showToast } = useApp();
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');

  const formatCardNumber = (val: string) =>
    val.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})/g, '$1 ').trim();

  const formatExpiry = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + ' / ' + digits.slice(2);
    return digits;
  };

  const isValid = cardNumber.replace(/\s/g, '').length === 16
    && expiry.length >= 4
    && cvv.length >= 3
    && cardName.trim().length > 0;

  const handlePay = () => {
    if (!isValid) {
      showToast('Please fill in all card details', 'error');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      placeOrder();   // ← clear cart & save order to context
      setLoading(false);
      onNext?.();
    }, 1500);
  };

  return (
    <div className="card-payment-screen">
      {/* Header */}
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack} disabled={loading}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title" style={{ color: '#000' }}>Payment</div>
      </div>

      {/* Red separator line */}
      <div className="card-payment-divider" />

      {/* Form */}
      <div className="card-payment-form">
        {/* Card Number */}
        <div className="pmt-input-wrap">
          <CreditCard size={22} color="#e53935" className="pmt-icon" />
          <input
            type="text"
            placeholder="Card Number"
            className="pmt-input"
            value={cardNumber}
            onChange={e => setCardNumber(formatCardNumber(e.target.value))}
            maxLength={19}
            disabled={loading}
          />
        </div>

        {/* Expiry + CVV row */}
        <div className="card-payment-row">
          <div className="pmt-input-wrap card-payment-row__half">
            <Clock size={22} color="#e53935" className="pmt-icon" />
            <input
              type="text"
              placeholder="MM / YY"
              className="pmt-input"
              value={expiry}
              onChange={e => setExpiry(formatExpiry(e.target.value))}
              maxLength={7}
              disabled={loading}
            />
          </div>
          <div className="pmt-input-wrap card-payment-row__half">
            <Lock size={22} color="#e53935" className="pmt-icon" />
            <input
              type="password"
              placeholder="CVV"
              className="pmt-input"
              value={cvv}
              onChange={e => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
              maxLength={4}
              disabled={loading}
            />
          </div>
        </div>

        {/* Cardholder Name */}
        <div className="pmt-input-wrap">
          <User size={22} color="#e53935" className="pmt-icon" />
          <input
            type="text"
            placeholder="Cardholder Name"
            className="pmt-input"
            value={cardName}
            onChange={e => setCardName(e.target.value)}
            disabled={loading}
          />
        </div>
      </div>

      {/* Pay Button — pinned to bottom */}
      <div className="card-payment-footer">
        <button
          id="pay-btn"
          className={`fluid-btn fluid-btn--solid card-payment-btn${!isValid ? ' card-payment-btn--disabled' : ''}`}
          onClick={handlePay}
          disabled={loading || !isValid}
        >
          <div className="fluid-btn__overlay">
            <span>{loading ? 'Processing…' : 'Pay'}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardPaymentScreen;
