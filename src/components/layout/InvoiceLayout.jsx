import GoBack from '../shared/GoBack';

export default function InvoiceLayout({ children }) {
   return (
      <div className="bg-black-4 md:w-[613px] lg:w-[730px] max-h-screen invoice-active">
         <div className="lg:mx-10 lg:pl-28 relative">
            <div className="px-6 md:px-0 md:pt-32 lg:pt-14 md:mx-14 lg:mx-0">
               <div className="md:hidden">
                  <GoBack />
               </div>
               {children}
            </div>
         </div>
      </div>
   );
}
