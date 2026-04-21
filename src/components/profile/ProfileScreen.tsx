import React from 'react';
import { ArrowLeft, UserCog, Bell, CreditCard, MapPin, ShieldCheck, BookOpen, HelpCircle, Phone } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  onEditProfile?: () => void;
  onNotifications?: () => void;
  onPayMethods?: () => void;
  onAddresses?: () => void;
  onHealthAssistant?: () => void;
  onPrescriptionHistory?: () => void;
  onSecurity?: () => void;
  onHelpCenter?: () => void;
  onContactUs?: () => void;
  onTerms?: () => void;
  onAboutUs?: () => void;
  onRefillReminders?: () => void;
}

interface MenuRowProps {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  showChevron?: boolean;
}

const ProfileMenuRow = ({ icon, label, onPress, showChevron = true }: MenuRowProps) => (
  <button className="profile-menu-row" onClick={onPress}>
    <div className="profile-menu-row__icon">{icon}</div>
    <span className="profile-menu-row__label">{label}</span>
    {showChevron && <span className="profile-menu-row__chevron">{'>'}</span>}
  </button>
);

const ProfileScreen = ({
  onEditProfile, onNotifications, onPayMethods, onAddresses,
  onPrescriptionHistory, onSecurity, onHelpCenter, onContactUs, onTerms, onAboutUs,
}: Props) => {
  const { user } = useApp();

  return (
    <div className="profile-screen">
      {/* Header */}
      <div className="top-bar">
        <button className="back-btn-square" onClick={() => {}}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title" style={{ color: '#000' }}>Profile</div>
      </div>

      <div className="profile-body">
        {/* Avatar */}
        <div className="profile-avatar-wrap">
          <div className="profile-avatar">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="18" r="12" fill="white" />
              <path d="M4 50c0-12 9.2-20 22-20s22 8 22 20" fill="white" />
            </svg>
            {/* Pencil badge */}
            <button className="profile-avatar__edit" onClick={onEditProfile}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </button>
          </div>
          <h3 className="profile-name">{user?.name ?? 'David Marvis'}</h3>
          <p className="profile-email">{user?.email ?? 'marvis.david123@gmail.com'}</p>
        </div>

        {/* Account section */}
        <h3 className="prof-section-heading">Account</h3>
        <div className="profile-menu-group">
          <ProfileMenuRow icon={<UserCog size={22} color="#e53935" />}  label="Edit profile"         onPress={onEditProfile} />
          <ProfileMenuRow icon={<Bell size={22} color="#e53935" />}     label="Notification"         onPress={onNotifications} />
          <ProfileMenuRow icon={<CreditCard size={22} color="#e53935" />} label="Payment Methods"    onPress={onPayMethods} />
          <ProfileMenuRow icon={<MapPin size={22} color="#e53935" />}   label="Addresses"            onPress={onAddresses} />
          <ProfileMenuRow icon={<ShieldCheck size={22} color="#e53935" />} label="security"          onPress={onSecurity} />
          <ProfileMenuRow icon={<BookOpen size={22} color="#e53935" />} label="Prescription History" onPress={onPrescriptionHistory} showChevron={false} />
        </div>

        {/* Support section */}
        <h3 className="prof-section-heading prof-section-heading--mt">Support</h3>
        <div className="profile-menu-group">
          <ProfileMenuRow icon={<HelpCircle size={22} color="#e53935" />} label="Help Center"  onPress={onHelpCenter} />
          <ProfileMenuRow icon={<Phone size={22} color="#e53935" />}      label="Contact Us"   onPress={onContactUs} />
        </div>

        {/* Terms footer */}
        <div className="profile-footer">
          <div className="profile-footer__divider" />
          <p className="profile-footer__text">
            <span onClick={onTerms}>Terms &amp; Conditions</span>
            <span className="profile-footer__sep"> / </span>
            <span onClick={onAboutUs}>About Us</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
