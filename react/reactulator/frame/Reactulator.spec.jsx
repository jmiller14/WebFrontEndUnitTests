jest.unmock('./Reactulator');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Reactulator from './Reactulator';

describe('Reactulator', () => {
  it('adds two numbers', () => {
    const reactulator = TestUtils.renderIntoDocument(<Reactulator />);
    const aInputNode = TestUtils.findRenderedDOMComponentWithClass(reactulator, 'a');
    const bInputNode = TestUtils.findRenderedDOMComponentWithClass(reactulator, 'b');
    const addButtonNode = TestUtils.findRenderedDOMComponentWithClass(reactulator, 'add');

    TestUtils.Simulate.change(aInputNode, {target: {value: 5}});
    TestUtils.Simulate.change(bInputNode, {target: {value: 10}});
    TestUtils.Simulate.click(addButtonNode);

    expect(reactulator.state.displayValue).toEqual(15);
  });

  it('clears the input', () => {
    const reactulator = TestUtils.renderIntoDocument(<Reactulator />);
    const aInputNode = TestUtils.findRenderedDOMComponentWithClass(reactulator, 'a');
    const bInputNode = TestUtils.findRenderedDOMComponentWithClass(reactulator, 'b');
    const addButtonNode = TestUtils.findRenderedDOMComponentWithClass(reactulator, 'add');
    const clearButtonNode = TestUtils.findRenderedDOMComponentWithClass(reactulator, 'clear');

    TestUtils.Simulate.change(aInputNode, {target: {value: 5}});
    TestUtils.Simulate.change(bInputNode, {target: {value: 10}});
    TestUtils.Simulate.click(addButtonNode);
    TestUtils.Simulate.click(clearButtonNode);

    expect(reactulator.state.displayValue).toEqual('');
  });
});
