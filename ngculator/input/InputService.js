const ngculator = angular.module("ngculator");
ngculator.service("InputService", function () {
    // Operator was just set, so current number is only for display (preivous
    // operand). Appending starts a new number for the input
    this.displayNumber = false;

    this.clear = () => {
        this.num = 0;
        this.decimalPlace = 0;
        this.displayNumber = false;
    };

    this.clean = () => {
        this.num = 0;
        this.lastNum = null;
        this.decimalPlace = 0;
        this.displayNumber = false;
        this.operation = null;
    };

    /**
     * Starting decimals for the input, so we set it to the *first* decimal
     * place. Once a decimal is added, only the appending of numbers can move
     * the decimal place
     */
    this.addDecimal = () => {
        if (this.displayNumber) {
            this.clear();
        }
        if (0 === this.decimalPlace) {
            this.decimalPlace = 1;
        }
    };

    this.append = num => {
        if (this.displayNumber) {
            this.clear();
        }
        if (this.decimalPlace > 0) {
            this.num = +this.num + num / Math.pow(10, this.decimalPlace);
            this.decimalPlace++;
        }
        else {
            this.num = +this.num * 10 + +num;
        }
    };

    this.toggleSign = () => {
        this.num *= -1;
    };

    this.setOperation = fn => {
        if (this.operation) {
            this.executeOperation();
        }
        this.lastNum = this.num;
        this.displayNumber = true;
        this.operation = fn;
    };

    this.executeOperation = () => {
        if (this.operation) {
            this.num = this.operation(this.lastNum, this.num);
        }
    };

    // Clean on initialize
    this.clean();
});
