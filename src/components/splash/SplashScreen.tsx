import { useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  
  useEffect(() => {
    // Automatically transition from splash to onboarding after 2.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="splash-container">
      {/* Background is handled by CSS to replicate the immersive fluid red */}
      <div className="splash-background">
         <img src="/red_fluid_waves.png" alt="Marvis background" className="splash-bg-image" />
      </div>

      <div className="splash-logo-placeholder">
        {/* Leaving this space isolated so you can replace with your own image logo */}
        <div className="logo-box">
          <span className="logo-text-mar">MA</span>
          <span className="logo-text-icon">♦</span>
          <span className="logo-text-vis">VIS</span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
