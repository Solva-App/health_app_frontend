import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CartItem {
  id: string;
  name: string;
  dosage: string;
  price: number;
  qty: number;
}

export interface Address {
  id: string;
  label: string;
  line1: string;
  line2: string;
}

export interface PayCard {
  id: string;
  label: string;
  expiry: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
}

export interface ToastMsg {
  id: number;
  text: string;
  type: 'success' | 'error' | 'info';
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface AppContextType {
  // Cart
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'qty'>) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;

  // User
  user: UserProfile;
  updateUser: (data: Partial<UserProfile>) => void;

  // Addresses
  addresses: Address[];
  addAddress: (addr: Omit<Address, 'id'>) => void;
  removeAddress: (id: string) => void;
  selectedAddress: string;
  setSelectedAddress: (id: string) => void;

  // Payment Cards
  payCards: PayCard[];
  addPayCard: (card: Omit<PayCard, 'id'>) => void;
  removePayCard: (id: string) => void;
  selectedCard: string;
  setSelectedCard: (id: string) => void;

  // Notifications toggles
  notifOrderStatus: boolean;
  setNotifOrderStatus: (v: boolean) => void;
  notifOrderChanges: boolean;
  setNotifOrderChanges: (v: boolean) => void;
  notifRefill: boolean;
  setNotifRefill: (v: boolean) => void;
  notifDrugAlert: boolean;
  setNotifDrugAlert: (v: boolean) => void;

  // Orders placed
  orders: Array<{ id: string; status: string; date: string; items: CartItem[] }>;
  placeOrder: () => void;

  // Toast
  toasts: ToastMsg[];
  showToast: (text: string, type?: ToastMsg['type']) => void;
}

// ─── Default data ─────────────────────────────────────────────────────────────

const defaultAddresses: Address[] = [
  { id: 'a1', label: 'Home', line1: '123 Eke Street, Apt 48', line2: 'Anytown, CA 92176' },
  { id: 'a2', label: 'Work', line1: '45 Commerce Ave, Suite 3', line2: 'Lagos Island, NG 10001' },
];

const defaultCards: PayCard[] = [
  { id: 'c1', label: 'Visa ending in 4567', expiry: 'Expires 08/25' },
  { id: 'c2', label: 'Mastercard ending in 9812', expiry: 'Expires 12/26' },
];

const defaultOrders = [
  { id: '#1524363546', status: 'Processing', date: '10/20/2025', items: [] as CartItem[] },
  { id: '#1524363547', status: 'Out for Delivery', date: '10/18/2025', items: [] as CartItem[] },
  { id: '#1524363520', status: 'Delivered', date: '10/10/2025', items: [] as CartItem[] },
  { id: '#1524363501', status: 'Canceled', date: '09/28/2025', items: [] as CartItem[] },
];

// ─── Context Provider ─────────────────────────────────────────────────────────

const AppContext = createContext<AppContextType | null>(null);

let toastId = 0;

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<UserProfile>({ name: 'David Marvis', email: 'marvis.david123@gmail.com', phone: '+234 801 234 5678' });
  const [addresses, setAddresses] = useState<Address[]>(defaultAddresses);
  const [selectedAddress, setSelectedAddress] = useState('a1');
  const [payCards, setPayCards] = useState<PayCard[]>(defaultCards);
  const [selectedCard, setSelectedCard] = useState('c1');
  const [notifOrderStatus, setNotifOrderStatus] = useState(true);
  const [notifOrderChanges, setNotifOrderChanges] = useState(true);
  const [notifRefill, setNotifRefill] = useState(false);
  const [notifDrugAlert, setNotifDrugAlert] = useState(true);
  const [orders, setOrders] = useState(defaultOrders);
  const [toasts, setToasts] = useState<ToastMsg[]>([]);

  const showToast = useCallback((text: string, type: ToastMsg['type'] = 'success') => {
    const id = ++toastId;
    setToasts(prev => [...prev, { id, text, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  // ── Cart ────────────────────────────────────────────────────────────────────
  const addToCart = useCallback((item: Omit<CartItem, 'qty'>) => {
    setCart(prev => {
      const exists = prev.find(c => c.id === item.id);
      if (exists) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
    showToast(`${item.name} added to cart`, 'success');
  }, [showToast]);

  const removeFromCart = useCallback((id: string) => {
    setCart(prev => prev.filter(c => c.id !== id));
  }, []);

  const updateQty = useCallback((id: string, delta: number) => {
    setCart(prev => prev
      .map(c => c.id === id ? { ...c, qty: c.qty + delta } : c)
      .filter(c => c.qty > 0)
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const cartTotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);

  // ── User ────────────────────────────────────────────────────────────────────
  const updateUser = useCallback((data: Partial<UserProfile>) => {
    setUser(prev => ({ ...prev, ...data }));
    showToast('Profile updated successfully!', 'success');
  }, [showToast]);

  // ── Addresses ───────────────────────────────────────────────────────────────
  const addAddress = useCallback((addr: Omit<Address, 'id'>) => {
    const id = 'a' + Date.now();
    setAddresses(prev => [...prev, { ...addr, id }]);
    showToast('Address added!', 'success');
  }, [showToast]);

  const removeAddress = useCallback((id: string) => {
    setAddresses(prev => prev.filter(a => a.id !== id));
    showToast('Address removed.', 'info');
  }, [showToast]);

  // ── Pay Cards ────────────────────────────────────────────────────────────────
  const addPayCard = useCallback((card: Omit<PayCard, 'id'>) => {
    const id = 'c' + Date.now();
    setPayCards(prev => [...prev, { ...card, id }]);
    showToast('Card added successfully!', 'success');
  }, [showToast]);

  const removePayCard = useCallback((id: string) => {
    setPayCards(prev => prev.filter(c => c.id !== id));
    showToast('Card removed.', 'info');
  }, [showToast]);

  // ── Orders ───────────────────────────────────────────────────────────────────
  const placeOrder = useCallback(() => {
    if (cart.length === 0) return;
    const newOrder = {
      id: '#' + Math.floor(1000000000 + Math.random() * 9000000000),
      status: 'Processing',
      date: new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
      items: [...cart],
    };
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    showToast('Order placed successfully!', 'success');
  }, [cart, clearCart, showToast]);

  const value: AppContextType = {
    cart, addToCart, removeFromCart, updateQty, clearCart, cartTotal, cartCount,
    user, updateUser,
    addresses, addAddress, removeAddress, selectedAddress, setSelectedAddress,
    payCards, addPayCard, removePayCard, selectedCard, setSelectedCard,
    notifOrderStatus, setNotifOrderStatus,
    notifOrderChanges, setNotifOrderChanges,
    notifRefill, setNotifRefill,
    notifDrugAlert, setNotifDrugAlert,
    orders, placeOrder,
    toasts, showToast,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
};
