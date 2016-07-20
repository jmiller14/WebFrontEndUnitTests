describe("ncNum", () => {
    let InputService;
    let $compile;
    let $rootScope;

    beforeEach(inject((_InputService_, _$compile_, _$rootScope_) => {
        InputService = _InputService_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    describe("click", () => {
        it("appends number value on click", () => {
            InputService.clear();
            const $scope = $rootScope.$new();
            const element1 = angular.element("<nc-num num=1></nc-num>");
            const element2 = angular.element("<nc-num num=2></nc-num>");
            const element3 = angular.element("<nc-num num=3></nc-num>");
            $compile(element1)($scope);
            $compile(element2)($scope);
            $compile(element3)($scope);
            const controller1 = element1.controller("ncNum");
            const controller2 = element2.controller("ncNum");
            const controller3 = element3.controller("ncNum");

            controller1.click();
            controller2.click();
            controller3.click();

            expect(InputService.num).to.equal(123);
        });
    });
});
