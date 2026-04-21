import { Home, Grid, ShoppingCart, FileText, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface BottomNavProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav = ({ currentTab, onTabChange }: BottomNavProps) => {
  const { cartCount } = useApp();

  const tabs = [
    { id: 'home',     label: 'Home',     icon: Home },
    { id: 'category', label: 'Category', icon: Grid },
    { id: 'cart',     label: 'Cart',     icon: ShoppingCart },
    { id: 'orders',   label: 'Orders',   icon: FileText },
    { id: 'profile',  label: 'Profile',  icon: User },
  ];

  return (
    <div className="bottom-nav">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            className={`nav-item${isActive ? ' active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <div className="nav-icon-wrap">
              <Icon
                size={24}
                className="nav-icon"
                color={isActive ? '#000' : '#888'}
              />
              {tab.id === 'cart' && cartCount > 0 && (
                <span className="nav-cart-badge">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </div>
            <span className="nav-label">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
