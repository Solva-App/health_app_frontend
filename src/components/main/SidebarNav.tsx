import { Home, Grid, ShoppingCart, FileText, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface SidebarNavProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const SidebarNav = ({ currentTab, onTabChange }: SidebarNavProps) => {
  const { cartCount } = useApp();

  const tabs = [
    { id: 'home',     label: 'Home',     icon: Home },
    { id: 'category', label: 'Category', icon: Grid },
    { id: 'cart',     label: 'Cart',     icon: ShoppingCart },
    { id: 'orders',   label: 'Orders',   icon: FileText },
    { id: 'profile',  label: 'Profile',  icon: User },
  ];

  return (
    <aside className="desktop-shell__sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand__dot"></div>
        Marvis
      </div>
      
      <div className="sidebar-nav-items">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`sidebar-nav-btn ${isActive ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              <Icon
                size={20}
                color={isActive ? '#c80000' : '#555'}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className="sidebar-nav-btn__label">{tab.label}</span>
              
              {tab.id === 'cart' && cartCount > 0 && (
                <span className="sidebar-cart-badge">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="sidebar-footer">
        &copy; 2026 Marvis Phama.<br />
        All rights reserved.
      </div>
    </aside>
  );
};

export default SidebarNav;
