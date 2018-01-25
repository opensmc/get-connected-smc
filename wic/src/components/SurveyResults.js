import React from 'react';
import {__t} from '../__t';

import FoodLocations from './FoodLocations'

class SurveyResults extends React.Component {
    render() {
      let results = [];
      if (this.props.eligibleFor) {
        if (this.props.eligibleFor.length >= 1) {
          for (let programs of this.props.eligibleFor) {
            for (let program of programs) {
              results.push(program);
            }
          }
        } else {
          results = 'not.eligible';
        }
      }

      function Item(k) {
        const data = __t(k.message);
        return (
          <div className={`card`}>
            <a l href={data.url}><img className={`card-img-top`} src={data.icon} alt="Card image cap" /></a>
            <div className={`card-body`}>
              <p className={`card-text`}>{data.msg}</p>
            </div>
          </div>
        );
        return <a className={`nav-item nav-link`} href={data.url}>{data.icon}</a>;
      }

      return (
        <div>
          <div className='call-forimmediate-help'>
            <p><strong>Need help getting food now?</strong></p>
            <div>
              <span>Call Food Connection at 1-800-984-3663</span>
              <span>Monday - Friday, 8:00 am - 5:00 pm.</span>
            </div>
            <div>
              <span>Staff members speak English, Spanish, Vietnamese, Chinese (Cantonese and Mandarin), and Tagalog. Three-way interpretation is available for other languages.</span>
              <span>Call 211 after hours</span>
              <span>24/7, free, confidential, available in multiple languages. Operated by United Way Bay Area.</span>
            </div>
            <div>            
              <span>Email Food Connection at foodconnection@shfb.org.</span>
            </div>
            <div>
              <span>Text "Web Connect" at 408-455-5181</span>
            </div>
          </div>
          <div className={`card-deck`}>
            { results.map((item) => <Item key={item} message={item} />) }
          </div>
           <FoodLocations zipcode={this.props.zipcode}/>
        </div>
      );
    }
}

export default SurveyResults
