import { useState } from 'react';
import LoginScreen from './components/auth/LoginScreen';
import SignUpScreen from './components/auth/SignUpScreen';
import { ForgotEmailScreen, ForgotNewScreen } from './components/auth/PasswordReset';
import VerifyScreen from './components/auth/VerifyScreen';
import OnboardingScreen from './components/onboarding/OnboardingScreen';
import SplashScreen from './components/splash/SplashScreen';
import MainLayout from './components/main/MainLayout';

import DeliveryOptionsScreen from './components/checkout/DeliveryOptionsScreen';
import PaymentMethodScreen from './components/checkout/PaymentMethodScreen';
import CardPaymentScreen from './components/checkout/CardPaymentScreen';
import PaymentSuccessScreen from './components/checkout/PaymentSuccessScreen';

import LinkTestScreen from './components/testFlow/LinkTestScreen';
import TestProgressScreen from './components/testFlow/TestProgressScreen';
import LabTestResultsScreen from './components/testFlow/LabTestResultsScreen';
import BankTransferScreen from './components/testFlow/BankTransferScreen';
import LaboratoryTestScreen from './components/testFlow/LaboratoryTestScreen';
import LabTestStationsScreen from './components/testFlow/LabTestStationsScreen';
import ActiveTestSessionsScreen from './components/testFlow/ActiveTestSessionsScreen';
import LinkCodeScreen from './components/testFlow/LinkCodeScreen';
import ScanQRCodeScreen from './components/testFlow/ScanQRCodeScreen';
import DetailedTestResultScreen from './components/testFlow/DetailedTestResultScreen';
import OrderConfirmationScreen from './components/orders/OrderConfirmationScreen';
import OrderTrackingScreen from './components/orders/OrderTrackingScreen';
import OrderDetailsScreen from './components/orders/OrderDetailsScreen';
import HealthAssistantScreen from './components/health/HealthAssistantScreen';
import PrescriptionPreviewScreen from './components/health/PrescriptionPreviewScreen';
import PrescriptionStatusScreen from './components/health/PrescriptionStatusScreen';
import AddressesScreen from './components/profile/AddressesScreen';
import NotificationsScreen from './components/profile/NotificationsScreen';
import PayMethodsScreen from './components/profile/PayMethodsScreen';
import SecurityScreen from './components/profile/SecurityScreen';
import HelpCenterScreen from './components/profile/HelpCenterScreen';
import ContactSupportMenuScreen from './components/profile/ContactSupportMenuScreen';
import ContactSupportChatScreen from './components/profile/ContactSupportChatScreen';
import AboutUsScreen from './components/profile/AboutUsScreen';
import TermsScreen from './components/profile/TermsScreen';
import PrescriptionListScreen from './components/profile/PrescriptionListScreen';
import EditProfileScreen from './components/profile/EditProfileScreen';
import RefillRemindersScreen from './components/health/RefillRemindersScreen';
import PrescriptionErrorScreen from './components/health/PrescriptionErrorScreen';
import UploadPrescriptionScreen from './components/main/UploadPrescriptionScreen';
import TestHistoryScreen from './components/testFlow/TestHistoryScreen';
import NotificationInboxScreen from './components/profile/NotificationInboxScreen';
import ToastContainer from './components/layout/ToastContainer';
import SidebarNav from './components/main/SidebarNav';
import { ErrorBoundary } from './components/ErrorBoundary';

type AuthView = 'splash' | 'onboarding' | 'login' | 'signup' | 'forgot_email' | 'forgot_new' | 'verify' | 'main_app' | 'delivery' | 'payment_method' | 'card_payment' | 'test_card_payment' | 'payment_success' | 'link_test' | 'test_progress' | 'lab_results' | 'bank_transfer' | 'laboratory_hub' | 'lab_test_stations' | 'active_test_sessions' | 'order_confirmation' | 'order_tracking' | 'order_details' | 'health_assistant' | 'prescription_preview' | 'prescription_status' | 'addresses' | 'notifications' | 'pay_methods' | 'security' | 'help_center' | 'contact_us' | 'support_chat' | 'about_us' | 'terms' | 'prescription_history' | 'edit_profile' | 'refill_reminders' | 'prescription_error' | 'link_code' | 'scan_qr_code' | 'detailed_test_result' | 'upload_prescription' | 'upload_prescription_preview' | 'test_history' | 'notification_inbox';

