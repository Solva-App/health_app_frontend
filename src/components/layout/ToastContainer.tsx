
import { useApp } from '../../context/AppContext';
import { CheckCircle, XCircle, Info } from 'lucide-react';

const ToastContainer = () => {
  const { toasts } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 280,
      maxWidth: 340,
      pointerEvents: 'none',
    }}>
      {toasts.map(toast => (
        <div
          key={toast.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 16px',
            borderRadius: 12,
            background: toast.type === 'success' ? '#1a1a1a' : toast.type === 'error' ? '#c80000' : '#333',
            color: '#fff',
            boxShadow: '0 4px 24px rgba(0,0,0,0.28)',
            animation: 'slideDown 0.3s ease',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {toast.type === 'success' && <CheckCircle size={18} color="#4caf50" />}
          {toast.type === 'error' && <XCircle size={18} color="#ff6b6b" />}
          {toast.type === 'info' && <Info size={18} color="#64b5f6" />}
          <span style={{ flex: 1 }}>{toast.text}</span>
        </div>
      ))}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ToastContainer;
