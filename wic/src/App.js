import React, { Component } from 'react';
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
					],
					name: "page4"
				}
			]
		}
	}

	processSurveyData(survey) {
		var resultAsString = JSON.stringify(survey.data);
		alert(resultAsString); //send Ajax request to your web server.
	};

	render() {
		return (
			< Survey.Survey
				json={this.surveyJSON}
				onComplete={this.processSurveyData}/>
		);
	}
}
export default App;