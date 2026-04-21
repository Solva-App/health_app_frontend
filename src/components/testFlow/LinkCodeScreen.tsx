import React, { useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  onBack?: () => void;
  onLink?: () => void;
}

const LinkCodeScreen = ({ onBack, onLink }: Props) => {
  const { showToast } = useApp();
  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (idx: number, val: string) => {
    const digit = val.replace(/\D/g, '').slice(-1);
    const next = [...digits];
    next[idx] = digit;
    setDigits(next);
    if (digit && idx < 5) inputs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !digits[idx] && idx > 0) {
      inputs.current[idx - 1]?.focus();
    }
  };

  const handleLink = () => {
    const code = digits.join('');
    if (code.length < 6) {
      showToast('Please enter the full 6-digit code.', 'error');
      return;
    }
    showToast('Test session linked successfully! 🔗', 'success');
    onLink?.();
  };

  const allFilled = digits.every(d => d !== '');

  return (
    <div className="lc-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Link Code</div>
      </div>

      <div className="lc-body">
        <h3 className="lc-heading">
          Enter the 6- digit code on the<br/>analyses machine to link with phone
        </h3>

        <div className="lc-input-group">
          {digits.map((digit, idx) => (
            <input
              key={idx}
              ref={el => { inputs.current[idx] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(idx, e.target.value)}
              onKeyDown={e => handleKeyDown(idx, e)}
              onFocus={e => e.target.select()}
              className={`lc-input-box ${digit ? 'lc-input-box--filled' : ''}`}
            />
          ))}
        </div>

        {allFilled && (
          <p className="lc-success-msg">
            ✓ Code complete — ready to link!
          </p>
        )}
      </div>

      <div className="lc-footer">
        <button
          className={`lc-btn fluid-btn--solid ${!allFilled ? 'lc-btn--disabled' : ''}`}
          onClick={handleLink}
          disabled={!allFilled}
        >
          <div className="lc-btn-overlay">
            {allFilled ? 'Link' : 'Link'}
          </div>
        </button>
      </div>
    </div>
  );
};

export default LinkCodeScreen;
