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
    let eligibility = determineEligibility(result.data.numFamilyMembers, result.data.income, result.data.isCalFresh, result.data.isMediCal);
    this.setState({resultData: result, eligibleFor: eligibility});

    let zipcode = '';
    if (this.state.resultData && this.state.resultData.data && this.state.resultData.data.zipcode) {
      zipcode = this.state.resultData.data.zipcode;
    }

    ReactDOM.render(<SurveyResults resultData={result} eligibleFor={eligibility} zipcode={zipcode}/>, document.getElementById("survey"));
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
      </div>
    )
  }
}

export default SmcSurvey;
