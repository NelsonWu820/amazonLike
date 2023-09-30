//makes date formated MM/DD/YEAR
function formatDate(date) {
    return new Intl.DateTimeFormat().format(new Date(date));
  }
  
  export default formatDate;