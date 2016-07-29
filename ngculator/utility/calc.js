/**
 * Calc (=) utility
 *
 * Execute last stored operation
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncCalc", {
    template: `<button class=operator ng-click=$ctrl.click()><span class=button-content>=</span></button>`,
    controller: "NcCalcController",
});

ngculator.controller("NcCalcController", function (InputService) {
    this.click = () => InputService.executeOperation();
});
