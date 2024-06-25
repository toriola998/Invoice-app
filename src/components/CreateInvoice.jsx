import InvoiceLayout from './layout/InvoiceLayout';

export default function CreateInvoice() {
   return (
      <InvoiceLayout>
         <p className="font-bold text-2xl">New Invoice</p>
         <div className="mb-9">
            <p className="bold-15 text-blue my-6 md:mt-12">Bill From</p>
         </div>

         <div className="bottom-btns">
            <div className="flex justify-between control-btn">
               <button className="bg-light-2 text-grey-2">Discard</button>
               <div className="flex gap-2 ">
                  <button className="text-grey bg-black-6">
                     Save as Draft
                  </button>

                  <button className="bg-blue">
                     <span>Save & Send</span>
                  </button>
               </div>
            </div>
         </div>
      </InvoiceLayout>
   );
}
