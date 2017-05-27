const allRequired = true;

const surveyDefinition = {
    title: "WIC", showProgressBar: "top", pages: [
      {
        name: "page1",
        elements: [
          {
            type: "rating",
            name: "numFamilyMembers",
            title: "How many people live in your household, including yourself?",
            isRequired: allRequired,
            rateValues: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8+"
            ]
          }
        ]
      },
      {
        name: "page2", elements: [
        {
          type: "rating",
          name: "numChildren",
          title: "How many children are in your household that are five years old or younger?",
          isRequired: allRequired,
          rateValues: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5+"
          ]
        }
      ]
      },
      {
        name: "page3", questions: [{
        type: "radiogroup", name: "pregnant",
        title: "Is anyone in your household pregnant?",
        choices: [
          {
            value: "Y",
            text: "Yes"
          },
          {
            value: "N",
            text: "No"
          }
        ],
        isRequired: allRequired
      }]
      },
      {
        name: "page4", questions: [
        {type: "text", name: "income", title: "What was your household income last month?", isRequired: allRequired}
      ]
      },

      {
        name: "page5", questions: [{
        type: "text", name: "zipcode", title: "What is your zipcode?", isRequired: allRequired
      }]
      },

      {
        name: "page6", questions: [{
        type: "radiogroup", name: "isMediCal",
        title: "Has anyone in your household received Medi-Cal in the last year?",
        choices: [
          {
            value: "Y",
            text: "Yes"
          },
          {
            value: "N",
            text: "No"
          }
        ],
        isRequired: allRequired
      }],
      },
      {
        name: "page7", questions: [{
        type: "radiogroup", name: "isCalFresh",
        title: "Has anyone in your household received CalFresh in the last year?",
        choices: [
          {
            value: "Y",
            text: "Yes"
          },
          {
            value: "N",
            text: "No"
          }
        ],
        isRequired: allRequired
      }],
      },
    ]
  };

export {surveyDefinition};

