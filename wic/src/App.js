import React, {Component} from 'react';
import './App.css';
import * as Survey from 'survey-react';
class App extends Component {
  constructor() {
    super();
    this.surveyJSON = {
      pages: [
        {
          elements: [
            {
              type: "text",
              isRequired: true,
              name: "q1",
              title: "What is your family's annual income?"
            }
          ],
          name: "page1"
        },
        {
          elements: [
            {
              type: "rating",
              isRequired: true,
              name: "q2",
              rateValues: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8"
              ],
              title: "How many members are in your immediate family?"
            },
            {
              type: "radiogroup",
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
              isRequired: true,
              name: "q3",
              title: "Are any of your family members currently pregnant?"
            },
            {
              type: "radiogroup",
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
              isRequired: true,
              name: "q4",
              title: "Are there children ages 5 and under?"
            }
          ],
          name: "page2"
        },
        {
          elements: [
            {
              type: "radiogroup",
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
              isRequired: true,
              name: "q5",
              title: "How  you participated in either CalFresh or Medi-Cal in the past 12 months?"
            },
            {
              type: "html",
              html: "You qualify because you have a child under 5.",
              name: "y1",
              visible: false,
              visibleIf: "{q4} = 'Y'"
            },
            {
              type: "html",
              html: "You qualify because you participated in either CalFresh or Medi-Cal in the past 12 months.",
              name: "y2",
              visible: false,
              visibleIf: "{q5} = 'Y'"
            },
            {
              type: "html",
              html: "You qualify because one of your immediate family members is currently pregnant.",
              name: "y3",
              visible: false,
              visibleIf: "{q3} = 'value1'"
            },
            {
              type: "html",
              html: "Your income qualifies you for aid.",
              name: "y4",
              visible: false,
              visibleIf: " ({q1} < 12061 and {q2} < 2)"
            },
            {
              type: "html",
              html: "Your family's income (less than $16,240) qualifies for aid.",
              name: "y5",
              visible: false,
              visibleIf: " ({q1} < 16241 and {q2} < 3)\n"
            },
            {
              type: "html",
              html: "Your family's income (less than $20,420) qualifies for aid.",
              name: "y6",
              visible: false,
              visibleIf: " ({q1} < 20420 and {q2} < 4)\n"
            },
            {
              type: "html",
              html: "Your family's income (less than $24,600) qualifies for aid.\n",
              name: "y7",
              visible: false,
              visibleIf: " ({q1} < 25601 and {q2} < 5)\n"
            },
            {
              type: "html",
              html: "Your family's income (less than $28,780) qualifies for aid.\n",
              name: "y8",
              visible: false,
              visibleIf: " ({q1} < 28781 {q2} < 6)\n"
            },
            {
              type: "html",
              html: "Your family's income (less than $32,960) qualifies for aid.",
              name: "y9",
              visible: false,
              visibleIf: " ({q1} < 32961 and {q2} < 7)\n"
            },
            {
              type: "html",
              html: "Your family's income (less than $37140) qualifies for aid.",
              name: "y10",
              visible: false,
              visibleIf: " ({q1} < 37141 and {q2} < 8)\n"
            },
            {
              type: "html",
              html: "Your family's income (less than $41.320) qualifies for aid.\n",
              name: "y11",
              visible: false,
              visibleIf: " ({q1} < 41321 and {q2} < 9)\n"
            }
          ],
          name: "page4"
        }
      ]
    }
  }

  sendDataToServer(survey) {
    var resultAsString = JSON.stringify(survey.data);
    alert(resultAsString); //send Ajax request to your web server.
  };

  render() {
    return (
      < Survey.Survey
    json = {this.surveyJSON
  }
    onComplete = {this.sendDataToServer
  } />
  )
    ;
  }
}
export default App;