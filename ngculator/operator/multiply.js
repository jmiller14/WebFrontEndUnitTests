/**
 * Multipy operator
 *
 * Store previous input value to operate on and set next operation to multiply
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncMultiply", {
    template: `<button ng-click=$ctrl.click()>&times;</button>`,
    controller: "NcMultiplyController",
});

ngculator.controller("NcMultiplyController", function (InputService) {
    this.click = () => InputService.setOperation((left, right) => left * right);
});
