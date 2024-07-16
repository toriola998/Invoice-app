import GoBack from '../shared/GoBack';

export default function InvoiceLayout({ children }) {
   return (
      <div className="wrapper">
         <div className="bg-black-4 md:w-[613px] lg:w-[730px] max-h-screen invoice-active">
            <div className="lg:pl-28 relative">
               <div className="pt-10 lg:pt-14">
                  {/* <div className="md:hidden">
                     <GoBack />
                  </div> */}
                  {children}
               </div>
            </div>
         </div>
      </div>
   );
}
