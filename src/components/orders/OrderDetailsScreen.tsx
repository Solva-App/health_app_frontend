
import { ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  orderId?: string | null;
  onBack?: () => void;
  onContactSupport?: () => void;
}

const DEMO_ITEMS = [
  { name: 'Ibuprofen 200mg',      dosage: '30 tablets',  qty: 1, price: 15.99 },
  { name: 'Vitamin D3 1000IU –',  dosage: '60 capsules', qty: 1, price: 10.00 },
  { name: 'Acetaminophen 500mg',  dosage: '100 tablets', qty: 1, price: 20.00 },
];

const OrderDetailsScreen = ({ orderId, onBack, onContactSupport }: Props) => {
  const { orders } = useApp();
  const order = (orderId ? orders.find(o => o.id === orderId) : null) ?? orders[0];

  const items    = order?.items?.length > 0 ? order.items : DEMO_ITEMS;
  const subtotal = items.reduce((s: number, i: any) => s + i.price * i.qty, 0);
  const shipping = 0; // Free
  const total    = subtotal + shipping;

  return (
    <div className="od-screen">
      {/* Header */}
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title" style={{ color: '#000' }}>Order Details</div>
      </div>

      {/* Scrollable body */}
      <div className="od-body">
        {/* Order number */}
        <div className="od-order-number">Order {order?.id ?? '#1524363546'}</div>

        {/* Dark red wave banner */}
        <div className="od-banner">
          <div className="od-banner__row">
            <span className="od-banner__label">Order Date:</span>
            <span className="od-banner__value">{order?.date ?? 'May 15, 2024'}</span>
          </div>
          <div className="od-banner__row">
            <span className="od-banner__label">Total:</span>
            <span className="od-banner__value">${total.toFixed(2)}</span>
          </div>
          <div className="od-banner__row">
            <span className="od-banner__label">Status:</span>
            <span className="od-banner__value od-banner__value--status">
              {order?.status ?? 'Delivered'}
            </span>
          </div>
        </div>

        {/* Invoice */}
        <div className="od-section">
          <h4 className="od-section__title">Invoice</h4>

          {items.map((item: any, idx: number) => (
            <div key={idx} className="od-invoice-item">
              <div>
                <div className="od-invoice-item__name">{item.name}</div>
                <div className="od-invoice-item__sub">{item.qty} × {item.dosage}</div>
              </div>
              <div className="od-invoice-item__price">
                — ${(item.price * item.qty).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="od-summary">
            <div className="od-summary__row">
              <span>Subtotal:</span><span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="od-summary__row">
              <span>Shipping:</span><span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
            </div>
            <div className="od-summary__row od-summary__row--total">
              <span>Total:</span><span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="od-section">
          <h4 className="od-section__title">Delivery Information</h4>
          <div className="od-info-row">
            <span className="od-info-row__label">Delivery Address:</span>
            <span className="od-info-row__value">123 Main St, Anytown, USA</span>
          </div>
          <div className="od-info-row">
            <span className="od-info-row__label">Delivery Date:</span>
            <span className="od-info-row__value">May 17, 2024</span>
          </div>
          <div className="od-info-row">
            <span className="od-info-row__label">Tracking Number:</span>
            <span className="od-info-row__value">9876543210</span>
          </div>
        </div>
      </div>

      {/* Contact Support button */}
      <div className="card-payment-footer">
        <button
          id="contact-support-btn"
          className="fluid-btn fluid-btn--solid card-payment-btn"
          onClick={onContactSupport}
        >
          <div className="fluid-btn__overlay">
            <span>Contact Support</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default OrderDetailsScreen;
