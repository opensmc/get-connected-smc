const strings = {
  freeSchoolMeals: {
    key: 'freeSchoolMeals',
    msg: 'You may qualify for free school meals',
    icon: 'icons/noun_614012_cc.png'
  },
  reducedPriceSchoolMeals: {
    key: 'reducedPriceSchoolMeals',
    msg: 'You may qualify for reduced priced meals at school',
    icon: 'icons/noun_1048458_cc.png'
  },
  adjunctWIC: {
    key: 'adjunctWIC',
    msg: 'You adjuctly qualify for WIC',
    icon: 'icons/noun_851501_cc.png'
  },
  WIC: {
    key: 'WIC',
    msg: 'You are WIC eligible',
    icon: 'icons/noun_851501_cc.png'
  },
  CalFresh: {
    key: 'CalFresh',
    msg: 'You may qualify for CalFresh',
    icon: 'icons/noun_1113355_cc.png'
  },
  notEligible: {
    key: 'notEligible',
    msg: 'Your income does not meet the eligibility requirements for the Federal Food Programs but here are local food resources',
    icon: 'icons/Life-Perseverance-Bricks-Nature-Determination-335446.jpg'
  }
};

const missing = (key) => {
  return {
    key: 'missing',
    msg: `ERROR: MISSING STRING DEFINITION FOR: ${key}`,
    icon: ""
  }
};

let __t = function(key) {
  return strings[key || ''] || missing(key || '');
};

export {__t};
