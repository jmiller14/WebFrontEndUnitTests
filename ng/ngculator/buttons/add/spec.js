'use strict';

describe('AddCtrl', () => {
  let $controller;
  let calcInput;
  let controller;
  let history;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_$controller_, _calcInput_, _history_) => {
    $controller = _$controller_;
    controller = $controller('AddCtrl');
    calcInput = _calcInput_;
    history = _history_;
  }));

  it('should properly add the last value in the history with the input', () => {
    for (let n = 0; n < 100; n++) {
      let randX = Math.random();
      let randY = Math.random();

      calcInput.value = randX;
      history.push(randY);
      controller.calc();

      expect(controller.result).toBe(randX + randY);
    }
  });

  it('should update the history', () => {
    spyOn(history, 'push');
    controller.calc();
    expect(history.push).toHaveBeenCalled();
  })
});
