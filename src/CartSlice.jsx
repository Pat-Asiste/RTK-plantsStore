import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const itemToAdd = state.items.find((planta) => (planta.name === action.payload.name));  // return "1 solo" elemento
      if (!itemToAdd) { state.items.push({ ...action.payload, quantity: 1 }); }               // If, la planta está repetida, no hagas nada
      // else { itemToAdd.quantity++; }                                                          // buenas prácticas


    },
    removeItem: (state, action) => {
      const newState = state.items.filter((planta) => (planta.name !== action.payload));
      state.items = newState;
    },
    updateQuantity: (state, action) => {
      const { name, newQuantity } = action.payload;
      const ItemToUpdate = state.items.find((planta) => (planta.name === name));
      if (ItemToUpdate) {
        ItemToUpdate.quantity = parseInt(newQuantity);
      };
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
