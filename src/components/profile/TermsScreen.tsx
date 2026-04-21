import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack?: () => void;
}

const TermBlock = ({ index, title, children }: { index: string, title: string, children: React.ReactNode }) => (
  <div style={{ marginBottom: 24 }}>
    <h4 style={{ fontSize: 15, fontWeight: 900, color: '#000', marginBottom: 12 }}>
      {index}. {title}
    </h4>
    <p style={{ fontSize: 13, lineHeight: 1.5, color: '#333', margin: 0 }}>
      {children}
    </p>
  </div>
);

const TermsScreen = ({ onBack }: Props) => {
  return (
    <div className="main-content" style={{ background: '#fff', overflowY: 'auto' }}>
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}><ArrowLeft size={24} /></button>
        <div className="page-title">Terms &amp; Conditions</div>
      </div>

      <div style={{ padding: '24px 20px 40px' }}>
        <h3 style={{ fontSize: 16, fontWeight: 900, color: '#000', marginBottom: 12 }}>Welcome to Our Pharmacy App</h3>
        <p style={{ fontSize: 14, lineHeight: 1.4, color: '#333', marginBottom: 24 }}>
          By using our pharmacy app, you agree to the following terms and conditions. Please read them carefully.
        </p>

        <TermBlock index="1" title="Account Registration">
          You must be at least 18 years old to register an account. Provide accurate and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials.
        </TermBlock>

        <TermBlock index="2" title="Prescription Requirements">
          We require a valid prescription from a licensed healthcare provider for all prescription medications. You are responsible for ensuring the prescription is valid and accurate.
        </TermBlock>

        <TermBlock index="3" title="Medication Information">
          We provide detailed information about medications, including usage instructions, side effects, and precautions. This information is for informational purposes only and should not replace professional medical advice.
        </TermBlock>

        <TermBlock index="4" title="Ordering and Delivery">
          Orders can be placed through the app. We offer delivery services to specified locations. Delivery times are estimates and may vary. We are not responsible for delays due to unforeseen circumstances.
        </TermBlock>

        <TermBlock index="5" title="Returns and Refunds">
          Returns are accepted for unopened and unused medications within 14 days of delivery. Refunds will be issued upon receipt and inspection of the returned items. Certain medications may not be eligible for return due to safety reasons.
        </TermBlock>

        <TermBlock index="6" title="Privacy Policy">
          We are committed to protecting your privacy. Your personal and health information will be handled in accordance with our Privacy Policy, which is available on our website.
        </TermBlock>

        <TermBlock index="7" title="Disclaimer">
          We are not liable for any damages or losses arising from the use of our app or the medications purchased through it. Consult your healthcare provider for any health concerns or before taking any medication.
        </TermBlock>

        <TermBlock index="8" title="Changes to Terms">
          We reserve the right to modify these terms and conditions at any time. Changes will be effective upon posting on the app. Your continued use of the app constitutes acceptance of the revised terms.
        </TermBlock>
      </div>
    </div>
  );
};

export default TermsScreen;
