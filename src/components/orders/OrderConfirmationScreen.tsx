import { ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  onBack?: () => void;
  onViewOrderDetails?: () => void;
}

const OrderConfirmationScreen = ({ onBack, onViewOrderDetails }: Props) => {
  const { orders } = useApp();
  const latestOrder = orders[0];

  const items = latestOrder?.items?.length > 0
    ? latestOrder.items
    : [
        { name: 'Medication A', dosage: '100mg', qty: 1, price: 2990 },
        { name: 'Medication B', dosage: '50mg',  qty: 1, price: 100  },
      ];

  const subtotal = items.reduce((s: number, i: any) => s + i.price * i.qty, 0);
  const shipping = 5;
  const total    = subtotal + shipping;

  return (
    <div className="order-confirm-screen">
      {/* Header */}
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title" style={{ color: '#000' }}>Order Confirmation</div>
      </div>

      {/* Scrollable body */}
      <div className="order-confirm-body">
        {/* Double green checkmark */}
        <div className="order-confirm-icon">
          <svg width="90" height="56" viewBox="0 0 90 56" fill="none">
            <path d="M2 32L18 48L48 8"  stroke="#4caf50" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 32L38 48L68 8" stroke="#4caf50" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Title + subtitle */}
        <h3 className="order-confirm-title">Order Placed!</h3>
        <p className="order-confirm-subtitle">
          Your order has been successfully placed. you will receive an email comfirmation shortly.
        </p>

        {/* Receipt box */}
        <div className="order-confirm-box">
          {/* Order number row */}
          <div className="order-confirm-row">
            <span className="order-confirm-label">Order Number</span>
            <span className="order-confirm-val">{latestOrder?.id ?? '#1524363546'}</span>
          </div>
          <div className="order-confirm-divider" />

          {/* Order Summary */}
          <div className="order-confirm-summary-title">Order Summary</div>

          {items.map((item: any, idx: number) => (
            <div key={idx} className="order-confirm-item">
              <div>
                <div className="order-confirm-item__name">{item.name}</div>
                <div className="order-confirm-item__dosage">{item.dosage}</div>
              </div>
              <div className="order-confirm-item__price">
                ${(item.price * item.qty).toLocaleString('en-US', { minimumFractionDigits: 3 })}
              </div>
            </div>
          ))}

          <div className="order-confirm-divider" />

          {/* Shipping */}
          <div className="order-confirm-item" style={{ fontWeight: 400 }}>
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>

          {/* Total */}
          <div className="order-confirm-item order-confirm-total">
            <span>Total</span>
            <span>${total.toLocaleString('en-US', { minimumFractionDigits: 3 })}</span>
          </div>
        </div>
      </div>

      {/* CTA button — pinned to bottom */}
      <div className="card-payment-footer">
        <button
          id="view-order-details-btn"
          className="fluid-btn fluid-btn--solid card-payment-btn"
          onClick={onViewOrderDetails}
        >
          <div className="fluid-btn__overlay">
            <span>View Order Details</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationScreen;
