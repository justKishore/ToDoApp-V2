// seperate file to calculate date

// export and function one way

// module.exports.getDate = getDate;
// or
exports.getDate = getDate;
function getDate() {
  const today = new Date();

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
