import { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, Pencil, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import BottomNav from '../main/BottomNav';

interface Props {
  onBack?: () => void;
  onTabChange?: (tab: string) => void;
}

const EditProfileScreen = ({ onBack, onTabChange }: Props) => {
  const { user, updateUser, showToast } = useApp();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [editingField, setEditingField] = useState<'name' | 'email' | 'phone' | null>(null);

  const hasChanges = name !== user.name || email !== user.email || phone !== user.phone;

  const handleSave = () => {
    if (!name.trim()) { showToast('Name cannot be empty', 'error'); return; }
    if (!email.trim() || !email.includes('@')) { showToast('Enter a valid email', 'error'); return; }
    updateUser({ name: name.trim(), email: email.trim(), phone: phone.trim() });
    setEditingField(null);
  };

  const EditRow = ({
    icon, label, value, field, type = 'text',
  }: {
    icon: React.ReactNode;
    label: string;
    value: string;
    field: 'name' | 'email' | 'phone';
    type?: string;
  }) => (
    <div className="ep-row">
      <div className="ep-row__icon">{icon}</div>
      <div className="ep-row__content">
        <div className="ep-row__label">{label}</div>
        {editingField === field ? (
          <input
            autoFocus
            type={type}
            className="ep-row__input"
            value={field === 'name' ? name : field === 'email' ? email : phone}
            onChange={e => {
              if (field === 'name') setName(e.target.value);
              else if (field === 'email') setEmail(e.target.value);
              else setPhone(e.target.value);
            }}
            onBlur={() => setEditingField(null)}
          />
        ) : (
          <div className="ep-row__value">{value}</div>
        )}
      </div>
      <button className="ep-row__edit-btn" onClick={() => setEditingField(field)}>
        <Pencil size={18} color="#e53935" strokeWidth={2.5} />
      </button>
    </div>
  );

  return (
    <div className="ep-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Edit Profile</div>
      </div>

      <div className="ep-body">
        {/* Avatar */}
        <div className="ep-avatar-wrap">
          <div className="ep-avatar">
            <User size={70} color="#fff" fill="#fff" style={{ marginBottom: -8 }} />
          </div>
          <h2 className="ep-user-name">{user.name}</h2>
          <p className="ep-user-email">{user.email}</p>
        </div>

        {/* Fields */}
        <h3 className="ep-section-title">Profile</h3>

        <EditRow icon={<User size={22} color="#e53935" />} label="Full Name" value={name} field="name" />
        <EditRow icon={<Mail size={22} color="#e53935" />} label="Email Address" value={email} field="email" type="email" />
        <EditRow icon={<Phone size={22} color="#e53935" />} label="Phone Number" value={phone} field="phone" type="tel" />
      </div>

      {/* Save button — only visible when changes made */}
      {hasChanges && (
        <div className="ep-footer">
          <button className="fluid-btn fluid-btn--solid ep-save-btn" onClick={handleSave}>
            <div className="fluid-btn__overlay">
              <Check size={20} />
              <span>Save Changes</span>
            </div>
          </button>
        </div>
      )}

      {onTabChange && <BottomNav currentTab="profile" onTabChange={onTabChange} />}
    </div>
  );
};

export default EditProfileScreen;
