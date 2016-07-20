const ngculator = angular.module("ngculator");
ngculator.component("ncInput", {
    template: `<input ng-model=$ctrl.calculatorInput.num>`,
    controller: "NcInputController",
});

ngculator.controller("NcInputController", function (InputService) {
    this.calculatorInput = InputService;
    this.lastOperand = null;
});
