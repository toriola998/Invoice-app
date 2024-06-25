import { useNavigate } from 'react-router-dom';
export default function GoBack() {
   const navigate = useNavigate();
   const goBack = () => {
      navigate(-1);
   };

   return (
      <button onClick={goBack} className="flex-center gap-6 py-8">
         <img
            src="../../assets/icons/icon-dropdown.svg"
            alt=""
            role="presentation"
            className="rotate-90 mb-1"
         />
         <span className="bold-15">Go back</span>
      </button>
   );
}
