import { ArrowLeft, BellPlus } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  onBack?: () => void;
}

const NotificationsScreen = ({ onBack }: Props) => {
  const app = useApp();
  const {
    notifOrderStatus, setNotifOrderStatus,
    notifOrderChanges, setNotifOrderChanges,
    notifRefill, setNotifRefill,
    notifDrugAlert, setNotifDrugAlert,
    showToast,
  } = app;

  const handleToggle = (setter: (v: boolean) => void, value: boolean, label: string) => {
    setter(!value);
    showToast(`${label} ${!value ? 'enabled' : 'disabled'}`, 'info');
  };

  const orderItems = [
    { title: 'Order Status',   subtitle: 'placed, shipped, and delivered', value: notifOrderStatus,  set: setNotifOrderStatus },
    { title: 'Order Changes',  subtitle: 'Delays  or Cancellations',       value: notifOrderChanges, set: setNotifOrderChanges },
  ];

  const medItems = [
    { title: 'Refill Reminders',       subtitle: 'Time to refill prescriptions.',    value: notifRefill,    set: setNotifRefill },
    { title: 'Drug interaction Alerts', subtitle: 'potential medication interactions.', value: notifDrugAlert, set: setNotifDrugAlert },
  ];

  return (
    <div className="notif-screen">
      {/* Header */}
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}><ArrowLeft size={24} /></button>
        <div className="page-title" style={{ color: '#000' }}>Notifications</div>
      </div>

      <div className="notif-body">
        {/* Order Updates */}
        <h3 className="prof-section-heading">Order Updates</h3>
        <div className="prof-section-divider" />

        {orderItems.map(item => (
          <div key={item.title} className="notif-item" onClick={() => handleToggle(item.set, item.value, item.title)}>
            <div className="notif-item__text">
              <div className="notif-item__title">{item.title}</div>
              <div className="notif-item__sub">{item.subtitle}</div>
            </div>
            <div className="notif-item__bell">
              <BellPlus size={30} color="#e53935" fill="#e53935" />
            </div>
          </div>
        ))}

        {/* Medication Management */}
        <h3 className="prof-section-heading prof-section-heading--mt">Medication Management</h3>

        {medItems.map(item => (
          <div key={item.title} className="notif-item" onClick={() => handleToggle(item.set, item.value, item.title)}>
            <div className="notif-item__text">
              <div className="notif-item__title">{item.title}</div>
              <div className="notif-item__sub">{item.subtitle}</div>
            </div>
            <div className="notif-item__bell">
              <BellPlus size={30} color="#e53935" fill="#e53935" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsScreen;
