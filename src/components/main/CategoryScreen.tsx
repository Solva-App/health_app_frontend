import { useState } from 'react';
import { Search, FlaskConical, X } from 'lucide-react';
import { ALL_DRUGS } from './HomeScreen';

const CATEGORIES = [
  { label: 'Medication',  img: '/pills (2).png',       filter: null          },
  { label: 'Antibaotics', img: '/antibaoties.png',     filter: 'Antibiotics' },
  { label: 'Cold & Flu',  img: '/cough syrup.png',     filter: 'Cold & Flu'  },
  { label: 'Pain Relief', img: '/ibuprofers.png',      filter: 'Pain Relief' },
  { label: 'Supplements', img: '/Rectangle 177.png',   filter: 'Supplements' },
  { label: 'Vitamins',    img: '/Rectangle 174.png',   filter: null          },
];

const CONDITIONS = [
  { label: 'Heart',     img: '/heart.png',     filter: 'Supplements' },
  { label: 'Lungs',     img: '/lungs.png',     filter: 'Cold & Flu'  },
  { label: 'Digestive', img: '/digestive.png', filter: 'Pain Relief' },
  { label: 'Joints',    img: '/lungs.png',     filter: 'Pain Relief' },
  { label: 'Immunity',  img: '/heart.png',     filter: 'Supplements' },
  { label: 'Skin',      img: '/digestive.png', filter: 'Antibiotics' },
];

interface Props {
  onStartTest?: () => void;
  onDrugClick?: (drugId: string) => void;
}

const CategoryScreen = ({ onStartTest, onDrugClick }: Props) => {
  const [query, setQuery]         = useState('');
  const [activeFilter, setFilter] = useState<string | null>(null);

  const isSearching = query.trim().length > 0;

  const filtered = isSearching
    ? ALL_DRUGS.filter(d =>
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const genericResults = filtered.filter(d => !d.branded);
  const brandedResults = filtered.filter(d =>  d.branded);

  /* ─────────────────────────────────────────────────────────
     SEARCH RESULT VIEW — same sr-* layout as HomeScreen
  ───────────────────────────────────────────────────────── */
  if (isSearching) {
    return (
      <div className="sr-screen">

        <div className="sr-top-bar">
          <div className="sr-top-bar__title">Search Result</div>
        </div>

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

        {filtered.length === 0 && (
          <p className="sr-empty">No results for "{query}".</p>
        )}

        {genericResults.length > 0 && (
          <>
            <div className="sr-section-title">Generic</div>
            <div className="sr-drug-list">
              {genericResults.map(drug => (
                <button key={drug.id} className="sr-drug-row" onClick={() => onDrugClick?.(drug.id)}>
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

        {brandedResults.length > 0 && (
          <>
            <div className="sr-section-title">Branded</div>
            <div className="sr-drug-list">
              {brandedResults.map(drug => (
                <button key={drug.id} className="sr-drug-row" onClick={() => onDrugClick?.(drug.id)}>
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
     NORMAL CATEGORY VIEW
  ───────────────────────────────────────────────────────── */
  return (
    <div className="cat-screen">

      {/* Top Bar */}
      <div className="cat-top-bar">
        <div className="cat-top-bar__title">Categories</div>
        {onStartTest && (
          <button className="cat-top-bar__lab-btn" onClick={onStartTest}>
            <FlaskConical size={16} />
            Lab Tests
          </button>
        )}
      </div>

      {/* Pill Search Bar */}
      <div className="cat-search-wrapper">
        <div className="cat-search-box">
          <Search size={20} color="#aaa" className="cat-search-box__icon" />
          <input
            type="text"
            placeholder="Search for medication"
            className="cat-search-box__input"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Active filter chip */}
      {activeFilter && (
        <div className="cat-filter-chip-row">
          <span className="cat-filter-chip">{activeFilter}</span>
          <button className="cat-filter-clear" onClick={() => setFilter(null)}>
            <X size={14} /> Clear
          </button>
        </div>
      )}

      {/* Categories grid */}
      <div className="cat-section-title">Categories</div>
      <div className="home-scroll-row">
        {CATEGORIES.map(cat => (
          <div
            key={cat.label}
            className={`home-card cat-grid-item${activeFilter === cat.filter && cat.filter !== null ? ' cat-grid-item--active' : ''}`}
            onClick={() => setFilter(activeFilter === cat.filter ? null : cat.filter)}
          >
            <div className="home-card__img-wrap cat-grid-item__img-wrap">
              <img src={cat.img} alt={cat.label} className="home-card__img" />
            </div>
            <div className="home-card__label cat-grid-item__label">{cat.label}</div>
          </div>
        ))}
      </div>

      {/* Conditions grid */}
      <div className="cat-section-title cat-section-title--mt">Conditions</div>
      <div className="home-scroll-row">
        {CONDITIONS.map(cond => (
          <div
            key={cond.label}
            className={`home-card cat-grid-item${activeFilter === cond.filter ? ' cat-grid-item--active' : ''}`}
            onClick={() => setFilter(activeFilter === cond.filter ? null : cond.filter)}
          >
            <div className="home-card__img-wrap cat-grid-item__img-wrap cat-grid-item__img-wrap--transparent">
              <img src={cond.img} alt={cond.label} className="home-card__img" />
            </div>
            <div className="home-card__label cat-grid-item__label">{cond.label}</div>
          </div>
        ))}
      </div>

      {/* Shop Now */}
      <div className="cat-shop-now-wrap">
        <button className="cat-shop-now-btn" onClick={() => onDrugClick?.(ALL_DRUGS[0].id)}>Shop Now</button>
      </div>

      {/* Filtered drug list when a chip is active */}
      {activeFilter && (
        <>
          <div className="cat-section-title cat-section-title--mt">
            {activeFilter} Drugs
            <span className="cat-section-title__count">
              ({ALL_DRUGS.filter(d => d.category === activeFilter).length})
            </span>
          </div>
          <div className="cat-drug-list">
            {ALL_DRUGS.filter(d => d.category === activeFilter).length === 0 ? (
              <p className="cat-drug-empty">No drugs found.</p>
            ) : (
              ALL_DRUGS.filter(d => d.category === activeFilter).map(drug => (
                <button
                  key={drug.id}
                  className="cat-drug-row"
                  onClick={() => onDrugClick?.(drug.id)}
                >
                  <img
                    src={drug.img}
                    alt={drug.name}
                    className={`cat-drug-row__img ${drug.branded ? 'cat-drug-row__img--branded' : 'cat-drug-row__img--neutral'}`}
                  />
                  <div className="cat-drug-row__info">
                    <div className="cat-drug-row__name">{drug.name}</div>
                    <div className="cat-drug-row__cat">{drug.category}</div>
                  </div>
                  <span className="cat-drug-row__price">₦{drug.price.toLocaleString()}</span>
                </button>
              ))
            )}
          </div>
        </>
      )}

    </div>
  );
};

export default CategoryScreen;
