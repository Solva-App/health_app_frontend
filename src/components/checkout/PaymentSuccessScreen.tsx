
import { ArrowLeft, Check } from 'lucide-react';

interface Props {
  onBack?: () => void;
  onNext?: () => void;
}

const PaymentSuccessScreen = ({ onBack, onNext }: Props) => {
  return (
    <div className="pmt-success-screen">
      {/* Header */}
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title" style={{ color: '#000' }}>Payment</div>
      </div>

      {/* Content */}
      <div className="pmt-success-body">
        {/* Success Icon */}
        <div className="pmt-success-circle">
          <Check size={44} color="white" strokeWidth={3} />
        </div>

        {/* Title */}
        <h2 className="pmt-success-title">Payment successful</h2>

        {/* Subtitle */}
        <p className="pmt-success-subtitle">
          Your payment has been processed successfully, you can now view your full test results.
        </p>
      </div>

      {/* CTA Button — pinned to bottom */}
      <div className="card-payment-footer">
        <button
          id="view-results-btn"
          className="fluid-btn fluid-btn--solid card-payment-btn"
          onClick={onNext}
        >
          <div className="fluid-btn__overlay">
            <span>View Full Results</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessScreen;
