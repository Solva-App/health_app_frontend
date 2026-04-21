import { useState } from 'react';
import { Search, Bell } from 'lucide-react';

const FEATURED_CATEGORIES = [
  { id: 'c1', label: 'Pills', img: '/pills (2).png' },
  { id: 'c2', label: 'Cough Syrup', img: '/cough syrup.png' },
  { id: 'c3', label: 'Aceptionht', img: '/Rectangle 174.png' },
  { id: 'c4', label: 'Supplements', img: '/Rectangle 177.png' },
  { id: 'c5', label: 'First Aid', img: '/pills (2).png' },
  { id: 'c6', label: 'Vitamins', img: '/ibuprofers.png' },
];

export const ALL_DRUGS = [
  { id: 'd1', name: 'Ibuprofers',  category: 'Pain Relief',  price: 850,  img: '/ibuprofers.png',   branded: false },
  { id: 'd2', name: 'Antibaoties', category: 'Antibiotics',  price: 1599, img: '/antibaoties.png',   branded: true  },
  { id: 'd3', name: 'Aceptionl',   category: 'Supplements',  price: 600,  img: '/Rectangle 177.png', branded: false },
  { id: 'd4', name: 'Cough Syrup', category: 'Cold & Flu',   price: 1200, img: '/cough syrup.png',   branded: true  },
  { id: 'd5', name: 'Paracetamol', category: 'Pain Relief',  price: 450,  img: '/pills (2).png',    branded: false },
  { id: 'd6', name: 'Vitamin C',   category: 'Supplements',  price: 900,  img: '/Rectangle 174.png',branded: true  },
];

interface Props {
  onDrugClick?: (drugId: string) => void;
  onStartTest?: () => void;
  onUploadPrescription?: () => void;
  onNotifications?: () => void;
  onHealthAssistant?: () => void;
}

