import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   invoiceList: [],
};

export const invoiceSlice = createSlice({
   name: 'invoice',
   initialState,
   reducers: {
      addInvoiceToList: (state, action) => {
         state.invoiceList.push(action.payload);
      },
   },
});
export const { addInvoiceToList } = invoiceSlice.actions;

export default invoiceSlice.reducer;
