
import { ArrowLeft } from 'lucide-react';

interface TopBarProps {
  title: string;
  onBack: () => void;
}

const TopBar = ({ title, onBack }: TopBarProps) => (
  <div className="top-bar">
    <button className="back-btn" onClick={onBack}>
      <ArrowLeft size={28} />
    </button>
    <div className="page-title">{title}</div>
  </div>
);

export default TopBar;