const HomeScreen = ({ onDrugClick, onStartTest, onUploadPrescription, onNotifications }: Props) => {
  const [query, setQuery] = useState('');

  const isSearching = query.trim().length > 0;

  const filtered = isSearching
    ? ALL_DRUGS.filter(d =>
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const genericResults  = filtered.filter(d => !d.branded);
  const brandedResults  = filtered.filter(d =>  d.branded);

  const popularDrugs = ALL_DRUGS.slice(0, 6);

  /* ─────────────────────────────────────────────────────────
     SEARCH RESULT VIEW
     Matches design: title="Search Result", pill search bar,
     Generic/Branded grouped rows with large square images
  ───────────────────────────────────────────────────────── */
  if (isSearching) {
    return (
      <div className="sr-screen">

        {/* Title */}
        <div className="sr-top-bar">
          <div className="sr-top-bar__title">Search Result</div>
        </div>

        {/* Pill Search Bar */}
        <div className="sr-search-wrapper">
          <div className="sr-search-box">
            <Search size={20} color="#aaa" className="sr-search-box__icon" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="sr-search-box__input"
              placeholder="Search for medication"
              autoFocus
            />
          </div>
        </div>

        {/* No results */}
        {filtered.length === 0 && (
          <p className="sr-empty">No results for "{query}".</p>
        )}

        {/* Generic group */}
        {genericResults.length > 0 && (
          <>
            <div className="sr-section-title">Generic</div>
            <div className="sr-drug-list">
              {genericResults.map(drug => (
                <button
                  key={drug.id}
                  className="sr-drug-row"
                  onClick={() => onDrugClick?.(drug.id)}
                >
                  <div className="sr-drug-row__img-wrap sr-drug-row__img-wrap--neutral">
                    <img src={drug.img} alt={drug.name} className="sr-drug-row__img" />
                  </div>
                  <div className="sr-drug-row__info">
                    <div className="sr-drug-row__name">{drug.name}</div>
                  </div>
                  <span className="sr-drug-row__price">₦{drug.price.toLocaleString()}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Branded group */}
        {brandedResults.length > 0 && (
          <>
            <div className="sr-section-title">Branded</div>
            <div className="sr-drug-list">
              {brandedResults.map(drug => (
                <button
                  key={drug.id}
                  className="sr-drug-row"
                  onClick={() => onDrugClick?.(drug.id)}
                >
                  <div className="sr-drug-row__img-wrap sr-drug-row__img-wrap--branded">
                    <img src={drug.img} alt={drug.name} className="sr-drug-row__img" />
                  </div>
                  <div className="sr-drug-row__info">
                    <div className="sr-drug-row__name">{drug.name}</div>
                  </div>
                  <span className="sr-drug-row__price">₦{drug.price.toLocaleString()}</span>
                </button>
              ))}
            </div>
          </>
        )}

      </div>
    );
  }

  /* ─────────────────────────────────────────────────────────
     NORMAL HOME VIEW
  ───────────────────────────────────────────────────────── */
  return (
    <div className="home-screen">

      {/* Top Bar */}
      <div className="home-top-bar">
        <div className="home-top-bar__spacer" />
        <div className="home-top-bar__title">Medication</div>
        <div className="home-top-bar__bell" onClick={onNotifications}>
          <Bell size={26} color="#f44336" fill="#f44336" />
          <div className="home-top-bar__bell-badge">
            <div className="home-top-bar__bell-dot" />
          </div>
        </div>
      </div>

      {/* Search Bar — pill-shaped to match design */}
      <div className="home-search-wrapper">
        <div className="home-search-box home-search-box--pill">
          <Search size={20} color="#aaa" className="home-search-box__icon" />
          <input
            type="text"
            placeholder="Search for medication"
            className="home-search-box__input"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Featured Categories */}
      <div className="home-section-title">Featured Categories</div>
      <div className="home-scroll-row">
        {FEATURED_CATEGORIES.map(cat => (
          <div
            key={cat.id}
            onClick={() => onDrugClick?.(ALL_DRUGS[0].id)}
            className="home-card"
          >
            <div className="home-card__img-wrap">
              <img src={cat.img} alt={cat.label} className="home-card__img" />
            </div>
            <div className="home-card__label">{cat.label}</div>
          </div>
        ))}
      </div>

      {/* Popular Drugs */}
      <div className="home-section-title home-section-title--mt">Popular Drugs</div>
      <div className="home-scroll-row">
        {popularDrugs.map(drug => (
          <div
            key={drug.id}
            onClick={() => onDrugClick?.(drug.id)}
            className="home-card"
          >
            <div className="home-card__img-wrap">
              <img src={drug.img} alt={drug.name} className="home-card__img" />
            </div>
            <div className="home-card__label">{drug.name}</div>
          </div>
        ))}
      </div>

      {/* Special Offers */}
      <div className="home-section-title home-section-title--mt">Special offers</div>
      <div className="home-offer-card">
        <img src="/red_fluid_waves.png" alt="offer bg" className="home-offer-card__bg" />
        <div className="home-offer-card__body">
          <div className="home-offer-card__text">
            <span className="home-offer-card__percent">20%</span>
            {' off on all pain relievers'}
            <br />
            <span className="home-offer-card__sub">limited time offer</span>
          </div>
          <button className="home-offer-card__btn" onClick={() => onDrugClick?.(ALL_DRUGS[0].id)}>Shop Now</button>
        </div>
      </div>

      {/* Actions */}
      <div className="home-section-title home-section-title--light home-section-title--mt-lg">Actions</div>
      <div className="home-actions">

        <div className="home-action-btn fluid-btn--solid" onClick={onStartTest}>
          <div className="home-action-btn__overlay">
            <span className="home-action-btn__label">Laboratory Test Result</span>
          </div>
        </div>

        <div className="home-action-btn fluid-btn--solid" onClick={onUploadPrescription}>
          <div className="home-action-btn__overlay">
            <span className="home-action-btn__label">Prescription Upload</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default HomeScreen;
