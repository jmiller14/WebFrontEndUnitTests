/**
 * Division operator
 *
 * Store previous input value to operate on and set next operation to divide
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncDivide", {
    template: `<button ng-click=$ctrl.click()>/</button>`,
    controller: "NcDivideController",
});

ngculator.controller("NcDivideController", function (InputService) {
    this.click = () => InputService.setOperation((left, right) => left / right);
});
