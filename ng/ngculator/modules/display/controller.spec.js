'use strict';

describe('DisplayCtrl', () => {
  let $controller;
  let controller;
  let history;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_$controller_, _history_) => {
    $controller = _$controller_;
    controller = $controller('DisplayCtrl');
    history = _history_;
  }));

  it('should have a local reference to history', () => {
    expect(controller.history).toEqual(history);
  });
});
