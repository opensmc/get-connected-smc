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
              <p className={`card-text`}>{data.sub_msg}</p>
            </div>
          </div>
        );
        return <a className={`nav-item nav-link`} href={data.url}>{data.icon}</a>;
      }

      return (
        <div>
          <div className={`card-deck`}>
            { results.map((item) => <Item key={item} message={item} />) }
          </div>
           <FoodLocations zipcode={this.props.zipcode}/>
        </div>
      );
    }
}

export default SurveyResults
