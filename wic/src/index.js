import React from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';
import 'whatwg-fetch'
import './index.css';

var surveyJSON = { title: "WIC", showProgressBar: "top", pages: [
	{questions: [
		{ type: "text", name: "income", title: "What is your family's annual income?",isRequired: true},
		{ type: "text", name: "numFamilyMembers", title: "How many members are in your immediate family?",
			isRequired: true },
		{ type: "radiogroup", name: "pregnant",
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
			isRequired: true },
		{ type: "radiogroup", name: "underFive",
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
			isRequired: true },
		{ type: "radiogroup", name: "isCalFreshMediCal",
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
			isRequired: true },
        { type: "text", name: "zipcode", title: "What zipcode are you in?", isRequired: true},
	]},
]};

Survey.Survey.cssType = "bootstrap";

let model = new Survey.Model(surveyJSON);
model.onComplete.add(function (sender) {
	//var mySurvey = sender;
	//var surveyData = sender.data;
	let respondentIncome = Number.parseInt(model.data.income, 10);
	let maxIncomeBasedOnNumPeople = 12060 * ((model.data.numFamilyMembers - 1) * 4180) * 1.85;
	if (respondentIncome <= maxIncomeBasedOnNumPeople){
		if (model.data.underFive === 'Y') {
			alert(JSON.stringify('Your family qualifies because of your income and you have a child under 5.'));
		} else if (model.data.isCalFreshMediCal === 'Y') {
			alert(JSON.stringify('Your family qualifies because of your income and you participated in CalFresh or MediCal in the last year.'));
		} else if (model.data.pregnant === 'Y') {
			alert(JSON.stringify('Your family qualifies because of your income a member of your immediate family is pregnant.'));
		} else {
			alert("Sorry. You do not qualify because your family currently does not have a child under 5 and has not participated in CalFresh or Medial in the past year.");
		}
	} else {
		alert("Sorry. You do not qualify due to your income.");
	}


	let zipcode = model.data.zipcode;

    fetch('https://api.smc-connect.org/search?keyword=food&location=' + zipcode)
		.then(function(response) {
            return response.json();
        }).then(function(json) {
			for (let item of json) {
				console.log(item);

				console.log('Name: ' + item.name);

				for (let phone of item.phones) {
					console.log('Phone: ' + phone.number);
				}

				console.log('Address: ' + item.address.address_1 + ' ' + item.address.city + ' ' + item.address.postal_code);
				console.log('Description: ' + item.description);

				console.log('------------------------------------------------------------------------------------------')

				// Much more info can be extracted from the data ...
				// TODO: Determine exactly what fields to display from the returned dataset
				// TODO: Display the data on the page instead in the console
			}

		}).catch(function(ex) {
			console.log('parsing failed', ex);
		})

});

ReactDOM.render(<Survey.Survey model={model} />, document.getElementById("root"));