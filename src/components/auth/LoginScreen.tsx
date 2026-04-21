
import TopBar from '../layout/TopBar';
import Footer from '../layout/Footer';

interface AuthScreen {
  onNavigate: (screen: string) => void;
}

const LoginScreen = ({ onNavigate }: AuthScreen) => (
  <>
    <TopBar title="Login to Marvis" onBack={() => {}} />
    <div className="content">
      <div style={{ marginTop: '40px' }}>
        <label>Email / Phone Number</label>
        <input type="text" placeholder="Enter your email / phonenumber" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          <span className="text-red" onClick={() => onNavigate('signup')}>Sign Up</span>
          <span className="text-red" onClick={() => onNavigate('forgot_email')} style={{ fontWeight: 400 }}>Forgot Password?</span>
        </div>

        <button className="primary" onClick={() => onNavigate('verify')}>Login</button>
      </div>
    </div>
    <Footer />
  </>
);

export default LoginScreen;
