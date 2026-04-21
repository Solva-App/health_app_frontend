
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack?: () => void;
}

const AboutUsScreen = ({ onBack }: Props) => {
  return (
    <div className="main-content" style={{ background: '#fff', overflowY: 'auto' }}>
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}><ArrowLeft size={24} /></button>
        <div className="page-title">About Us</div>
      </div>

      <div style={{ padding: '24px 20px 40px' }}>
        <h3 style={{ fontSize: 18, fontWeight: 900, color: '#000', marginBottom: 12 }}>Our Mission</h3>
        <p style={{ fontSize: 15, lineHeight: 1.5, color: '#222', marginBottom: 30 }}>
          We're on a mission to make healthcare more accessible and affordable for everyone. We believe that everyone deserves access to the medications they need, regardless of thei r income or location. We're committed to providing transparent pricing, fast delivery, and exceptional customer service.
        </p>

        <h3 style={{ fontSize: 18, fontWeight: 900, color: '#000', marginBottom: 12 }}>Our Story</h3>
        <p style={{ fontSize: 15, lineHeight: 1.5, color: '#222', marginBottom: 30 }}>
          Founded in 2026, we started with a simple idea: to create an online pharmacy that puts patients first. We saw the challenges people faced in accessing affordable medications, and we knew we could do better. Today, we're proud to serve thousands of customers across the country, helping them save money and stay healthy.
        </p>

        <h3 style={{ fontSize: 18, fontWeight: 900, color: '#000', marginBottom: 12 }}>Our Values</h3>
        <p style={{ fontSize: 15, fontWeight: 700, color: '#000', marginBottom: 16 }}>
          We're guided by a set of core values that shape everything we do:
        </p>

        <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15, color: '#222', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li><strong style={{ color: '#000' }}>Transparency:</strong> We believe in open and honest communication with our customers.</li>
          <li><strong style={{ color: '#000' }}>Affordability:</strong> We're committed to offering competitive prices on all medications.</li>
          <li><strong style={{ color: '#000' }}>Accessibility:</strong> We strive to make our services available to everyone, regardless of their location or circumstances.</li>
          <li><strong style={{ color: '#000' }}>Customer Focus:</strong> We put our customers at the center of everything we do, providing personalized support and exceptional service.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsScreen;
