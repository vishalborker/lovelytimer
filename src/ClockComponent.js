import React from 'react';

const hrMappings = {
  0: "twelve", 1: "one", 2: "two", 3: "three", 4: "four", 
  5: "fivehr", 6: "six", 7: "seven", 8: "eight", 9: "nine",
  10: "tenhr", 11: "eleven", 12: "twelve"
}

const minMappings = {
  5: ["five", "minutes", "past"], 10:["ten", "minutes", "past"], 15: ["quarter", "past"], 20: ["twenty", "minutes", "past"], 25: ["twenty", "five", "minutes", "past"],
  30: ["half", "past"], 35: ["twenty", "five", "minutes", "to"], 40: ["twenty", "minutes", "to"], 45: ["quarter", "to"],
  50: ["ten", "minutes", "to"], 55: ["five", "minutes", "to"], 0: ["oclock"]
}

class ClockComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: []
    }
    
    setInterval(() => {
      this.setState({time: []});
      this.getMappedTime();
    }, 10000);
  }
  
  componentDidMount() {
     this.getMappedTime();
  }
  
  
  
  getMappedTime() {
    const t = new Date();
    let hr = t.getHours();
    let min = t.getMinutes();
    if (hr > 12) {
      hr = hr - 12;
    }
    console.log('hr is', hr);
    if (min > 30) {
      hr = hr === 11 ? 0 : hr + 1;
    }
    
    const rem = min % 5;
    if ( rem > 0) { 
      min = min - rem;
    }
    let finalTime = [];
    for(let i = 0; i < minMappings[min].length; i++) {
      finalTime.push(minMappings[min][i]);
    }

    finalTime.push(hrMappings[hr]);
    this.setState({time: finalTime});
  }
  
  render() {
    const time = this.state.time;
    console.log('time is: ',time);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row"> 
            <span className="row-item it active">IT</span>
            <span className="row-item is active">IS</span>
            <span className={time.indexOf('half') > -1 ? "row-item active" : "row-item"}>HALF</span>
            <span className={time.indexOf('ten') > -1 ? "row-item active" : "row-item"}>TEN</span>
          </div>

          <div className="row">
            <span className={time.indexOf('quarter') > -1 ? "row-item active" : "row-item"}>QUARTER</span>
            <span className={time.indexOf('twenty') > -1 ? "row-item active" : "row-item"}>TWENTY</span>
          </div>
          
          <div className="row">
            <span className={time.indexOf('five') > -1 ? "row-item active" : "row-item"}>FIVE</span>
            <span className={time.indexOf('minutes') > -1 ? "row-item active" : "row-item"}>MINUTES</span>
            <span className={time.indexOf('to') > -1 ? "row-item active" : "row-item"}>TO</span>
          </div>
          
          <div className="row">
            <span className={time.indexOf('past') > -1 ? "row-item active" : "row-item"}>PAST</span>
            <span className={time.indexOf('two') > -1 ? "row-item active" : "row-item"}>TWO</span>
            <span className={time.indexOf('three') > -1 ? "row-item active" : "row-item"}>THREE</span>
          </div>
          
          <div className="row">
            <span className={time.indexOf('one') > -1 ? "row-item active" : "row-item"}>ONE</span>
            <span className={time.indexOf('four') > -1 ? "row-item active" : "row-item"}>FOUR</span>
            <span className={time.indexOf('fivehr') > -1 ? "row-item active" : "row-item"}>FIVE</span>
          </div>
          
          <div className="row">
            <span className={time.indexOf('six') > -1 ? "row-item active" : "row-item"}>SIX</span>
            <span className={time.indexOf('seven') > -1 ? "row-item active" : "row-item"}>SEVEN</span>
            <span className={time.indexOf('eight') > -1 ? "row-item active" : "row-item"}>EIGHT</span>
          </div>
          
          <div className="row">
            <span className={time.indexOf('nine') > -1 ? "row-item active" : "row-item"}>NINE</span>
            <span className={time.indexOf('tenhr') > -1 ? "row-item active" : "row-item"}>TEN</span>
            <span className={time.indexOf('eleven') > -1 ? "row-item active" : "row-item"}>ELEVEN</span>
          </div>
          
          <div className="row">
            <span className={time.indexOf('twelve') > -1 ? "row-item active" : "row-item"}>TWELVE</span>
            <span className={time.indexOf('oclock') > -1 ? "row-item active" : "row-item"}>O'CLOCK</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ClockComponent;