const FREE_SCHOOL_MEALS = 'freeSchoolMeals';
const REDUCED_PRICE_SCHOOL_MEALS = 'reducedPriceSchoolMeals';
const WIC = 'WIC';
const ADJUNCT_WIC = 'adjunctWIC';
const CALFRESH = 'CalFresh';

const NEED_KIDS = [FREE_SCHOOL_MEALS, REDUCED_PRICE_SCHOOL_MEALS];
const ONLY_IF_PREGNANT = [WIC, ADJUNCT_WIC];

let eligibityRequirements = [
  {familySize: 1, maxIncome: 1287, eligibleFor: [FREE_SCHOOL_MEALS]},
  {familySize: 1, maxIncome: 1831, eligibleFor: [REDUCED_PRICE_SCHOOL_MEALS, WIC]},
  {familySize: 1, maxIncome: 1962, eligibleFor: [CALFRESH]},

  {familySize: 2, maxIncome: 1735, eligibleFor: [FREE_SCHOOL_MEALS]},
  {familySize: 2, maxIncome: 2469, eligibleFor: [REDUCED_PRICE_SCHOOL_MEALS, WIC]},
  {familySize: 2, minIncome: 2469, eligibleFor: [ADJUNCT_WIC]},
  {familySize: 2, maxIncome: 2656, eligibleFor: [CALFRESH]},

  {familySize: 3, maxIncome: 2184, eligibleFor: [FREE_SCHOOL_MEALS]},
  {familySize: 3, maxIncome: 3108, eligibleFor: [REDUCED_PRICE_SCHOOL_MEALS, WIC]},
  {familySize: 3, minIncome: 3108, eligibleFor: [ADJUNCT_WIC]},
  {familySize: 3, maxIncome: 3350, eligibleFor: [CALFRESH]},

  {familySize: 4, maxIncome: 2632, eligibleFor: [FREE_SCHOOL_MEALS]},
  {familySize: 4, maxIncome: 3746, eligibleFor: [REDUCED_PRICE_SCHOOL_MEALS, WIC]},
  {familySize: 4, minIncome: 3746, eligibleFor: [ADJUNCT_WIC]},
  {familySize: 4, maxIncome: 4042, eligibleFor: [CALFRESH]},

  {familySize: 5, maxIncome: 3081, eligibleFor: [FREE_SCHOOL_MEALS]},
  {familySize: 5, maxIncome: 4384, eligibleFor: [REDUCED_PRICE_SCHOOL_MEALS, WIC]},
  {familySize: 5, minIncome: 4384, eligibleFor: [ADJUNCT_WIC]},
  {familySize: 5, maxIncome: 3736, eligibleFor: [CALFRESH]},


  {familySize: 6, maxIncome: 3529, eligibleFor: [FREE_SCHOOL_MEALS]},
  {familySize: 6, maxIncome: 5022, eligibleFor: [REDUCED_PRICE_SCHOOL_MEALS, WIC]},
  {familySize: 6, minIncome: 5022, eligibleFor: [ADJUNCT_WIC]},
  {familySize: 6, maxIncome: 5430, eligibleFor: [CALFRESH]},

  {familySize: 7, maxIncome: 3979, eligibleFor: [FREE_SCHOOL_MEALS]},
  {familySize: 7, maxIncome: 5662, eligibleFor: [REDUCED_PRICE_SCHOOL_MEALS, WIC]},
  {familySize: 7, minIncome: 5662, eligibleFor: [ADJUNCT_WIC]},
  {familySize: 7, maxIncome: 6122, eligibleFor: [CALFRESH]},

  {familySize: 8, maxIncome: 4429, eligibleFor: [FREE_SCHOOL_MEALS]},
  {familySize: 8, maxIncome: 6303, eligibleFor: [REDUCED_PRICE_SCHOOL_MEALS, WIC]},
  {familySize: 8, minIncome: 6303, eligibleFor: [ADJUNCT_WIC]},
  {familySize: 8, maxIncome: 6816, eligibleFor: [CALFRESH]},
];


  /**
   * familySize (number) - Size of household
   * monthlyIncome (number) - Last month's household income
   * isRecentCalFresh (boolean) - Enrolled in CalFesh in the past year
   * isRecentMediCal (boolean) - Enrolled in MediCal in the past year
   *
   * returns array of programs eligible for
   */
  function determineEligibility(
    familySize, monthlyIncome, isRecentCalFresh, isRecentMediCal, 
    isSenior, anyChildren, isPregnant, numChildrenUnder5
  ) 
  {
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

    const checkChildrenForWICAndSchoolLunches = (programName) => {
      if (CALFRESH === programName) {
        return true;
      }
      if (anyChildren === 'N') {
        if (NEED_KIDS.indexOf(programName) !== -1) {
          return false;
        }
        if (isPregnant === 'N') {
          if (ONLY_IF_PREGNANT.indexOf(programName) !== -1) {
            return false;
          }
        }
      } else {
        // If they have kids under five and are not pregnant
        // they still qualify for WIC
        if (isPregnant === 'N' && numChildrenUnder5 === '0') {
          if (ONLY_IF_PREGNANT.indexOf(programName) !== -1) {
            return false;
          }
        }
      }
      return true;
    }
    
    for (let requirement of eligibityRequirements) {
      const programNames = requirement.eligibleFor;
      if (familySize === requirement.familySize) {
        if (requirement.hasOwnProperty('maxIncome')) {
          for (let programName of programNames) {
            if (monthlyIncome <= requirement.maxIncome && 
                checkChildrenForWICAndSchoolLunches(programName)) {
              eligibleFor.push([programName]);
            }
          }
        }
        if (requirement.hasOwnProperty('minIncome')) {
          for (let programName of programNames) {                      
            if (monthlyIncome > requirement.minIncome 
                && checkChildrenForWICAndSchoolLunches(programName)) {
              if (isRecentCalFresh || isRecentMediCal) {
                eligibleFor.push([programName]);
              }
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