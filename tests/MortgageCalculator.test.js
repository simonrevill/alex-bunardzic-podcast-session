import { MortgageCalculator } from '../src/MortgageCalculator';

describe('form tests', () => {
    it('should display a select dropdown box with mortgage variable and fixed rate options', () => {
        // Arrange
        const mortgageCalculator = new MortgageCalculator();

        // Act
        mortgageCalculator.selectMortgageType('variable');
        
        // Assert
        expect(mortgageCalculator.printReport()).toBe('type: variable');
    });

    it('should store downpayment as 20% if amount is 1,000,000 or greater', () => {
        const mortgageCalculator = new MortgageCalculator(1000000);

        expect(mortgageCalculator.downpaymentPercentage).toBe(0.2);
    });
    
    it('should store downpayment as 20% if amount is 1,000,000 or greater', () => {
        const mortgageCalculator = new MortgageCalculator(1000001);

        expect(mortgageCalculator.downpaymentPercentage).toBe(0.2);
    });
    
    it('should store downpayment as 10% if amount is less than 1,000,000', () => {
        const mortgageCalculator = new MortgageCalculator(999999);

        expect(mortgageCalculator.downpaymentPercentage).toBe(0.1);
    });

    it('should return 3% interest rate when amount is 1000000 and the type is fixed', () => {
        
    });
});