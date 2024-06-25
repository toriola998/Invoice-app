export default function DeleteModal() {
   return (
      <div className="overlay px-2">
         <div className="bg-black rounded-lg p-8 md:py-12 text-white max-w-[480px] mx-auto">
            <p className="font-bold text-2xl my-3">Confirm Deletion</p>
            <p className="font-medium text-[13px] text-grey-1">
               Are you sure you want to delete invoice #XM9141? This action
               cannot be undone.
            </p>
            <div className="flex justify-end control-btn mt-6 gap-x-2">
               <button className="bg-black-2 text-grey">Cancel</button>
               <button className="bg-orange">Delete</button>
            </div>
         </div>
      </div>
   );
}
