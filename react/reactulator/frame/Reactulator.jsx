'use strict';

import React from 'react';

const MAX_DECIMAL_PLACES = 4;

const Reactulator = React.createClass({
  getInitialState() {
    return {
      displayValue: '',
      a: '',
      b: '',
    };
  },

  add() {
    this.setState({displayValue: +this.state.a + +this.state.b});
  },

  multiply() {
    let result = this.state.a * this.state.b;
    let decimalPlaces = result.toString().split(".")[1];

    // Only display a max of 4 decimal places and ensure the displayValue
    // is always set to a number
    if (decimalPlaces && decimalPlaces.length > MAX_DECIMAL_PLACES) {
      result = parseFloat(result.toFixed(MAX_DECIMAL_PLACES));
    }
    this.setState({displayValue: result});
  },

  clear() {
    this.setState({displayValue: ''});
  },

  onChange(field) {
    return event => this.setState({[field]: event.target.value});
  },

  render() {
    return (
      <div>
        <a>foo</a>
        <input className="display-value" ref="value" value={this.state.displayValue} readOnly={true} />
        <br />

        <input className="a" type="number" onChange={this.onChange('a')} />
        <input className="b" type="number" onChange={this.onChange('b')} />

        <button className="add" onClick={this.add}>Add</button>
        <button className="multiply" onClick={this.multiply}>*</button>
        <br />
        <button className="clear" onClick={this.clear}>Clear</button>
      </div>
    );
  },
});

export default Reactulator;
