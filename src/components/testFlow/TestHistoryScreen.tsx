import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack?: () => void;
}

const TestHistoryScreen = ({ onBack }: Props) => {
  const tests = [
    { id: 1, name: 'Urine Analysis', date: '03/15/2024', status: 'Normal' },
    { id: 2, name: 'Urine Analysis', date: '03/15/2024', status: 'Normal' },
    { id: 3, name: 'Urine Analysis', date: '03/15/2024', status: 'Normal' },
    { id: 4, name: 'Urine Analysis', date: '03/15/2024', status: 'Abnomal' }, // Preserved typo from mockup
    { id: 5, name: 'Urine Analysis', date: '03/15/2024', status: 'Abnomal' },
    { id: 6, name: 'Urine Analysis', date: '03/15/2024', status: 'Abnomal' },
  ];

  return (
    <div className="th-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Test Hidtory</div>
      </div>

      <div className="th-body">
        {tests.map((test) => (
          <div key={test.id} className="th-card">
            <div className="th-card-left">
              <div className="th-card-name">{test.name}</div>
              <div className="th-card-date">{test.date}</div>
            </div>
            <div className="th-card-right">
              <span className={`th-status-dot th-status-dot--${test.status.toLowerCase()}`} />
              <span className={`th-status-text th-status-text--${test.status.toLowerCase()}`}>
                {test.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestHistoryScreen;
