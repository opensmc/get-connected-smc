import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';
import {surveyDefinition} from '../surveyDefinition';
import {determineEligibility} from "../eligibilityRequirements";

import SurveyResults from './SurveyResults';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../index.css';

Survey.Survey.cssType = "bootstrap";

class SmcSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.surveyComplete = this.surveyComplete.bind(this);
    this.state = {
      resultData: ''
    };
  }

  surveyComplete(result) {
    const eligibility = determineEligibility(result.data.numFamilyMembers, result.data.income, result.data.isCalFresh, result.data.isMediCal);
    const zipcode = result && result.data && result.data.zipcode ? result.data.zipcode : '';

    this.setState({resultData: result.data, eligibleFor: eligibility, zipcode: zipcode});

    ReactDOM.render(<SurveyResults resultData={result.data} eligibleFor={eligibility} zipcode={zipcode}/>, document.getElementById("survey"));
  }

  render() {
    return (
      <div className="survey-outer-container">
         <div className="survey">
          <Survey.Survey json={surveyDefinition} onComplete={this.surveyComplete}/>
        </div>
      </div>
    )
  }
}

export default SmcSurvey;
