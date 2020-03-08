/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
/**
  * Renders the clock Items.
  * @return {string} The component
**/
class ClockItemComponent extends React.Component {
/**
  * Renders the Proptypes.
  * @return {object} The proptypes
**/
  static get propTypes() {
    return {
      time: PropTypes.array,
      value: PropTypes.string,
      title: PropTypes.string
    };
  }
  /**
    * Renders the clock Items.
    * @return {string} The component
  **/
  render() {
    const {time, value, title} = this.props;
    const classname = time.includes(value) ? 'row-item active' : 'row-item';
    return (
      <React.Fragment>
        <span className={classname}>{title.toUpperCase()}</span>
      </React.Fragment>
    );
  }
}

export default ClockItemComponent;
