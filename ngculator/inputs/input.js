const ngculator = angular.module("ngculator");
ngculator.component("ncInput", {
    template: `<input ng-model=$ctrl.calculatorInput>`,
    controller: "NcInputController",
});

ngculator.controller("NcInputController", function () {
    this.calculatorInput = 0;
    this.lastOperand = null;
});
