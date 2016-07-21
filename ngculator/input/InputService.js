const ngculator = angular.module("ngculator");
ngculator.service("InputService", function () {
    this.num = 0;
    this.decimalPlace = 0;

    this.clear = () => {
        this.num = 0;
        this.decimalPlace = 0;
    };

    /**
     * Starting decimals for the input, so we set it to the *first* decimal
     * place. Once a decimal is added, only the appending of numbers can move
     * the decimal place
     */
    this.addDecimal = () => {
        if (0 === this.decimalPlace) {
            this.decimalPlace = 1;
        }
    };

    this.append = num => {
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
});
