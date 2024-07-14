function OrderSummary({ itemsList = [], total }) {
   return (
      <>
         <div className="bg-black-2 price p-6 rounded-t-lg md:pt-9 md:px-8">
            {/* SUMMARY FOR MOBILE VIEW */}
            <div className="flex flex-col gap-5 md:hidden">
               {itemsList?.map((item, index) => (
                  <div className="flex-center justify-between" key={index}>
                     <div>
                        <p>{item?.itemName}</p>
                        <p className="text-grey-1">
                           {item?.quantity} x £ {item?.price}
                        </p>
                     </div>
                     <p>£ {item?.total}</p>
                  </div>
               ))}
            </div>

            {/* SUMMARY FOR TABLET & DESKTOP VIEW */}
            <table className="w-full hidden md:inline-table">
               <thead>
                  <tr>
                     <th className="text-left">Item Name</th>
                     <th>QTY.</th>
                     <th className="text-right">Price</th>
                     <th className="text-right">Total</th>
                  </tr>
               </thead>
               <tbody className="bold-15">
                  {itemsList?.map((item, index) => (
                     <tr key={index}>
                        <td>{item?.itemName}</td>
                        <td className="text-grey text-center">
                           {item?.quantity}
                        </td>
                        <td className="text-grey text-right">
                           £ {item?.price}
                        </td>
                        <td className="text-right">£ {item?.total}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         <div className="bg-black-3 flex-center p-6 justify-between rounded-b-lg md:px-8">
            <p className="medium-13 text-white">Amount Due</p>
            <p className="font-bold text-2xl">£ {total}</p>
         </div>
      </>
   );
}

export default OrderSummary;
