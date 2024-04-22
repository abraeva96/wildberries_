import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../Types";
export interface Ibasket {
  basket: IProduct[];
}


const loadBasketFromStorage = (): Ibasket => {
  const storedBasket = localStorage.getItem('basketSave');
  if (storedBasket) {
    return { basket: JSON.parse(storedBasket) };
  }
  return { basket: [] };
};

const initialState: Ibasket = loadBasketFromStorage();

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.basket = action.payload;
      localStorage.setItem('basketSave', JSON.stringify(action.payload));
    },
    delBasket: (state, action) => {
      const id = action.payload;
      state.basket = state.basket.filter(item => item.id !== id);
      localStorage.setItem('basketSave', JSON.stringify(state.basket));
    }
  }
});

export const { setBasket, delBasket } = basketSlice.actions;
