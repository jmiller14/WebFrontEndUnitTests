describe("ncMultiply", () => {
    let InputService;
    let $controller;

    beforeEach(inject((_InputService_, _$controller_) => {
        InputService = _InputService_;
        $controller = _$controller_;
    }));

    describe("click", () => {
        it("appends sets multiply operator on click", () => {
            InputService.clear();
            const NcMultiplyController = $controller("NcMultiplyController");

            InputService.append(1);
            NcMultiplyController.click();

            expect(InputService.lastNum).to.equal(1);
            expect(InputService.operation).to.exist;
        });

        it("adds two operands on click", () => {
            InputService.clear();
            const NcMultiplyController = $controller("NcMultiplyController");

            InputService.append(8);
            NcMultiplyController.click();
            InputService.append(9);
            InputService.executeOperation();

            expect(InputService.num).to.equal(72);
        });
    });
});

