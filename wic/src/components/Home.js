import React from 'react'
import ReactDOM from 'react-dom';
import Survey from './SmcSurvey.js'

let start = 'Start Here';

function doSurvey(onSurveyComplete, resetHomeState) {
  if (/^Start Here/i.test(start)) {
    start = 'Restart';
  } else {
    resetHomeState();
  }

  ReactDOM.render(<Survey onSurveyComplete={onSurveyComplete} />, document.getElementById("survey"));
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyComplete: false
    };
  }
  onSurveyComplete = () => {
    this.setState({
      surveyComplete: true
    });
  }
  resetHomeState = () => {
    this.setState({
      surveyComplete: false
    });
  }
  surveyStartText = () => {
    return (
      <div>
        <h3 className="display-3">Get help putting food on the table</h3>
        <p className="lead">See which Food Programs you are eligible for...</p>
      </div>
    )
  }
  render() {
    return (
      <div className="page-container">
        <img className="main-logo" src='/icons/logo_1024x1024.png' />
        <div className='jumbotron'>
          <div className="header-items-container">
            {
              this.state.surveyComplete ?
                <div />
                :
                this.surveyStartText()
            }
            <p className="lead">
              <a className="btn btn-primary btn-lg"
                href="#"
                role="button"
                onClick={() => { doSurvey(this.onSurveyComplete, this.resetHomeState) }}>
                {start}
              </a>
            </p>
            <hr className="my-4" />
          </div>
          <div className="lead">
            <div id="survey"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
