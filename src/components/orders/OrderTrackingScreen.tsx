
import { ArrowLeft, Gift } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  orderId?: string | null;
  onBack?: () => void;
  onViewOrderDetails?: () => void;
}

const OrderTrackingScreen = ({ orderId, onBack, onViewOrderDetails }: Props) => {
  const { orders } = useApp();
  const order = (orderId ? orders.find(o => o.id === orderId) : null) ?? orders[0];

  const getProgress = (status: string) => {
    switch (status) {
      case 'Processing':       return 25;
      case 'Out for Delivery': return 65;
      case 'Delivered':        return 100;
      case 'Canceled':         return 0;
      default:                 return 25;
    }
  };

  const progress = order ? getProgress(order.status) : 25;

  const steps = [
    {
      label: 'Order Placed',
      desc: 'Your order has been confirmed',
      time: 'today  10:00 AM',
      done: progress >= 25,
    },
    {
      label: 'Shipped',
      desc: 'Your order is on its way',
      time: 'Estimated tomorrow  12:00 PM',
      done: progress >= 65,
    },
    {
      label: 'Delivered',
      desc: 'Package delivered to your location',
      time: 'Estimated in 2 days.  2:00 PM',
      done: progress >= 100,
    },
  ];

  return (
    <div className="ot-screen">
      {/* Header */}
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title" style={{ color: '#000' }}>Order Tracking</div>
      </div>

      {/* Scrollable body */}
      <div className="ot-body">
        {/* Gift icon + order info */}
        <div className="ot-hero">
          <div className="ot-hero__icon">
            <Gift size={44} color="#e53935" fill="#e53935" />
          </div>
          <div>
            <div className="ot-hero__title">Order Placed is on it's way</div>
            <div className="ot-hero__id">Order {order?.id ?? '#1524363546'}</div>
          </div>
        </div>

        {/* Progress card */}
        <div className="ot-progress-card">
          <div className="ot-progress-card__header">
            <span className="ot-progress-card__label">{order?.status ?? 'Order Placed'}</span>
            <span className="ot-progress-card__pct">{progress}%</span>
          </div>
          <div className="ot-progress-bar">
            <div className="ot-progress-bar__fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="ot-progress-card__sub">Estinated delivery 2-3 Days</div>
        </div>

        {/* Timeline */}
        <div className="ot-timeline">
          {steps.map((step, idx) => (
            <div key={idx} className="ot-step">
              {/* Icon + connector column */}
              <div className="ot-step__col">
                <div className={`ot-step__circle ${step.done ? 'ot-step__circle--done' : ''}`}>
                  {step.done && (
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                      <path d="M1 5L5.5 9.5L13 1" stroke="#fff" strokeWidth="2.2"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                {idx < steps.length - 1 && (
                  <div className="ot-step__line" />
                )}
              </div>
              {/* Text */}
              <div className="ot-step__text">
                <div className="ot-step__label">{step.label}</div>
                <div className="ot-step__desc">{step.desc}</div>
                <div className="ot-step__time">{step.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA button */}
      <div className="card-payment-footer">
        <button
          id="view-order-details-tracking-btn"
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

export default OrderTrackingScreen;
