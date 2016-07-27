describe("ncDivide", () => {
    let InputService;
    let $controller;

    beforeEach(inject((_InputService_, _$controller_) => {
        InputService = _InputService_;
        $controller = _$controller_;
    }));

    describe("click", () => {
        it("appends sets subtract operator on click", () => {
            InputService.clear();
            const NcDivideController = $controller("NcDivideController");

            InputService.append(1);
            NcDivideController.click();

            expect(InputService.lastNum).to.equal(1);
            expect(InputService.operation).to.exist;
        });

        it("subtracts two operands on click", () => {
            InputService.clear();
            const NcDivideController = $controller("NcDivideController");

            InputService.append(24);
            NcDivideController.click();
            InputService.append(3);
            InputService.executeOperation();

            expect(InputService.num).to.equal(8);
        });
    });
});

