export default function EmptyState() {
   return (
      <div className="mt-28">
         <img
            src="../../assets/images/empty-img.png"
            alt=""
            role="presentation"
            className="mx-auto block"
         />
         <h1 className="mt-10 mb-6 text-2xl font-bold text-center">
            There is nothing here
         </h1>
         <p className="medium-13 max-w-[200px] mx-auto text-center">
            Create an invoice by clicking the New button and get started
         </p>
      </div>
   );
}
