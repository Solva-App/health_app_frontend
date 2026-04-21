import { useState } from 'react';
import { ArrowLeft, MapPin, Truck } from 'lucide-react';

interface Props {
  onBack?: () => void;
  onNext?: () => void;
}

const DeliveryOptionsScreen = ({ onBack, onNext }: Props) => {
  const [selected, setSelected] = useState('home');

  return (
    <div className="main-content">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Delivery Options</div>
      </div>

      <div style={{ padding: '20px' }}>
        <div 
          className="delivery-card"
          onClick={() => setSelected('home')}
        >
          <div className="delivery-icon-wrap" style={{marginLeft: -2}}>
            <Truck size={26} color="#f44336" />
          </div>
          <div className="delivery-text">
            <h4>Home Delivery</h4>
            <p>Estimated delivery: Tomorrow</p>
          </div>
          <div className={`delivery-radio ${selected === 'home' ? 'delivery-radio--selected' : ''}`} />
        </div>

        <div 
          className="delivery-card"
          onClick={() => setSelected('pickup')}
        >
          <div className="delivery-icon-wrap" style={{marginLeft: -2}}>
            <MapPin size={26} color="#f44336" fill="#f44336" />
          </div>
          <div className="delivery-text">
            <h4>Pickup</h4>
            <p>Find a location near you</p>
          </div>
          <div className={`delivery-radio ${selected === 'pickup' ? 'delivery-radio--selected' : ''}`} />
        </div>
      </div>

      <div className="main-bottom-actions" style={{ position: 'absolute', bottom: 0, width: 'calc(100% - 40px)' }}>
        <button className="fluid-btn fluid-btn--solid" onClick={onNext}>
          <div className="fluid-btn__overlay">
            <span>Continue</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DeliveryOptionsScreen;
