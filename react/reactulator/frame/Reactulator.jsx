'use strict';

import React from 'react';

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
        <br />
        <button className="clear" onClick={this.clear}>Clear</button>
      </div>
    );
  },
});

export default Reactulator;
