const strings = {
  homeDeliveryMeals: {
    key: 'homeDeliveryMeals',
    msg: 'You may qualify for Home Delivery Meals',
    sub_msg: 'Older adults',
    icon: 'icons/noun_744795_cc.png',
    url: 'http://www.smchealth.org/general-information/where-seniors-can-go-nutritious-meals'
  },
  freeSchoolMeals: {
    key: 'freeSchoolMeals',
    msg: 'You may qualify for free school meals',
    sub_msg: 'School age children',
    icon: 'icons/noun_614012_cc.png',
    url: 'http://www.smcoe.org/about-smcoe/districts-and-schools/'
  },
  reducedPriceSchoolMeals: {
    key: 'reducedPriceSchoolMeals',
    msg: 'You may qualify for reduced priced meals at school',
    sub_msg: 'School age children',
    icon: 'icons/noun_1048458_cc.png',
    url: 'http://www.smcoe.org/about-smcoe/districts-and-schools/'
  },
  adjunctWIC: {
    key: 'adjunctWIC',
    msg: 'You adjunctly qualify for WIC',
    sub_msg: 'Women and Children',
    icon: 'icons/noun_851501_cc.png',
    url: 'http://www.smchealth.org/wic'
  },
  WIC: {
    key: 'WIC',
    msg: 'You are WIC eligible',
    sub_msg: 'Women and Children',
    icon: 'icons/noun_851501_cc.png',
    url: 'http://www.smchealth.org/wic'
  },
  CalFresh: {
    key: 'CalFresh',
    msg: 'You may qualify for CalFresh',
    sub_msg: 'Family/food',
    icon: 'icons/CalFresh.png',
    url: 'https://getcalfresh.org/'
  },
  notEligible: {
    key: 'notEligible',
    msg: 'Your income does not meet the eligibility requirements for the Federal Food Programs but here are local food resources',
    sub_msg: '',
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
