const strings = {
  homeDeliveryMeals: {
    key: 'homeDeliveryMeals',
    msg: 'You qualify for free lunch at dining sites.',
    sub_msg: 'Click here to learn more',
    icon: 'icons/logo_900x600.png',
    url: 'http://www.smchealth.org/general-information/where-seniors-can-go-nutritious-meals'
  },
  freeSchoolMeals: {
    key: 'freeSchoolMeals',
    msg: 'You may qualify for free school meals',
    sub_msg: 'Click here to learn more',
    icon: 'icons/noun_1048458_cc.jpg',
    url: 'http://www.smcoe.org/about-smcoe/districts-and-schools/'
  },
  reducedPriceSchoolMeals: {
    key: 'reducedPriceSchoolMeals',
    msg: 'You may qualify for reduced priced meals at school',
    sub_msg: 'Click here to learn more',
    icon: 'icons/noun_1048458_cc.jpg',
    url: 'http://www.smcoe.org/about-smcoe/districts-and-schools/'
  },
  WIC: {
    key: 'WIC',
    msg: 'You may be WIC eligible',
    sub_msg: 'Click here to learn more',
    icon: 'icons/noun_851501_cc.png',
    url: 'http://www.smchealth.org/wic'
  },
  CalFresh: {
    key: 'CalFresh',
    msg: 'You may qualify for CalFresh',
    sub_msg: 'Click here to learn more',
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
