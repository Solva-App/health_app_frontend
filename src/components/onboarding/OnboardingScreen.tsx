import { useState } from 'react';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    title: 'Your Health, Simplifified',
    description: 'Get your laboratory test done, Result delivered in your app hassle free.',
  },
  {
    title: 'Affordable medication, delivered',
    description: 'Get your prescriptions filled and delivered to your door, saving you time and money',
  },
  {
    title: 'Expert doctors at your fingertips',
    description: 'Consult with our certified healthcare providers anytime, anywhere.',
  }
];

const OnboardingScreen = ({ onComplete }: OnboardingScreenProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="onboarding-container content">
      <div className="onboarding-image">
        <img src="/red_fluid_waves.png" alt="Abstract red fluid waves" />
      </div>

      <div className="onboarding-text">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
      </div>

      <div className="onboarding-dots">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>

      <button className="primary" onClick={handleNext} style={{ marginBottom: 20 }}>
        Next
      </button>
    </div>
  );
};

export default OnboardingScreen;
