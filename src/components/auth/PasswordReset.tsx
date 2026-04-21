
import TopBar from '../layout/TopBar';
import Footer from '../layout/Footer';

interface ResetProps {
  onNavigate: (s: any) => void;
}

export const ForgotEmailScreen = ({ onNavigate }: ResetProps) => (
  <>
    <TopBar title="Reset Password" onBack={() => onNavigate('login')} />
    <div className="content">
      <div style={{ marginTop: '40px' }}>
        <div className="header-text">Forget your password<br/>Enter your Email / Phone Number</div>
        <div className="sub-text">we will send you a link or code to reset your password</div>

        <input type="email" placeholder="Enter your email" style={{ marginBottom: 40 }} />

        <button className="primary" onClick={() => onNavigate('forgot_new')}>Reset Password</button>
      </div>
    </div>
    <Footer />
  </>
);

export const ForgotNewScreen = ({ onNavigate }: ResetProps) => (
  <>
    <TopBar title="Reset Password" onBack={() => onNavigate('forgot_email')} />
    <div className="content">
      <div style={{ marginTop: '40px' }}>
        <div className="header-text" style={{ textAlign: 'center', marginBottom: 30 }}>
            Create a new , strong password for your<br/>account
        </div>

        <input type="password" placeholder="New password" style={{ fontStyle: 'italic' }} />
        <input type="password" placeholder="Comfirm New password" style={{ fontStyle: 'italic', marginBottom: 40 }} />

        <button className="primary" onClick={() => onNavigate('login')}>Reset Password</button>
      </div>
    </div>
    <Footer />
  </>
);
