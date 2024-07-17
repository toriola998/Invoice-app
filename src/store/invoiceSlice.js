import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
   invoiceList: [],
   filters: [],
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
      addFilter: (state, action) => {
         state.filters.push(action.payload);
      },
      removeFilter: (state, action) => {
         state.filters = state.filters.filter(
            (filter) => filter !== action.payload,
         );
      },
   },
});
export const {
   addInvoiceToList,
   deleteInvoice,
   markInvoiceAsPaid,
   editAndSaveInvoice,
   addFilter,
   removeFilter,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;

// Memoized selector to get filtered invoices
export const selectInvoiceList = (state) => state.invoice.invoiceList;
export const selectFilters = (state) => state.invoice.filters;

export const selectFilteredInvoices = createSelector(
   [selectInvoiceList, selectFilters],
   (invoiceList, filters) => {
      if (filters.length === 0) {
         return invoiceList;
      }
      return invoiceList.filter((invoice) => filters.includes(invoice.status));
   },
);
