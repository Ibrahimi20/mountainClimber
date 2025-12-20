import { createSlice } from '@reduxjs/toolkit';

/* =========================
   LocalStorage helpers
========================= */

const CART_STORAGE_KEY = 'cart';

const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading cart from localStorage', error);
    return null;
  }
};

const saveCartToStorage = (state) => {
  try {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify({
        items: state.items,
        totalQuantity: state.totalQuantity,
        totalAmount: state.totalAmount,
      })
    );
  } catch (error) {
    console.error('Error saving cart to localStorage', error);
  }
};

/* =========================
   Initial State
========================= */

const storedCart = loadCartFromStorage();

const initialState = storedCart || {
  items: [], // [{ id, name, price, quantity, image, badge }]
  totalQuantity: 0,
  totalAmount: 0,
};

/* =========================
   Slice
========================= */

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((i) => i.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += product.price;

      saveCartToStorage(state);
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (!item) return;

      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.price * item.quantity;
      state.items = state.items.filter((i) => i.id !== id);

      saveCartToStorage(state);
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (!item || quantity < 1) return;

      state.totalQuantity += quantity - item.quantity;
      state.totalAmount += (quantity - item.quantity) * item.price;
      item.quantity = quantity;

      saveCartToStorage(state);
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

      localStorage.removeItem(CART_STORAGE_KEY);
    },
  },
});

/* =========================
   Exports
========================= */

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
