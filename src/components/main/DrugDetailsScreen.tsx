import { ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DRUG_CATALOGUE: Record<string, any> = {
  d1: { name: 'Amoxicillin 500mg', dosage: 'Capsules, 30 court', category: 'Antibiotics', price: 15.99, prescription: true, img: '/antibaoties.png', description: 'A broad-spectrum antibiotic used to treat bacterial infections of the ear, nose, throat, lungs, skin, and urinary tract.' },
  d2: { name: 'Ibuprofen', dosage: '400mg Tablets, 20 count', category: 'Pain Relief', price: 8.50, prescription: false, img: '/ibuprofers.png', description: 'Non-steroidal anti-inflammatory drug (NSAID) used for pain relief, fever reduction, and inflammation.' },
  d3: { name: 'Paracetamol', dosage: '500mg Tablets, 24 count', category: 'Pain Relief', price: 6.00, prescription: false, img: '/pills (2).png', description: 'Common analgesic and antipyretic used to treat mild to moderate pain and fever.' },
  d4: { name: 'Cough Syrup', dosage: '100ml Bottle', category: 'Cold & Flu', price: 12.00, prescription: false, img: '/cough syrup.png', description: 'Relieves cough and sore throat. Contains guaifenesin and dextromethorphan.' },
  d5: { name: 'Insulin Glargine', dosage: '100U/mL Injection', category: 'Injection', price: 45.00, prescription: true, img: '/pills (2).png', description: 'Long-acting insulin analog used in the management of type 1 and type 2 diabetes mellitus.' },
  d6: { name: 'Vitamin C', dosage: '1000mg Effervescent, 10 tabs', category: 'Supplements', price: 7.50, prescription: false, img: '/pills (2).png', description: 'Essential vitamin that supports immune function, collagen synthesis, and acts as an antioxidant.' },
  d7: { name: 'Metformin', dosage: '500mg Tablets, 60 count', category: 'Diabetes', price: 9.80, prescription: true, img: '/pills (2).png', description: 'First-line medication for the treatment of type 2 diabetes. Helps control blood sugar levels.' },
  d8: { name: 'Azithromycin', dosage: '250mg Tablets, 6 count', category: 'Antibiotics', price: 21.00, prescription: true, img: '/antibaoties.png', description: 'Macrolide antibiotic used to treat various bacterial infections including pneumonia and chlamydia.' },
};

const PHARMACY_FEE = 2.99;
const DELIVERY_FEE = 100;

interface Props {
  onBack?: () => void;
  onAddedToCart?: () => void;
  onUploadPrescription?: () => void;
  drugId?: string;
}

const DrugDetailsScreen = ({ onBack, onAddedToCart, onUploadPrescription, drugId = 'd1' }: Props) => {
  const { addToCart } = useApp();

  const drug = DRUG_CATALOGUE[drugId] ?? DRUG_CATALOGUE['d1'];
  const isAmoxicillin = drugId === 'd1';
  
  // Mathematical logic decoupled to replicate the exact UI in the provided mock for initial drug
  const displayTotal = isAmoxicillin ? '2567.000' : (drug.price + PHARMACY_FEE + DELIVERY_FEE).toFixed(2);

  const handleAddToCart = () => {
    addToCart({
      id: drugId,
      name: drug.name,
      dosage: drug.dosage,
      price: drug.price,
      img: drug.img,
    } as any);
    onAddedToCart?.();
  };

  return (
    <div className="dd-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Drug Details</div>
      </div>

      <div className="dd-hero">
        <div className="dd-hero__info">
          <h2 className="dd-hero__title">{drug.name}</h2>
          <p className="dd-hero__dosage">{drug.dosage}</p>
          {drug.prescription && (
            <p className="dd-hero__rx">Prescription Required</p>
          )}
        </div>
        <div className="dd-hero__img-wrap">
          <img src={drug.img} alt={drug.name} className="dd-hero__img" />
        </div>
      </div>

      <div className="dd-section-title">Price Breakdown</div>
      <div className="dd-price-breakdown">
        <div className="dd-price-row">
          <span className="dd-price-label">Drug Price</span>
          <span className="dd-price-val">${drug.price.toFixed(2)}</span>
        </div>
        <div className="dd-price-row">
          <span className="dd-price-label">Pharmacy Fee</span>
          <span className="dd-price-val">${isAmoxicillin ? '2.990' : PHARMACY_FEE.toFixed(2)}</span>
        </div>
        <div className="dd-price-row">
          <span className="dd-price-label">Delivery</span>
          <span className="dd-price-val">${DELIVERY_FEE}</span>
        </div>
        <div className="dd-price-row dd-price-total-row">
          <span className="dd-price-label dd-price-label--total">Total</span>
          <span className="dd-price-val dd-price-val--total">${displayTotal}</span>
        </div>
      </div>

      <div className="dd-actions">
        <button className="dd-add-btn" onClick={handleAddToCart}>
          <img src="/red_fluid_waves.png" alt="btn bg" className="dd-add-btn__bg" />
          <div className="dd-add-btn__overlay">
            <span>Add to Cart</span>
          </div>
        </button>
      </div>

      <div className="dd-upload-link" onClick={onUploadPrescription}>
        Upload Prescription
      </div>

      <div className="dd-section-title dd-section-title--offers">Special offers</div>
      <div className="home-offer-card" style={{ marginBottom: '100px' }}>
        <img src="/red_fluid_waves.png" alt="offer bg" className="home-offer-card__bg" />
        <div className="home-offer-card__body">
          <div className="home-offer-card__text">
            <span className="home-offer-card__percent">20%</span>
            {' off on all pain relievers'}
            <br />
            <span className="home-offer-card__sub">limited time offer</span>
          </div>
          <button className="home-offer-card__btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default DrugDetailsScreen;
