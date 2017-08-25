const strings = [
  {freeSchoolMeals: "You may qualify for free school meals"},
  {reducedPriceSchoolMeals: "You may qualify for reduced priced meals at school"},
  {adjunctWIC: "You adjuctly qualify for WIC"},
  {CalFresh: "You may qualify for CalFresh"},
  {notEligible: "Sorry, you do not qualify for any of the programs"}
];


let __t = function(key) {
  for (let string of strings) {
    let stringKey = Object.keys(string)[0];
    if (stringKey === key) {
      return string[key];
    }
  }

  return "ERROR: MISSING STRING DEFINITION FOR: " + key;
};

export {__t};
