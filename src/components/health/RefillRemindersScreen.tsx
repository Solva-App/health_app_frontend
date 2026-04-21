
import { ArrowLeft, Link2 } from 'lucide-react';
import BottomNav from '../main/BottomNav';

interface Props {
  onBack?: () => void;
  onNewReminder?: () => void;
  onTabChange?: (tab: string) => void;
}

const ReminderCard = ({ title, dose, time }: { title: string, dose: string, time: string }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    width: '100%',
    padding: '24px 20px',
    background: '#fff',
    borderRadius: '12px',
    marginBottom: 16,
    boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
  }}>
    <div style={{ transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Link2 size={28} color="#e53935" strokeWidth={2.5} />
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: '#000', marginBottom: 2 }}>{title}</div>
      <div style={{ fontSize: 14, color: '#333' }}>{dose}</div>
    </div>
    <div style={{ fontSize: 15, fontWeight: 500, color: '#000' }}>{time}</div>
  </div>
);

const RefillRemindersScreen = ({ onBack, onNewReminder, onTabChange }: Props) => {
  return (
    <div className="main-content" style={{ background: '#fff', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}><ArrowLeft size={24} /></button>
        <div className="page-title">Refill Reeminders</div>
      </div>

      <div style={{ height: 1, backgroundColor: '#ff7575', margin: '0 20px', flexShrink: 0 }} />

      <div style={{ padding: '30px 20px', flex: 1 }}>
        <h3 style={{ fontSize: 16, fontWeight: 900, color: '#000', marginBottom: 24 }}>Upcoming</h3>

        <ReminderCard title="ANTIDBNFBFHD" dose="20mg" time="in 2 days" />
        <ReminderCard title="ANTIDBNFBFHD" dose="20mg" time="in 3 days" />
        <ReminderCard title="ANTIDBNFBFHD" dose="20mg" time="in 5 days" />

        <h3 style={{ fontSize: 16, fontWeight: 900, color: '#000', margin: '40px 0 24px' }}>Past</h3>

        <ReminderCard title="ANTIDBNFBFHD" dose="20mg" time="in 2 weeks" />
      </div>

      {/* Floating Action Button */}
      <div style={{ 
        position: 'absolute', 
        bottom: 100, 
        right: 20,
        zIndex: 10 
      }}>
        <button 
          onClick={onNewReminder}
          style={{
            background: 'linear-gradient(135deg, #4d0000 0%, #d32f2f 100%)',
            border: 'none',
            borderRadius: '12px',
            color: '#fff',
            padding: '16px 24px',
            fontSize: '16px',
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(229, 57, 53, 0.4)'
          }}
        >
          + New Reminder
        </button>
      </div>

      {onTabChange && <BottomNav currentTab="home" onTabChange={onTabChange} />}
    </div>
  );
};

export default RefillRemindersScreen;
