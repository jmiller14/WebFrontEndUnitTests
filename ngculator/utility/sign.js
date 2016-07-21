/**
 * Input clear button
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncSign", {
    template: `<button ng-click=$ctrl.click()>+/-</button>`,
    controller: "NcSignController",
});

ngculator.controller("NcSignController", function (InputService) {
    this.click = () => InputService.toggleSign();
});
