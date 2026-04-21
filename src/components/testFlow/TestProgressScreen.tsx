import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack?: () => void;
  onNext?: () => void;
}

const TestProgressScreen = ({ onBack, onNext }: Props) => {
  const [progress, setProgress] = useState(12);
  const [phase, setPhase] = useState('Connecting to machine...');

  const PHASES = [
    { at: 0,  label: 'Connecting to machine...' },
    { at: 20, label: 'Calibrating sensors...' },
    { at: 40, label: 'Collecting sample data...' },
    { at: 65, label: 'Analysing parameters...' },
    { at: 85, label: 'Finalising results...' },
    { at: 100, label: 'Complete! Preparing report...' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(timer); return 100; }
        return prev + 1;
      });
    }, 80); // ~8 seconds to complete
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const matched = [...PHASES].reverse().find(p => progress >= p.at);
    if (matched) setPhase(matched.label);
    if (progress >= 100) {
      setTimeout(() => onNext?.(), 1000);
    }
  }, [progress]);

  return (
    <div className="main-content" style={{ backgroundColor: '#fafafa' }}>
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Pay After Test</div>
      </div>

      <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 30px' }}>
        {/* Animated circle */}
        <div style={{ position: 'relative', width: 140, height: 140, marginBottom: 32 }}>
          <svg width="140" height="140" viewBox="0 0 140 140" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="70" cy="70" r="58" fill="none" stroke="#fde8e8" strokeWidth="10" />
            <circle
              cx="70" cy="70" r="58" fill="none" stroke="#c80000" strokeWidth="10"
              strokeDasharray={`${2 * Math.PI * 58}`}
              strokeDashoffset={`${2 * Math.PI * 58 * (1 - progress / 100)}`}
              style={{ transition: 'stroke-dashoffset 0.1s linear' }}
              strokeLinecap="round"
            />
          </svg>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 28, fontWeight: 900, color: '#c80000' }}>{progress}%</span>
            <span style={{ fontSize: 11, color: '#888' }}>Complete</span>
          </div>
        </div>

        <h2 style={{ textAlign: 'center', fontSize: 22, fontWeight: 800, color: '#000', marginBottom: 10 }}>
          {progress < 100 ? 'Your test is in progress' : '✓ Test Complete!'}
        </h2>

        <p style={{ textAlign: 'center', fontSize: 14, color: '#666', lineHeight: 1.5, marginBottom: 28 }}>
          {phase}
        </p>

        {/* Progress bar */}
        <div className="progress-container" style={{ width: '100%' }}>
          <div className="progress-labels">
            <span style={{ fontSize: 13 }}>Processing</span>
            <span className="percent" style={{ color: '#c80000', fontWeight: 700 }}>{progress}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progress}%`, transition: 'width 0.1s linear' }} />
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: '#999', padding: '20px 0', lineHeight: 1.5 }}>
          Once the test is complete, you will be notified and can proceed to pay to unlock your results.
        </p>
      </div>
    </div>
  );
};

export default TestProgressScreen;
