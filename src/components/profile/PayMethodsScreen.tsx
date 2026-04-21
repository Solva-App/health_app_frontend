import { useState } from 'react';
import { ArrowLeft, CheckCircle, Circle, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  onBack?: () => void;
}

const PayMethodsScreen = ({ onBack }: Props) => {
  const { payCards, addPayCard, removePayCard, selectedCard, setSelectedCard, showToast } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ number: '', expiry: '', cvv: '', name: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.number.replace(/\s/g, '').length < 12) e.number = 'Enter a valid card number.';
    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) e.expiry = 'Use MM/YY format.';
    if (form.cvv.length < 3) e.cvv = 'CVV must be 3–4 digits.';
    if (!form.name.trim()) e.name = 'Cardholder name is required.';
    return e;
  };

  const handleAdd = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    const last4 = form.number.replace(/\s/g, '').slice(-4);
    addPayCard({ label: `Visa ending in ${last4}`, expiry: `Expires ${form.expiry}` });
    setForm({ number: '', expiry: '', cvv: '', name: '' });
    setErrors({});
    setShowModal(false);
  };

  const formatCardNumber = (val: string) =>
    val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();

  // Demo cards if none exist
  const displayCards = payCards.length > 0 ? payCards : [
    { id: 'demo1', label: 'Visa ending in 4567', expiry: 'Expires 08/25' },
    { id: 'demo2', label: 'Visa ending in 4567', expiry: 'Expires 08/25' },
    { id: 'demo3', label: 'Visa ending in 4567', expiry: 'Expires 08/25' },
  ];
  const activeId = selectedCard ?? 'demo1';

  return (
    <div className="paymeth-screen">
      {/* Header */}
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}><ArrowLeft size={24} /></button>
        <div className="page-title" style={{ color: '#000' }}>Pay Methods</div>
      </div>

      <div className="paymeth-body">
        <h3 className="prof-section-heading">Saved Payment Methods</h3>
        <div className="prof-section-divider" />

        {displayCards.map((card) => (
          <div
            key={card.id}
            className="prof-list-card"
            onClick={() => setSelectedCard(card.id)}
          >
            {/* Red card icon */}
            <div className="paymeth-card-icon">
              <div className="paymeth-card-icon__stripe" />
            </div>

            <div className="prof-list-card__info">
              <div className="prof-list-card__title">{card.label}</div>
              <div className="prof-list-card__sub paymeth-expiry">{card.expiry}</div>
            </div>

            {card.id === activeId ? (
              <div className="prof-list-card__badge">
                <span className="prof-list-card__badge-text">Dafault</span>
                <CheckCircle size={22} color="#e53935" fill="#e53935" />
              </div>
            ) : (
              <div className="prof-list-card__actions">
                <Circle size={22} color="#e53935" />
                {payCards.length > 0 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); removePayCard(card.id); }}
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
          + &nbsp;Add New Card
        </button>
      </div>

      {/* Save Changes — fluid button pinned to bottom */}
      <div className="card-payment-footer">
        <button
          id="save-pay-methods-btn"
          className="fluid-btn fluid-btn--solid card-payment-btn"
          onClick={() => showToast('Payment methods saved!', 'success')}
        >
          <div className="fluid-btn__overlay"><span>Save Changes</span></div>
        </button>
      </div>

      {/* Add Card Modal */}
      {showModal && (
        <div className="prof-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="prof-modal" onClick={e => e.stopPropagation()}>
            <div className="prof-modal__handle" />
            <h3 className="prof-modal__title">Add New Card</h3>

            {[
              { key: 'name',   label: 'Cardholder Name', placeholder: 'e.g. David Marvis',    type: 'text' },
              { key: 'number', label: 'Card Number',      placeholder: 'XXXX XXXX XXXX XXXX', type: 'text' },
              { key: 'expiry', label: 'Expiry Date',      placeholder: 'MM/YY',               type: 'text' },
              { key: 'cvv',    label: 'CVV',              placeholder: '•••',                  type: 'password' },
            ].map(field => (
              <div key={field.key} style={{ marginBottom: 14 }}>
                <label className="prof-modal__field-label">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={(form as any)[field.key]}
                  onChange={e => {
                    let val = e.target.value;
                    if (field.key === 'number') val = formatCardNumber(val);
                    if (field.key === 'expiry') val = val.replace(/\D/g, '').slice(0, 4).replace(/^(\d{2})(\d)/, '$1/$2');
                    if (field.key === 'cvv') val = val.replace(/\D/g, '').slice(0, 4);
                    setForm(f => ({ ...f, [field.key]: val }));
                    setErrors(err => ({ ...err, [field.key]: '' }));
                  }}
                  className="prof-modal__input"
                  style={{ borderColor: errors[field.key] ? '#e53935' : '#eee' }}
                />
                {errors[field.key] && <p className="prof-modal__error">{errors[field.key]}</p>}
              </div>
            ))}

            <button onClick={handleAdd} className="fluid-btn fluid-btn--solid card-payment-btn" style={{ margin: '8px 0 0' }}>
              <div className="fluid-btn__overlay"><span>Add Card</span></div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayMethodsScreen;
