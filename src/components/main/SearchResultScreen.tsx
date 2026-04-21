import { Search } from 'lucide-react';

interface Drug {
  id: string;
  name: string;
  category: string;
  price: number;
  img: string;
  branded?: boolean;
}

interface Props {
  query?: string;
  onQueryChange?: (q: string) => void;
  results?: Drug[];
  onDrugClick?: (drugId: string) => void;
}

// Demo data that mirrors the design (used when no props passed)
const DEMO_GENERIC: Drug[] = [
  { id: 'g1', name: 'Amoxicillin 500mg', category: 'Antibiotics', price: 435, img: '/pills (2).png' },
  { id: 'g2', name: 'Amoxicillin 500mg', category: 'Antibiotics', price: 435, img: '/pills (2).png' },
];
const DEMO_BRANDED: Drug[] = [
  { id: 'b1', name: 'Amoxicillin 500mg', category: 'Antibiotics', price: 435, img: '/antibaoties.png', branded: true },
  { id: 'b2', name: 'Amoxicillin 500mg', category: 'Antibiotics', price: 435, img: '/antibaoties.png', branded: true },
];

const SearchResultScreen = ({
  query = 'Ibuferm',
  onQueryChange,
  results,
  onDrugClick,
}: Props) => {
  // If live results passed, split them; otherwise use demo data
  const generic  = results ? results.filter(d => !d.branded) : DEMO_GENERIC;
  const branded  = results ? results.filter(d =>  d.branded) : DEMO_BRANDED;

  return (
    <div className="sr-screen">

      {/* Top Bar */}
      <div className="sr-top-bar">
        <div className="sr-top-bar__title">Search Result</div>
      </div>

      {/* Search Bar */}
      <div className="sr-search-wrapper">
        <div className="sr-search-box">
          <Search size={20} color="#aaa" className="sr-search-box__icon" />
          <input
            type="text"
            value={query}
            onChange={e => onQueryChange?.(e.target.value)}
            className="sr-search-box__input"
            placeholder="Search for medication"
          />
        </div>
      </div>

      {/* Generic Section */}
      {generic.length > 0 && (
        <>
          <div className="sr-section-title">Generic</div>
          <div className="sr-drug-list">
            {generic.map(drug => (
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
                <span className="sr-drug-row__price">${drug.price}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Branded Section */}
      {branded.length > 0 && (
        <>
          <div className="sr-section-title">Branded</div>
          <div className="sr-drug-list">
            {branded.map(drug => (
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
                <span className="sr-drug-row__price">${drug.price}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Empty state */}
      {generic.length === 0 && branded.length === 0 && (
        <p className="sr-empty">No results found for "{query}".</p>
      )}

    </div>
  );
};

export default SearchResultScreen;
