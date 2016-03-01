'use strict';

import React from 'react';

const Reactulator = React.createClass({
  componentDidMount() {
    console.log('Reactulator is active!');
  },
  render() {
    return <div>Something will go here</div>;
  },
});

export default Reactulator;
