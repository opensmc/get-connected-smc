import React, {Component} from 'react';
import './App.css';
import * as Survey from 'survey-react';

class App extends Component {
	constructor() {
		super();
		this.surveyJSON = { title: "Determining Your WIC Eligibility", pages: [
			{ name:"page1", questions: [
				{ type: "rating", name: "familySize", title: "How members are in your immediate family?" },
				{ type: "radiogroup", choices: [ "Yes", "No" ], isRequired: true, name: "pregnant",title: "Is anyone currently pregnant?" },
				{ type: "checkbox", choices: ["Bootstrap","Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visibleIf: "{pregnant} = 'Yes'" }
			]},
			{ name: "page2", questions: [
				{ type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
				{ type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" } ] },
			{ name: "page3",questions: [
				{ type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" } ] }
		]
		}
	}

	sendDataToServer(survey) {
		var resultAsString = JSON.stringify(survey.data);
		alert(resultAsString); //send Ajax request to your web server.
	};

	render() {
		return (
			<Survey.Survey json={this.surveyJSON} onComplete={this.sendDataToServer} />
		);
	}
}

export default App;