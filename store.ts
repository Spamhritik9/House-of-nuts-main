import { create } from 'zustand';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  weight: string;
}

export interface CartStore {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getCount: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addToCart: (item) => {
    const items = get().items;
    const existingItem = items.find((i) => i.id === item.id);

    if (existingItem) {
      set({
        items: items.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        ),
      });
    } else {
      set({
        items: [...items, { ...item, quantity: item.quantity || 1 }],
      });
    }
  },

  removeFromCart: (id) => {
    set({ items: get().items.filter((i) => i.id !== id) });
  },

  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(id);
      return;
    }
    set({
      items: get().items.map((i) =>
        i.id === id ? { ...i, quantity } : i
      ),
    });
  },

  clearCart: () => {
    set({ items: [] });
  },

  getTotal: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  getCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0);
  },
}));

export interface UserStore {
  email: string;
  phone: string;
  name: string;
  address: string;
  setUser: (user: Partial<UserStore>) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  email: '',
  phone: '',
  name: '',
  address: '',

  setUser: (user) => {
    set((state) => ({ ...state, ...user }));
  },

  clearUser: () => {
    set({ email: '', phone: '', name: '', address: '' });
  },
}));
