import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredInvoices } from '../store/invoiceSlice';
import TheHeader from '../components/home/TheHeader';
import CreateInvoice from '../components/CreateInvoice';
import Invoice from '../components/home/Invoice';
import EmptyState from '../components/shared/EmptyState';
import PageLayout from '../components/layout/PageLayout';

export default function Home() {
   //const invoiceList = useSelector((state) => state.invoice.invoiceList ?? []);
   const filteredInvoices = useSelector(selectFilteredInvoices);
   const [showForm, setShowForm] = useState(false);

   return (
      <PageLayout>
         <TheHeader
            showForm={() => {
               setShowForm(true);
            }}
         />
         <main>
            {filteredInvoices?.length === 0 ? (
               <EmptyState />
            ) : (
               filteredInvoices?.map((item, index) => (
                  <Invoice
                     key={index}
                     id={item.id}
                     name={item.clientName}
                     date={item.invoiceDate}
                     price={item.totalSum}
                     status={item.status}
                     link={item.id}
                  />
               ))
            )}
         </main>
         {showForm && (
            <CreateInvoice
               onSuccess={() => {
                  setShowForm(false);
               }}
               closeModal={() => {
                  setShowForm(false);
               }}
            />
         )}
      </PageLayout>
   );
}
