import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductState {
  open: boolean
}
export interface IRootState {
    product: IProductState;
   
  }

const initialState: IProductState = {
  open: false
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    }
  }
});

export const { setOpen } = productSlice.actions;

