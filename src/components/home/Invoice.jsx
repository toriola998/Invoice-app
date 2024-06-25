import { Link } from 'react-router-dom';

function Invoice({ id, name, date, price, status, link }) {
   return (
      <Link to={`/details/${link}`} className="invoice-wrap">
         <div className="flex-center justify-between mb-6 md:mb-0 md:gap-x-7">
            <p className="bold-15">
               <span className="text-grey-2">#</span>
               <span className="text-white">{id}</span>
            </p>
            <p className="text-white text-[.82rem] md:absolute left-28">
               {name}
            </p>
         </div>

         <div className="flex-center justify-between md:items-baseline md:gap-x-10 md:pl-64">
            <div className="md:flex items-baseline gap-x-7">
               <p className="text-[.82rem] text-grey mb-2 md:mb-0 top-10 md:absolute left-56">
                  Due {date}
               </p>
               <p className="bold-15">£ {price}</p>
            </div>
            <div className="status">
               <span className="text-green bold-15">{status}</span>
            </div>
         </div>

         <img
            src="src/assets/images/icons/icon-dropdown.svg"
            alt=""
            className="hidden md:flex -rotate-90"
         />
      </Link>
   );
}

export default Invoice;
