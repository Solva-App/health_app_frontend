import { ArrowLeft, MapPin, Pencil, Plus, Minus } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { DRUG_CATALOGUE } from './DrugDetailsScreen';

interface Props {
  onBack?: () => void;
  onProceed?: () => void;
  onBrowse?: () => void;
}

const DELIVERY = 100;

const CartScreen = ({ onProceed, onBrowse, onBack }: Props) => {
  const { cart, updateQty, cartTotal } = useApp();

  // If empty cart handled simply
  if (cart.length === 0) {
    return (
      <div className="cart-empty-screen">
        <div className="top-bar">
          <button className="back-btn-square" onClick={onBack}>
            <ArrowLeft size={24} />
          </button>
          <div className="page-title">Cart</div>
        </div>
        <div className="cart-empty-divider" />

        <div className="cart-empty-body">
          <div className="cart-empty-icon-wrap">
            {/* SVG implementation of the shopping cart icon from design */}
            <svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="#e53935" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1.5" fill="#e53935" stroke="none" />
              <circle cx="20" cy="21" r="1.5" fill="#e53935" stroke="none" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" fill="#e53935" stroke="none" />
            </svg>
          </div>
          
          <h2 className="cart-empty-title">Your cart is empty!</h2>
          
          <p className="cart-empty-desc">
            Browse our selection of affordable medications<br/>and add items to your cart.
          </p>

          <button className="cart-empty-btn fluid-btn--solid" onClick={onBrowse}>
             <div className="cart-empty-btn-overlay">
               Start Browsing Medications
             </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content" style={{ backgroundColor: '#fff', minHeight: '100vh', paddingBottom: 100 }}>
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        {/* Strictly matching design image title */}
        <div className="page-title">Drug Details</div>
      </div>

      <div style={{ padding: '16px 20px' }}>
        {cart.map(item => (
          <div key={item.id} className="cart-card">
            <div className="cart-card__img-wrap">
              <img
                src={(DRUG_CATALOGUE[item.id] as any)?.img ?? '/pills (2).png'}
                alt={item.name}
                className="cart-card__img"
              />
            </div>
            <div className="cart-card__info">
              <div className="cart-card__title">
                {item.name.replace(' 500mg', '')}<br />500mg
              </div>
            </div>
            <div className="cart-card__qty-controls">
              <button className="qty-round-btn" onClick={() => updateQty(item.id, -1)}>
                <Minus size={14} color="#000" />
              </button>
              <span className="qty-val">{item.qty}</span>
              <button className="qty-round-btn" onClick={() => updateQty(item.id, 1)}>
                <Plus size={14} color="#000" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
         <div className="cart-summary__row">
           <span className="cart-summary__label">Subtotal</span>
           <span className="cart-summary__val">${cartTotal.toFixed(2)}</span>
         </div>
         <div className="cart-summary__row">
           <span className="cart-summary__label">Delivery</span>
           <span className="cart-summary__val">${DELIVERY}</span>
         </div>
         <div className="cart-summary__row cart-summary__total-row">
           <span className="cart-summary__label--total">Total</span>
           <span className="cart-summary__val--total">${(cartTotal + DELIVERY).toFixed(3)}</span>
         </div>
      </div>

      <div className="cart-address">
        <div className="cart-address__icon">
          <MapPin size={24} color="#f44336" fill="#f44336" />
        </div>
        <div className="cart-address__text">
          <div className="cart-address__title">Address</div>
          <div className="cart-address__desc">
            123 Eke Street, Apt 48<br/>Anytown, CA 92176
          </div>
        </div>
        <button className="cart-address__edit">
          <Pencil size={20} color="#f44336" fill="#f44336" />
        </button>
      </div>

      <div className="main-bottom-actions">
        <button className="fluid-btn fluid-btn--solid" onClick={onProceed}>
          <div className="fluid-btn__overlay">
            <span>Proceed to Checkout</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CartScreen;
