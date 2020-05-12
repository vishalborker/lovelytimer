/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import React from 'react';
import {hrMappings, minMappings} from './../constants';
import {getCurrentMinutesHrs} from './../helpers/util';
import ClockItemComponent from './ClockItemComponent';

/**
  * Renders the clock Items.
  * @return {string} Builds the Clock
**/
class ClockComponent extends React.Component {
  /**
    * Renders the clock Items.
    * @param {object} props The props
  **/
  constructor(props) {
    super(props);
    this.state = {
      time: []
    };

    setInterval(() => {
      this.setState({time: []});
      this.setClockTime();
    }, 10000);
  }

  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    this.setClockTime();
  }
  /**
    * Sets the clocks time
  **/
  setClockTime() {
    const [min, hr] = getCurrentMinutesHrs();
    const finalTime = [];
    for (const elem of minMappings[min]) {
      finalTime.push(elem);
    }
    finalTime.push(hrMappings[hr]);
    this.setState({time: finalTime});
  }
  /**
    * renders the component
    * @return {object} the component
  */
  render() {
    const time = this.state.time;
    console.log(time);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <span className="row-item it active">IT</span>
            <span className="row-item is active">IS</span>
            <ClockItemComponent value='half' time={time} title='HALF'/>
            <ClockItemComponent value='ten' time={time} title='TEN'/>
          </div>

          <div className="row">
            <ClockItemComponent value='quarter' time={time} title='QUARTER'/>
            <ClockItemComponent value='twenty' time={time} title='TWENTY'/>
          </div>
          <div className="row">
            <ClockItemComponent value='five' time={time} title='FIVE'/>
            <ClockItemComponent value='minutes' time={time} title='MINUTES'/>
            <ClockItemComponent value='to' time={time} title='TO'/>
          </div>

          <div className="row">
            <ClockItemComponent value='past' time={time} title='PAST'/>
            <ClockItemComponent value='two' time={time} title='TWO'/>
            <ClockItemComponent value='three' time={time} title='THREE'/>
          </div>

          <div className="row">
            <ClockItemComponent value='one' time={time} title='ONE'/>
            <ClockItemComponent value='four' time={time} title='FOUR'/>
            <ClockItemComponent value='fivehr' time={time} title='FIVE'/>
          </div>

          <div className="row">
            <ClockItemComponent value='six' time={time} title='SIX'/>
            <ClockItemComponent value='seven' time={time} title='SEVEN'/>
            <ClockItemComponent value='eight' time={time} title='EIGHT'/>
          </div>

          <div className="row">
            <ClockItemComponent value='nine' time={time} title='NINE'/>
            <ClockItemComponent value='tenhr' time={time} title='TEN'/>
            <ClockItemComponent value='eleven' time={time} title='ELEVEN'/>
          </div>

          <div className="row">
            <ClockItemComponent value='twelve' time={time} title='TWELVE'/>
            <ClockItemComponent value='oclock' time={time} title='O`CLOCK'/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ClockComponent;
