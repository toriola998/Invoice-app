import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '../../store/invoiceSlice';

function FilterDropdown() {
   const [dropdown, setDropdown] = useState(false);
   const dispatch = useDispatch();

   function toggleDropdown() {
      setDropdown(true);

      if (dropdown === true) {
         setDropdown(false);
      }
   }

   function setDraftAsFilter(event) {
      const filterValue = event.target.checked;
      if (filterValue) {
         dispatch(addFilter('Draft'));
      } else {
         dispatch(removeFilter('Draft'));
      }
   }

   function setPendingAsFilter(event) {
      const filterValue = event.target.checked;
      if (filterValue) {
         dispatch(addFilter('Pending'));
      } else {
         dispatch(removeFilter('Pending'));
      }
   }

   function setPaidAsFilter(event) {
      const filterValue = event.target.checked;
      if (filterValue) {
         dispatch(addFilter('Paid'));
      } else {
         dispatch(removeFilter('Paid'));
      }
   }

   return (
      <div className="relative">
         <button className="font-medium flex-center" onClick={toggleDropdown}>
            <span className="mr-3 flex-center">
               <span className="mr-1">Filter </span>
               <span className="hidden md:flex">by status</span>
            </span>
            <img
               src="../../assets/icons/icon-dropdown.svg"
               alt=""
               className={dropdown ? 'rotate-180 ease-in duration-100' : ''}
            />
         </button>
         {dropdown && (
            <div className="absolute bg-black-2 dropdown p-6 rounded-lg w-[190px] -left-20 md:-left-8 top-12 z-20">
               <div>
                  <input
                     type="checkbox"
                     id="draft"
                     onChange={setDraftAsFilter}
                  />
                  <label htmlFor="draft">Draft</label>
               </div>

               <div>
                  <input
                     type="checkbox"
                     id="pending"
                     onChange={setPendingAsFilter}
                  />
                  <label htmlFor="pending">Pending</label>
               </div>

               <div>
                  <input type="checkbox" id="paid" onChange={setPaidAsFilter} />
                  <label htmlFor="paid">Paid</label>
               </div>
            </div>
         )}
      </div>
   );
}

export default FilterDropdown;
