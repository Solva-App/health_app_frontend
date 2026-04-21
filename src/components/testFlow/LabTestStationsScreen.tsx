import { ArrowLeft, MapPin } from 'lucide-react';

interface Props {
  onBack?: () => void;
}

const STATIONS = [
  { id: 1, name: 'Labcorp', address: '456 main st, san fran ...', distance: '2.1 miles away' },
  { id: 2, name: 'Labcorp', address: '456 main st, san fran ...', distance: '2.1 miles away' },
  { id: 3, name: 'Labcorp', address: '456 main st, san fran ...', distance: '2.1 miles away' },
];

const LabTestStationsScreen = ({ onBack }: Props) => {
  return (
    <div className="lts-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Pay Before Test</div>
      </div>

      <div className="lts-body">
        {/* Map placeholder */}
        <div className="lts-map">
          <img
            src="/map-placeholder.png"
            alt="Map"
            className="lts-map__img"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="lts-map__fallback">
            <span>📍 Map View</span>
          </div>
        </div>

        <h3 className="lts-section-title">Nearby Lab Test Stations</h3>

        {STATIONS.map((station) => (
          <div className="lts-station-card" key={station.id}>
            <div className="lts-station-card__icon">
              <MapPin size={24} color="#f44336" fill="#f44336" />
            </div>
            <div className="lts-station-card__info">
              <h4 className="lts-station-card__name">{station.name}</h4>
              <p className="lts-station-card__address">{station.address}</p>
              <p className="lts-station-card__distance">{station.distance}</p>
            </div>
          </div>
        ))}

        <div className="lts-see-more">See More</div>
      </div>
    </div>
  );
};

export default LabTestStationsScreen;
