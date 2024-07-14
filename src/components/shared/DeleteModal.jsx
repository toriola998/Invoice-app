export default function DeleteModal({ invoiceId, closeModal, deleteInvoice }) {
   return (
      <div className="overlay px-2">
         <div className="bg-black rounded-lg p-8 md:py-12 text-white max-w-[480px] mx-auto">
            <p className="font-bold text-2xl my-3">Confirm Deletion</p>
            <p className="font-medium text-[13px] text-grey-5">
               Are you sure you want to delete invoice {invoiceId} This action
               cannot be undone.
            </p>
            <div className="flex justify-end control-btn mt-6 gap-x-2">
               <button className="bg-black-2 text-grey" onClick={closeModal}>
                  Cancel
               </button>
               <button className="bg-orange" onClick={deleteInvoice}>
                  Delete
               </button>
            </div>
         </div>
      </div>
   );
}
