describe('NgculatorCtrl', () => {
  let $controller;
  let controller;

  let calcInput, calcHistory;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_$controller_, _calcInput_, _calcHistory_) => {
    $controller = _$controller_;
    controller = $controller('NgculatorCtrl');
    calcInput = _calcInput_;
    calcHistory = _calcHistory_;
  }));

  describe('clear', () => {
    it('clears result', () => {
      spyOn(calcHistory, 'clear');
      spyOn(calcInput, 'clear');
      controller.clear();

      expect(calcHistory.clear).toHaveBeenCalled();
      expect(calcInput.clear).toHaveBeenCalled();
    });
  });
});
