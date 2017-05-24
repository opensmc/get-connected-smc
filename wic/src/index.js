import React from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';
import SurveyResults from './components/SurveyResults';
import {surveyDefinition} from './surveyDefinition';
import FoodLocations from "./components/FoodLocations";
import {determineEligibility} from "./eligibilityRequirements";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './index.css';

Survey.Survey.cssType = "bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.surveyComplete = this.surveyComplete.bind(this);
    this.state = {
      resultData: ''
    };
  }

  surveyComplete(result) {
    let eligibility = determineEligibility(result.data.numFamilyMembers, result.data.income, result.data.isCalFresh, result.data.isMediCal);
    this.setState({resultData: result, eligibleFor: eligibility});
  }

  render() {
    let zipcode = '';
    if (this.state.resultData && this.state.resultData.data && this.state.resultData.data.zipcode) {
      zipcode = this.state.resultData.data.zipcode;
    }
    return (
      <div>
        <div className="survey">
          <Survey.Survey json={surveyDefinition} onComplete={this.surveyComplete}/>
        </div>
        <SurveyResults resultData={this.state.resultData} eligibleFor={this.state.eligibleFor}/>
        <FoodLocations zipcode={zipcode}/>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById("root"));


