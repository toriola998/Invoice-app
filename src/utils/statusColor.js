export const getStatusStyles = (status) => {
   switch (status) {
      case 'Paid':
         return {
            container: { backgroundColor: '#33d69f0f', color: '#33D69F' }, // example light green
            indicator: '#33D69F',
         };
      case 'Pending':
         return {
            container: { backgroundColor: '#FF8F000f', color: '#FF8F00' }, // example light red
            indicator: '#FF8F00',
         };
         case 'Draft':
            return {
               container: { backgroundColor: '#DFE3FA0f', color: '#DFE3FA' }, // example light red
               indicator: '#DFE3FA',
            };
      // Add more cases for different statuses
      default:
         return {
            container: { backgroundColor: '#E0E0E0' }, // default grey
            indicator: '#A0A0A0',
         };
   }
};
