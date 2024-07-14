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
      deleteInvoice: (state, action) => {
         const id = action.payload;
         state.invoiceList = state.invoiceList.filter((item) => item.id !== id);
      },
   },
});
export const { addInvoiceToList, deleteInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
