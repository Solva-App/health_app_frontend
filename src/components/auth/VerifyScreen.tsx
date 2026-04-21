import { useState } from 'react';
import TopBar from '../layout/TopBar';
import Footer from '../layout/Footer';

const VerifyScreen = ({ onNavigate }: { onNavigate: (s: any) => void }) => {
  const [digits, setDigits] = useState(['', '', '', '', '', '']);

  const handleChange = (index: number, val: string) => {
    const newDigits = [...digits];
    newDigits[index] = val;
    setDigits(newDigits);
    
    // Auto complete demo manually
    if (newDigits.every(d => d !== '')) {
      setTimeout(() => onNavigate('main_app'), 400); // short delay for UX
    }
  };

  return (
    <>
      <TopBar title="Verify your Email / Phone Number" onBack={() => onNavigate('login')} />
      <div className="content">
        <div style={{ marginTop: '40px' }}>
          <div className="header-text" style={{ textAlign: 'center', marginBottom: 40 }}>
            Enter the 6- digit code we sent to<br/>your phone
          </div>

          <div className="digit-inputs">
            {digits.map((digit, i) => (
              <input 
                key={i} 
                type="text" 
                maxLength={1} 
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
              />
            ))}
          </div>

          <div className="text-center">
            <span className="text-red">Didn't receive a code? Resend code</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VerifyScreen;
