import React from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';
import SurveyResults from './components/SurveyResults';
import {surveyDefinition} from './surveyDefinition';
import FoodLocations from "./components/FoodLocations";

Survey.Survey.cssType = "bootstrap";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.surveyComplete = this.surveyComplete.bind(this);
        this.state = {
            resultData:'',
            zipcode:''
        };
    }

    surveyComplete(data) {
        this.setState({resultData: data, zipcode: data.zipcode});
    }

    render() {
        return (
            <div>
                <Survey.Survey json={surveyDefinition} onComplete={this.surveyComplete}/>
                <SurveyResults resultData={this.state.resultData}/>
                <FoodLocations zipcode={this.state.zipcode}/>
            </div>
        )
    }
}



ReactDOM.render(<App/>, document.getElementById("root"))


