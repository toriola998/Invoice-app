import InvoiceLayout from './layout/InvoiceLayout';

export default function CreateInvoice() {
   return (
      <InvoiceLayout>
         <p className="font-bold text-2xl">New Invoice</p>
         <div className="mb-9">
            <p className="bold-15 text-blue my-6 md:mt-12">Bill From</p>
         </div>
      </InvoiceLayout>
   );
}
