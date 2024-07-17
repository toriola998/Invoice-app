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
      markInvoiceAsPaid: (state, action) => {
         const id = action.payload;
         const invoice = state.invoiceList.find((item) => item.id === id);
         if (invoice) {
            invoice.status = 'Paid';
         } else return;
      },
      editAndSaveInvoice: (state, action) => {
         const invoiceToBeEdited = action.payload;
         const invoiceIndex = state.invoiceList.findIndex(
            (item) => item.id === invoiceToBeEdited.id,
         );
         if (invoiceIndex !== -1) {
            state.invoiceList[invoiceIndex] = invoiceToBeEdited;
         }
      },
   },
});
export const {
   addInvoiceToList,
   deleteInvoice,
   markInvoiceAsPaid,
   editAndSaveInvoice,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
