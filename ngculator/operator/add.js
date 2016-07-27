/**
 * Add operator
 *
 * Store previous input value to operate on and set next operation to add
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncAdd", {
    template: `<button ng-click=$ctrl.click()>+</button>`,
    controller: "NcAddController",
});

ngculator.controller("NcAddController", function (InputService) {
    this.click = () => InputService.setOperation((left, right) => left + right);
});
