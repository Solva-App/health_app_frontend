import { useState } from 'react';
import { ArrowLeft, Home, CheckCircle, Circle, X, Briefcase } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  onBack?: () => void;
}

const AddressesScreen = ({ onBack }: Props) => {
  const { addresses, addAddress, removeAddress, selectedAddress, setSelectedAddress } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ label: 'Home', line1: '', line2: '' });
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (!form.line1.trim()) { setError('Street address is required.'); return; }
    addAddress({ label: form.label, line1: form.line1, line2: form.line2 });
    setForm({ label: 'Home', line1: '', line2: '' });
    setError('');
    setShowModal(false);
  };

  // Demo addresses if none exist
  const displayAddresses = addresses.length > 0 ? addresses : [
    { id: 'demo1', label: 'Home', line1: '123 Eke  Street, Apt 48', line2: 'Anytown, CA 92176' },
    { id: 'demo2', label: 'Home', line1: '123 Eke  Street, Apt 48', line2: 'Anytown, CA 92176' },
    { id: 'demo3', label: 'Home', line1: '123 Eke  Street, Apt 48', line2: 'Anytown, CA 92176' },
  ];
  const activeId = selectedAddress ?? 'demo1';

  return (
    <div className="addr-screen">
      {/* Header */}
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}><ArrowLeft size={24} /></button>
        <div className="page-title" style={{ color: '#000' }}>Addresses</div>
      </div>

      <div className="addr-body">
        <h3 className="prof-section-heading">Saved Addresses</h3>
        <div className="prof-section-divider" />

        {displayAddresses.map((addr) => (
          <div
            key={addr.id}
            className="prof-list-card"
            onClick={() => setSelectedAddress(addr.id)}
          >
            {addr.label === 'Work'
              ? <Briefcase size={28} strokeWidth={1.5} color="#444" className="prof-list-card__icon" />
              : <Home size={28} strokeWidth={1.5} color="#444" className="prof-list-card__icon" />}
            <div className="prof-list-card__info">
              <div className="prof-list-card__title">{addr.label}</div>
              <div className="prof-list-card__sub">{addr.line1}</div>
              <div className="prof-list-card__sub">{addr.line2}</div>
            </div>
            {addr.id === activeId ? (
              <div className="prof-list-card__badge">
                <span className="prof-list-card__badge-text">Dafault</span>
                <CheckCircle size={22} color="#e53935" fill="#e53935" />
              </div>
            ) : (
              <div className="prof-list-card__actions">
                <Circle size={22} color="#e53935" />
                {addresses.length > 0 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); removeAddress(addr.id); }}
                    className="prof-list-card__remove"
                  >
                    <X size={16} color="#999" />
                  </button>
                )}
              </div>
            )}
          </div>
        ))}

        <button className="prof-add-btn" onClick={() => setShowModal(true)}>
          + &nbsp;Add New Address
        </button>
      </div>

      {/* Add Address Modal */}
      {showModal && (
        <div className="prof-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="prof-modal" onClick={e => e.stopPropagation()}>
            <div className="prof-modal__handle" />
            <h3 className="prof-modal__title">Add New Address</h3>

            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
              {['Home', 'Work', 'Other'].map(l => (
                <button
                  key={l}
                  onClick={() => setForm(f => ({ ...f, label: l }))}
                  className={`prof-modal__label-btn ${form.label === l ? 'prof-modal__label-btn--active' : ''}`}
                >
                  {l === 'Home' ? '🏠' : l === 'Work' ? '💼' : '📍'} {l}
                </button>
              ))}
            </div>

            <input type="text" placeholder="Street address (e.g. 45 Main Street, Apt 3)"
              value={form.line1} onChange={e => setForm(f => ({ ...f, line1: e.target.value }))}
              className="prof-modal__input" />
            <input type="text" placeholder="City, State, ZIP (e.g. Lagos, NG 10001)"
              value={form.line2} onChange={e => setForm(f => ({ ...f, line2: e.target.value }))}
              className="prof-modal__input" />
            {error && <p className="prof-modal__error">{error}</p>}

            <button onClick={handleAdd} className="fluid-btn fluid-btn--solid card-payment-btn" style={{ margin: '8px 0 0' }}>
              <div className="fluid-btn__overlay"><span>Save Address</span></div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressesScreen;
