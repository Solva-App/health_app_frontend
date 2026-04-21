
import TopBar from '../layout/TopBar';
import Footer from '../layout/Footer';

interface SignUpScreenProps {
  onNavigate: (s: any) => void;
}

const SignUpScreen = ({ onNavigate }: SignUpScreenProps) => (
  <>
    <TopBar title="Sign Up" onBack={() => onNavigate('login')} />
    <div className="content">
      <label>Full Name</label>
      <input type="text" placeholder="Enter your full name" />

      <label>Email / Phone Number</label>
      <input type="text" placeholder="Enter your email / phone number" />

      <label>Password</label>
      <input type="password" placeholder="Enter your password" />

      <label>Confirm Password</label>
      <input type="password" placeholder="Confirm Password" style={{ marginBottom: 40 }} />

      <div style={{ fontSize: 13, marginBottom: 20 }}>
        Already have an acoount? <span className="text-red" onClick={() => onNavigate('login')}>Login to Marvis</span>
      </div>

      <button className="primary" onClick={() => onNavigate('verify')}>Sign Up</button>
      
      <div className="bottom-link">
        By Signing up, you agree to our <span className="text-red">Terms of services</span> and <br/> <span className="text-red">Privacy Policy</span>.
      </div>
    </div>
    <Footer />
  </>
);

export default SignUpScreen;
