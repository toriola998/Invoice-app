import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '../../store/invoiceSlice';

function FilterDropdown() {
   const [dropdown, setDropdown] = useState(false);
   const dispatch = useDispatch();

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
      <DropdownMenu.Root>
         <DropdownMenu.Trigger asChild>
            <button className="font-medium flex-center">
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
         </DropdownMenu.Trigger>

         <DropdownMenu.Portal>
            <DropdownMenu.Content
               sideOffset={5}
               className="dropdown bg-black-2 p-6 rounded-lg w-[190px]"
            >
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
            </DropdownMenu.Content>
         </DropdownMenu.Portal>
      </DropdownMenu.Root>
   );
}

export default FilterDropdown;