function App() {
  const [view, setView] = useState<AuthView>('splash');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [mainTab, setMainTab] = useState('home');

  const handleSidebarTabChange = (tab: string) => {
    setMainTab(tab);
    setView('main_app');
  };

  const navigateToOrder = (orderId: string) => {
    setSelectedOrderId(orderId);
    setView('order_tracking');
  };

  const renderView = () => {
    switch (view) {
      case 'splash': return <SplashScreen onComplete={() => setView('onboarding')} />;
      case 'onboarding': return <OnboardingScreen onComplete={() => setView('login')} />;
      case 'login': return <LoginScreen onNavigate={setView as any} />;
      case 'signup': return <SignUpScreen onNavigate={setView as any} />;
      case 'forgot_email': return <ForgotEmailScreen onNavigate={setView as any} />;
      case 'forgot_new': return <ForgotNewScreen onNavigate={setView as any} />;
      case 'verify': return <VerifyScreen onNavigate={() => setView('main_app')} />;
      
      case 'main_app': return <MainLayout 
        currentTab={mainTab}
        onTabChange={setMainTab}
        onProceedToCheckout={() => setView('delivery')} 
        onStartTest={() => setView('laboratory_hub')} 
        onViewOrderDetails={(id) => navigateToOrder(id)}
        onEditProfile={() => setView('edit_profile')}
        onHealthAssistant={() => setView('health_assistant')}
        onPrescriptionHistory={() => setView('prescription_history')}
        onNotifications={() => setView('notification_inbox')}
        onPayMethods={() => setView('pay_methods')}
        onAddresses={() => setView('addresses')}
        onSecurity={() => setView('security')}
        onHelpCenter={() => setView('help_center')}
        onContactUs={() => setView('contact_us')}
        onTerms={() => setView('terms')}
        onAboutUs={() => setView('about_us')}
        onRefillReminders={() => setView('refill_reminders')}
        onUploadPrescription={() => setView('upload_prescription')}
        onLabResults={() => setView('laboratory_hub')}
      />;
      case 'upload_prescription': return <UploadPrescriptionScreen onBack={() => setView('main_app')} onNext={() => setView('upload_prescription_preview')} />;
      case 'upload_prescription_preview': return <PrescriptionPreviewScreen onBack={() => setView('upload_prescription')} onContinue={() => setView('prescription_status')} />;
      
      // Checkout flow
      case 'delivery': return <DeliveryOptionsScreen onBack={() => setView('main_app')} onNext={() => setView('payment_method')} />;
      case 'payment_method': return <PaymentMethodScreen onBack={() => setView('delivery')} onNext={() => setView('card_payment')} />;
      case 'card_payment': return <CardPaymentScreen onBack={() => setView('payment_method')} onNext={() => setView('order_confirmation')} />;
      case 'payment_success': return <PaymentSuccessScreen onBack={() => setView('main_app')} onNext={() => setView('detailed_test_result')} />;
      
      // Test flow
      case 'laboratory_hub': return <LaboratoryTestScreen onBack={() => setView('main_app')} onPayAfterTest={() => setView('link_test')} onLabTestStations={() => setView('lab_test_stations')} onTestHistoryResult={() => setView('test_history')} />;
      case 'lab_test_stations': return <LabTestStationsScreen onBack={() => setView('laboratory_hub')} />;
      case 'active_test_sessions': return <ActiveTestSessionsScreen onBack={() => setView('laboratory_hub')} />;
      case 'test_history': return <TestHistoryScreen onBack={() => setView('laboratory_hub')} />;
      
      case 'link_test': return <LinkTestScreen onBack={() => setView('laboratory_hub')} onNext={() => setView('test_progress')} onScanQRCode={() => setView('scan_qr_code')} onEnterCode={() => setView('link_code')} />;
      case 'scan_qr_code': return <ScanQRCodeScreen onBack={() => setView('link_test')} onScan={() => setView('test_progress')} />;
      case 'link_code': return <LinkCodeScreen onBack={() => setView('link_test')} onLink={() => setView('test_progress')} />;
      case 'test_progress': return <TestProgressScreen onBack={() => setView('link_test')} onNext={() => setView('lab_results')} />;
      case 'lab_results': return <LabTestResultsScreen onBack={() => setView('test_progress')} onPayBank={() => setView('bank_transfer')} onPayCard={() => setView('test_card_payment')} />;
      case 'bank_transfer': return <BankTransferScreen onBack={() => setView('lab_results')} onNext={() => setView('payment_success')} />;
      case 'test_card_payment': return <CardPaymentScreen onBack={() => setView('lab_results')} onNext={() => setView('payment_success')} />;
      case 'detailed_test_result': return <DetailedTestResultScreen onBack={() => setView('main_app')} isAbnormal={true} />;
      
      // Order screens
      case 'order_confirmation': return <OrderConfirmationScreen onBack={() => setView('main_app')} onViewOrderDetails={() => setView('order_tracking')} />;
      case 'order_tracking': return <OrderTrackingScreen orderId={selectedOrderId} onBack={() => setView('main_app')} onViewOrderDetails={() => setView('order_details')} />;
      case 'order_details': return <OrderDetailsScreen orderId={selectedOrderId} onBack={() => setView('order_tracking')} />;
      
      // Health / Prescription screens
      case 'health_assistant': return <HealthAssistantScreen onBack={() => setView('main_app')} />;
      case 'prescription_preview': return <PrescriptionPreviewScreen onBack={() => setView('prescription_history')} />;
      case 'prescription_status': return <PrescriptionStatusScreen onBack={() => setView('main_app')} />;
      case 'prescription_error': return <PrescriptionErrorScreen onBack={() => setView('main_app')} onRetry={() => setView('main_app')} onTabChange={() => setView('main_app')} />;
      case 'refill_reminders': return <RefillRemindersScreen onBack={() => setView('main_app')} onTabChange={() => setView('main_app')} />;
      
      // Profile sub-screens
      case 'addresses': return <AddressesScreen onBack={() => setView('main_app')} />;
      case 'notifications': return <NotificationsScreen onBack={() => setView('main_app')} />;
      case 'notification_inbox': return <NotificationInboxScreen onBack={() => setView('main_app')} onTabChange={() => setView('main_app')} />;
      case 'pay_methods': return <PayMethodsScreen onBack={() => setView('main_app')} />;
      case 'security': return <SecurityScreen onBack={() => setView('main_app')} />;
      case 'help_center': return <HelpCenterScreen onBack={() => setView('main_app')} />;
      case 'contact_us': return <ContactSupportMenuScreen onBack={() => setView('main_app')} onLiveChat={() => setView('support_chat')} />;
      case 'support_chat': return <ContactSupportChatScreen onBack={() => setView('contact_us')} />;
      case 'about_us': return <AboutUsScreen onBack={() => setView('main_app')} />;
      case 'terms': return <TermsScreen onBack={() => setView('main_app')} />;
      case 'prescription_history': return <PrescriptionListScreen onBack={() => setView('main_app')} onSelectPrescription={() => setView('prescription_preview')} />;
      case 'edit_profile': return <EditProfileScreen onBack={() => setView('main_app')} onTabChange={() => setView('main_app')} />;
      
      default: return <LoginScreen onNavigate={setView as any} />;
    }
  };

  const isAuthView = ['splash', 'onboarding', 'login', 'signup', 'forgot_email', 'forgot_new', 'verify'].includes(view);

  if (isAuthView) {
    return (
      <div className="app-container">
        {renderView()}
        <ToastContainer />
      </div>
    );
  }

  // Wraps authenticated views in the desktop layout shell
  return (
    <ErrorBoundary>
      <div className="desktop-shell light-theme">
        <SidebarNav currentTab={view === 'main_app' ? mainTab : ''} onTabChange={handleSidebarTabChange} />
        <div className="desktop-shell__content">
          {renderView()}
          <ToastContainer />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
