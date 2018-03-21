let eligibityRequirements = [
  {familySize: 1, maxIncome: 1287, eligibleFor: ['freeSchoolMeals']},
  {familySize: 1, maxIncome: 1831, eligibleFor: ['reducedPriceSchoolMeals', 'WIC']},
  {familySize: 1, maxIncome: 1962, eligibleFor: ['CalFresh']},

  {familySize: 2, maxIncome: 1735, eligibleFor: ['freeSchoolMeals']},
  {familySize: 2, maxIncome: 2469, eligibleFor: ['reducedPriceSchoolMeals', 'WIC']},
  {familySize: 2, maxIncome: 2656, eligibleFor: ['CalFresh']},

  {familySize: 3, maxIncome: 2184, eligibleFor: ['freeSchoolMeals']},
  {familySize: 3, maxIncome: 3108, eligibleFor: ['reducedPriceSchoolMeals', 'WIC']},
  {familySize: 3, maxIncome: 3350, eligibleFor: ['CalFresh']},

  {familySize: 4, maxIncome: 2632, eligibleFor: ['freeSchoolMeals']},
  {familySize: 4, maxIncome: 3746, eligibleFor: ['reducedPriceSchoolMeals', 'WIC']},
  {familySize: 4, maxIncome: 4042, eligibleFor: ['CalFresh']},

  {familySize: 5, maxIncome: 3081, eligibleFor: ['freeSchoolMeals']},
  {familySize: 5, maxIncome: 4384, eligibleFor: ['reducedPriceSchoolMeals', 'WIC']},
  {familySize: 5, maxIncome: 3736, eligibleFor: ['CalFresh']},


  {familySize: 6, maxIncome: 3529, eligibleFor: ['freeSchoolMeals']},
  {familySize: 6, maxIncome: 5022, eligibleFor: ['reducedPriceSchoolMeals', 'WIC']},
  {familySize: 6, maxIncome: 5430, eligibleFor: ['CalFresh']},

  {familySize: 7, maxIncome: 3979, eligibleFor: ['freeSchoolMeals']},
  {familySize: 7, maxIncome: 5662, eligibleFor: ['reducedPriceSchoolMeals', 'WIC']},
  {familySize: 7, maxIncome: 6122, eligibleFor: ['CalFresh']},

  {familySize: 8, maxIncome: 4429, eligibleFor: ['freeSchoolMeals']},
  {familySize: 8, maxIncome: 6303, eligibleFor: ['reducedPriceSchoolMeals', 'WIC']},
  {familySize: 8, maxIncome: 6816, eligibleFor: ['CalFresh']},
];


  /**
   * familySize (number) - Size of household
   * monthlyIncome (number) - Last month's household income
   * isRecentCalFresh (boolean) - Enrolled in CalFesh in the past year
   * isRecentMediCal (boolean) - Enrolled in MediCal in the past year
   *
   * returns array of programs eligible for
   */
  function determineEligibility(familySize, monthlyIncome, isRecentCalFresh, isRecentMediCal, isSenior) {
    let eligibleFor = [];

    // Clean up inputs
    if (familySize === '8+') {
      familySize = 8;
    } else {
      familySize = parseInt(familySize, 10);
    }
    monthlyIncome = parseFloat(monthlyIncome);
    isRecentCalFresh = (isRecentCalFresh === 'Y');
    isRecentMediCal = (isRecentMediCal === 'Y');

    if (isSenior === 'Y') {
      eligibleFor.push(['homeDeliveryMeals']);
    }

    for (let requirement of eligibityRequirements) {
      if (familySize === requirement.familySize) {
        if (requirement.hasOwnProperty('maxIncome')) {
          if (monthlyIncome <= requirement.maxIncome) {
            eligibleFor.push(requirement.eligibleFor);
          }
        }
        if (requirement.hasOwnProperty('minIncome')) {
          if (monthlyIncome > requirement.minIncome) {
            if (isRecentCalFresh || isRecentMediCal) {
              eligibleFor.push(requirement.eligibleFor);
            }
          }
        }
      }
    }

    if (eligibleFor.length === 0) {
      eligibleFor = [['notEligible']];
    }

    return eligibleFor;
  }

export {determineEligibility};