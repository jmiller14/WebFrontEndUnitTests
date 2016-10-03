'use strict';

describe('SpookyCtrl', () => {
  let $controller;
  let controller;
  let halloweenFactory;

  beforeEach(angular.mock.module('ngculator'));

  beforeEach(inject((_$controller_, _halloweenFactory_) => {
    $controller = _$controller_;
    controller = $controller('SpookyCtrl');
    halloweenFactory = _halloweenFactory_;
  }));

  describe('toggle()', () => {
    it('should set halloweenFactor\'s isHalloween to true', () => {
      controller.toggle();

      expect(halloweenFactory.isHalloween).toBe(true);
    });
  });
});
