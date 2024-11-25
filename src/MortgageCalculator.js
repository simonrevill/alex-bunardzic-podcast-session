export class MortgageCalculator {
    type;

    downpaymentPercentage = 0.2;

    amountToBorrow;

    constructor(amountToBorrow) {
        this.amountToBorrow = amountToBorrow;

        this.downpaymentPercentage = amountToBorrow >= 1000000 ? 0.2 : 0.1
    }

    selectMortgageType(type) {
        this.type = type;
    }

    addBorrowingAmount() {}

    printReport() {
        return `type: ${this.type}`;
    }
}