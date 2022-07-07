// seperate file to calculate date

// export and function one way

// module.exports.getDate = getDate;
// or
exports.getDate = getDate;
function getDate() {
  const today = new Date();

  // var currentDay = today.getDay();

  // var day = "";

  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //     day =
  //       "Oops something went wrong! But we are pretty sure its either weekday or weekend.";
  // }

  // Refactoring the above logic into fewer lines
  // Refer - "https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript"

  // options for toLocaleDateString
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  // toLocaleDateString - Returns a date as a string value appropriate to the host environment's current locale.
  // console.log(today.toLocaleDateString("en-US", options)); //en-US for english

  const day = today.toLocaleDateString("en-US", options);
  return day;
}

// export and function another way
exports.getDay = function () {
  const today = new Date();
  const options = {
    weekday: "long",
  };

  // toLocaleDateString - Returns a date as a string value appropriate to the host environment's current locale.
  // console.log(today.toLocaleDateString("en-US", options)); //en-US for english

  return today.toLocaleDateString("en-US", options);
};
