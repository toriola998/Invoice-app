export default function InputField({
   label,
   name,
   errorMessage,
   defaultValue,
   type = 'text',
   placeholder,
   fieldName,
}) {
   return (
      <div className="relative ">
         <label
            htmlFor={name}
            className={`label ${errorMessage ? 'text-orange' : ''}`}
         >
            {label}
         </label>

         <input
            type={type}
            min="0"
            step="any"
            placeholder={placeholder}
            id={name}
            name={name}
            defaultValue={defaultValue}
            {...fieldName}
            className={`input ${errorMessage ? 'border-2 border-orange' : ''}`}
         />
         <p className="error-msg">{errorMessage}</p>
      </div>
   );
}
