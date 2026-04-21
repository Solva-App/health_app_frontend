import { ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  onBack?: () => void;
  onViewOrder: (orderId: string) => void;
}

const STATUS_TEXT_COLOR: Record<string, string> = {
  'Processing':       '#000',
  'Out for Delivery': '#e53935',
  'Delivered':        '#000',
  'Canceled':         '#000',
};

const OrdersListScreen = ({ onBack, onViewOrder }: Props) => {
  const { orders } = useApp();

  // Demo orders if none exist
  const displayOrders = orders.length > 0 ? orders : [
    { id: '#1524363546', status: 'Processing',       date: '10/20/2025' },
    { id: '#1524363546', status: 'Out for Delivery', date: '10/20/2025' },
    { id: '#1524363546', status: 'Delivered',        date: '10/20/2025' },
    { id: '#1524363546', status: 'Canceled',         date: '10/20/2025' },
  ];

  return (
    <div className="orders-screen">
      {/* Header */}
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title" style={{ color: '#000' }}>Orders</div>
      </div>

      {/* Red divider */}
      <div className="orders-divider" />

      {/* Order cards */}
      <div className="orders-list">
        {displayOrders.map((order, index) => (
          <div
            key={index}
            className="orders-card"
            onClick={() => onViewOrder(typeof order.id === 'string' ? order.id : String(order.id))}
          >
            <div className="orders-card__left">
              <div className="orders-card__id">Ordern {order.id}</div>
              <div
                className="orders-card__status"
                style={{ color: STATUS_TEXT_COLOR[order.status] ?? '#000' }}
              >
                {order.status}
              </div>
            </div>
            <div className="orders-card__right">
              <span className="orders-card__date">{order.date ?? '10/20/2025'}</span>
              <span className="orders-card__chevron">{'>'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersListScreen;
