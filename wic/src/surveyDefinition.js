const surveyDefinition = {
    title: "WIC", showProgressBar: "top", pages: [
        {
            name: "page1", questions: [
            {type: "text", name: "income", title: "What is your family's annual income?", isRequired: true}
        ]
        },
        {
            name: "page2", questions: [{
            type: "text",
            name: "numFamilyMembers",
            title: "How many members are in your immediate family?",
            isRequired: true
        }
        ]
        },
        {
            name: "page3", questions: [{
            type: "radiogroup", name: "pregnant",
            title: "Are any of your family members currently pregnant?",
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
            isRequired: true
        }]
        },
        {
            name: "page4", questions: [{

            type: "radiogroup", name: "underFive",
            title: "Are there children ages 5 and under?",
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
            isRequired: true
        }]
        },
        {
            name: "page5", questions: [{


            type: "radiogroup", name: "isCalFreshMediCal",
            title: "How  you participated in either CalFresh or Medi-Cal in the past 12 months?",
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
            isRequired: true
        }],
        },
        {
            name: "page6", questions: [{

            type: "text", name: "zipcode", title: "What zipcode are you in?", isRequired: true
        }]
        }
    ]
};

export {surveyDefinition};

