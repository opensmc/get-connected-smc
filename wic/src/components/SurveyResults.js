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
            <a l target='_blank' href={data.url}><img className={`card-img-top`} src={data.icon} alt="Card image cap" /></a>
            <div className={`card-body`}>
              <p className={`card-text`}>{data.msg}</p>
              <p className={`card-sub-text`}>{data.sub_msg}</p>
            </div>
          </div>
        );
        return <a className={`nav-item nav-link`} href={data.url}>{data.icon}</a>;
      }

      return (
        <div>
          <div className='call-forimmediate-help'>
            <p><strong>Need help getting food now?</strong></p>
            <br />
            <p>Contact Second Harvest Food Bank:</p>
            <ul>
              <li>Visit their  <a href="SHFB.org/getfood">website.</a></li>
              <li>Call <a href="+1-800-984-3663">1-800-984-3663</a></li>
              <li>Send them an <a href="mailto:food@shfb.org">email</a>.</li>
              <li>Text "GETFOOD" to <a href="+1-408-455-5187">1-408-455-5181</a></li>
            </ul>
            <br />
            <p>Staff members speak English, Spanish, Vietnamese, Chinese (Cantonese and Mandarin) and Tagalog. Three-way interpretation is available for other languages.</p>
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
