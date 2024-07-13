import FilterDropdown from './FilterDropdown';
import { useSelector } from 'react-redux';

function TheHeader({ showForm }) {
   const invoiceList = useSelector((state) => state.invoice.invoiceList);

   return (
      <header className="flex-center justify-between lg:py-6">
         <div>
            <h1 className="text-2xl font-bold md:text-4xl">Invoices</h1>
            <p className="text-[13px] font-medium flex">
               <span className="hidden md:flex mr-1">There are</span>
               <span className="mr-1">
                  {invoiceList.length <= 1
                     ? invoiceList.length + ' ' + 'invoice.'
                     : invoiceList.length + ' ' + 'total invoices.'}
               </span>
            </p>
         </div>

         <div className="flex-center gap-x-[18px] md:gap-x-10">
            <FilterDropdown />
            <button
               className="bg-blue rounded-3xl flex-center gap-2 p-[6px]"
               onClick={showForm}
            >
               <span className="flex-justify-center bg-white rounded-full h-8 w-8">
                  <img
                     src="../../assets/icons/icon-plus.svg"
                     alt=""
                     role="presentation"
                  />
               </span>
               <span className="mr-2 text-[15px] font-bold md:flex gap-x-1">
                  New
                  <span className="hidden md:flex">Invoice</span>
               </span>
            </button>
         </div>
      </header>
   );
}

export default TheHeader;
