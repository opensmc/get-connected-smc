const yes_no = [{ value: "Y", text: "Yes" }, { value: "N", text: "No" } ];

const surveyDefinition = {
  requiredText: "",
  showProgressBar: "top",
  completeText: "Finish",
  pageNextText: "Continue",
  pagePrevText: "Previous",
  goNextPageAutomatic: true,
  pages: [
    {
      elements: [
        {
          type: "radiogroup",
          name: "isSenior",
          title: "Is there an older adult, age 60 & over, in your household?",
          choices: yes_no,
          isRequired: true
        }
      ]
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "anyChildren",
          title: "Are there any children in your household?",
          choices: yes_no,
          isRequired: true
        }
      ]
    },
    {
      visible: false,
      visibleIf: "{anyChildren} = 'Y'",
      name: "childrenUnderFive",
      elements: [
        {
          type: "rating",
          name: "numChildrenUnder5",
          title: "How many children are in your household are five years old or younger?",
          isRequired: true,
          rateValues: [ "0", "1", "2", "3", "4", "5+"]
        }
      ]
    },
    {
      visible: false,
      visibleIf: "{anyChildren} = 'Y'",
      name: "childrenTotal",
      elements: [
        {
          type: "rating",
          name: "numChildrenTotal",
          title: "How many children total are in your household?",
          isRequired: true,
          rateValues: [ "1", "2", "3", "4", "5", "6", "7", "8+" ]
        }
      ]
    },
    {
      elements: [
        {
          type: "rating",
          name: "numFamilyMembers",
          title: "How many people live in your household, including yourself?",
          isRequired: true,
          rateValues: [ "1", "2", "3", "4", "5", "6", "7", "8+" ]
        }
      ]
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "isPregnant",
          title: "Is anyone in your household pregnant?",
          choices: yes_no,
          isRequired: true
        }
      ]
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "isMediCal",
          title: "Has anyone in your household received Medi-Cal in the last year?",
          choices: yes_no,
          isRequired: true
        }
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "isCalFresh",
          title: "Has anyone in your household received CalFresh in the last year?",
          choices: yes_no,
          isRequired: true
        }
      ],
    },
    {
      elements: [
        {
          type: "text",
          name: "income",
          inputType: "number",
          title: "What was your household income last month?",
          isRequired: true,
          validators: [
            {
              type: "numeric",
              minValue: 1,
              maxValue: 10000
            }
          ]
        }
      ]
    },
    {
      elements: [
        {
          type: "text",
          name: "zipcode",
          title: "What is your zipcode?",
          isRequired: true
        }
      ]
    },
  ]
};

export {surveyDefinition};
