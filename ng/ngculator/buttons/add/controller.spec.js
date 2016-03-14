'use strict';

describe('AddCtrl', () => {
  let $controller;
  let calcInput;
  let controller;
  let calcHistory;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_$controller_, _calcInput_, _calcHistory_) => {
    $controller = _$controller_;
    controller = $controller('AddCtrl');
    calcInput = _calcInput_;
    calcHistory = _calcHistory_;
  }));

  it('should properly add the last value in the calcHistory with the input', () => {
    for (let n = 0; n < 100; n++) {
      let randX = Math.random();
      let randY = Math.random();

      calcInput.value = randX;
      calcHistory.push(randY);
      controller.calc();

      expect(controller.result).toBe(randX + randY);
    }
  });

  it('should update the calcHistory', () => {
    spyOn(calcHistory, 'push');
    controller.calc();
    expect(calcHistory.push).toHaveBeenCalled();
  })
});
