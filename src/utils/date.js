const DATE = {
   formatDate: (inputDate) => {
      // Parse the input date
      const parsedDate = new Date(inputDate);

      // Create an array of month names
      const monthNames = [
         'Jan',
         'Feb',
         'Mar',
         'Apr',
         'May',
         'Jun',
         'Jul',
         'Aug',
         'Sep',
         'Oct',
         'Nov',
         'Dec',
      ];

      // Get the day, month, and year from the parsed date
      const day = parsedDate.getDate();
      const monthIndex = parsedDate.getMonth();
      const year = parsedDate.getFullYear();

      // Format the date in the desired format "8 Sep 2023"
      const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
      if (inputDate) {
         return formattedDate;
      } else return;
   },

   getPaymentDueDate: (dateString, n) => {
      const [year, month, day] = dateString.split('-').map(Number);
      const startDate = new Date(year, month - 1, day);

      const paymentNetDay = new Date(startDate);
      paymentNetDay.setDate(startDate.getDate() + (n - 1));

      // Format the date as YYYY-MM-DD
      const formattedDate = `${paymentNetDay.getFullYear()}-${String(paymentNetDay.getMonth() + 1).padStart(2, '0')}-${String(paymentNetDay.getDate()).padStart(2, '0')}`;

      if (dateString) {
         return DATE.formatDate(formattedDate);
      } else return;
   },
};

export default DATE;
