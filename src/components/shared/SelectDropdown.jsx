import Select from 'react-select';

const customStyles = {
   control: (provided, state) => ({
      ...provided,
      borderRadius: '4px',
      backgroundColor: '#1E2139',
      height: '47px',
      marginTop: '7px',
      border: state.isFocused
         ? 'none'
         : state.selectProps.error
           ? '2px solid #EC5757'
           : 'none',
      boxShadow: state.isFocused ? 'none' : '',
      '&:hover': {
         outlineColor: 'none',
      },
   }),

   option: (provided, state) => ({
      ...provided,
      backgroundColor: '#1E2139',
      color: state.isSelected ? '#7C5DFA' : 'white',
      fontWeight: '600',
      fontSize: '15px',
      '&:hover': {
         backgroundColor: '#1E2139',
         color: 'inherit',
         cursor: 'pointer',
      },
   }),

   menu: (provided) => ({
      ...provided,
      backgroundColor: '#1E2139',
      borderRadius: '8px',
      border: 'none', // Ensure no border
      boxShadow: 'none', // Remove box shadow if any
      //marginTop: '0', // Remove top margin if any
   }),

   //    menuList: (provided) => ({
   //       ...provided,
   //       backgroundColor: '#1E2139',
   //       padding: '0',
   //    }),

   singleValue: (provided) => ({
      ...provided,
      color: 'white',
      fontWeight: '600',
      fontSize: '15px', // Adjust font size of the selected value
   }),
};

export default function SelectDropdown({
   errorMessage,
   options,
   label,
   field,
   onChange,
}) {
   const handleChange = (selectedOption) => {
      onChange(selectedOption);
   };
   return (
      <div className="pl-[1px] relative">
         <label className={`label ${errorMessage ? 'text-orange' : ''}`}>
            {label}
         </label>

         <Select
            {...field}
            options={options}
            styles={customStyles}
            onChange={handleChange}
            error={errorMessage}
         />
         <p className="error-msg">{errorMessage}</p>
      </div>
   );
}
