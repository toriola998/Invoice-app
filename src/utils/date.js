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
      return formattedDate;
   },
};

export default DATE;
