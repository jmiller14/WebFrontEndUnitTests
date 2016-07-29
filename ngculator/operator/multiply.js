/**
 * Multipy operator
 *
 * Store previous input value to operate on and set next operation to multiply
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncMultiply", {
    template: `<button class=operator ng-click=$ctrl.click()><span class=button-content>&times;</span></button>`,
    controller: "NcMultiplyController",
});

ngculator.controller("NcMultiplyController", function (InputService) {
    this.click = () => InputService.setOperation((left, right) => left * right);
});
