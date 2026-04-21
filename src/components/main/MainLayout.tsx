import { useState } from 'react';
import BottomNav from './BottomNav';
import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import CartScreen from './CartScreen';

import DrugDetailsScreen from './DrugDetailsScreen';
import OrdersListScreen from '../orders/OrdersListScreen';
import ProfileScreen from '../profile/ProfileScreen';

interface Props {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onProceedToCheckout?: () => void;
  onStartTest?: () => void;
  onViewOrderDetails?: (orderId: string) => void;
  onEditProfile?: () => void;
  onHealthAssistant?: () => void;
  onPrescriptionHistory?: () => void;
  onNotifications?: () => void;
  onPayMethods?: () => void;
  onAddresses?: () => void;
  onSecurity?: () => void;
  onHelpCenter?: () => void;
  onContactUs?: () => void;
  onTerms?: () => void;
  onAboutUs?: () => void;
  onRefillReminders?: () => void;
  onUploadPrescription?: () => void;
  onLabResults?: () => void;
}

const MainLayout = ({
  currentTab, onTabChange,
  onProceedToCheckout, onStartTest, onViewOrderDetails, onEditProfile,
  onHealthAssistant, onPrescriptionHistory, onNotifications, onPayMethods,
  onAddresses, onSecurity, onHelpCenter, onContactUs, onTerms, onAboutUs,
  onRefillReminders, onUploadPrescription, onLabResults,
}: Props) => {
  const [viewDrugDetails, setViewDrugDetails] = useState(false);
  const [selectedDrugId, setSelectedDrugId] = useState<string>('d1');

  const handleDrugClick = (drugId: string) => {
    setSelectedDrugId(drugId);
    setViewDrugDetails(true);
  };

  // If user opened drug details, show it directly.
  if (viewDrugDetails) {
    return (
      <>
        <DrugDetailsScreen
          drugId={selectedDrugId}
          onBack={() => setViewDrugDetails(false)}
          onAddedToCart={() => onTabChange('cart')}
          onUploadPrescription={onUploadPrescription}
        />
        <BottomNav currentTab={currentTab} onTabChange={(tab) => { setViewDrugDetails(false); onTabChange(tab); }} />
      </>
    );
  }

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return (
          <HomeScreen
            onDrugClick={handleDrugClick}
            onStartTest={onLabResults}
            onUploadPrescription={onUploadPrescription}
            onNotifications={onNotifications}
            onHealthAssistant={onHealthAssistant}
          />
        );
      case 'category':
        return <CategoryScreen onStartTest={onStartTest} onDrugClick={handleDrugClick} />;
      case 'cart':
        return <CartScreen onProceed={onProceedToCheckout} onBrowse={() => onTabChange('home')} />;
      case 'orders':
        return <OrdersListScreen onBack={() => onTabChange('home')} onViewOrder={(id) => onViewOrderDetails?.(id)} />;
      case 'profile':
        return (
          <ProfileScreen
            onEditProfile={onEditProfile}
            onNotifications={onNotifications}
            onPayMethods={onPayMethods}
            onAddresses={onAddresses}
            onHealthAssistant={onHealthAssistant}
            onPrescriptionHistory={onPrescriptionHistory}
            onSecurity={onSecurity}
            onHelpCenter={onHelpCenter}
            onContactUs={onContactUs}
            onTerms={onTerms}
            onAboutUs={onAboutUs}
            onRefillReminders={onRefillReminders}
          />
        );
      default:
        return <HomeScreen onDrugClick={handleDrugClick} onStartTest={onLabResults} onUploadPrescription={onUploadPrescription} onNotifications={onNotifications} onHealthAssistant={onHealthAssistant} />;
    }
  };

  return (
    <>
      {renderContent()}
      <BottomNav currentTab={currentTab} onTabChange={onTabChange} />
    </>
  );
};

export default MainLayout;
