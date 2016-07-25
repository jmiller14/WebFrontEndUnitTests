describe("ncSign", () => {
    let InputService;
    let $compile;
    let $rootScope;

    beforeEach(inject((_InputService_, _$compile_, _$rootScope_) => {
        InputService = _InputService_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    describe("click", () => {
        it("adds decimal to non-decimal number", () => {
            InputService.clear();
            InputService.num = 1234;
            const $scope = $rootScope.$new();
            const element = angular.element("<nc-decimal></nc-decimal>");
            $compile(element)($scope);
            const controller = element.controller("ncDecimal");

            controller.click();
            InputService.append(1);

            expect(InputService.num).to.equal(1234.1);
        });

        it("does nothing to decimal number", () => {
            InputService.clear();
            InputService.num = 1234.2;
            const $scope = $rootScope.$new();
            const element = angular.element("<nc-decimal></nc-decimal>");
            $compile(element)($scope);
            const controller = element.controller("ncDecimal");

            controller.click();
            InputService.append(2);

            expect(InputService.num).to.equal(1234.22);
        });
    });
});


