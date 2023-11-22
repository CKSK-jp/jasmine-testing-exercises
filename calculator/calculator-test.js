const testValues1 = {
  amount: 10000000,
  years: 12,
  rate: 7,
};
const testValues2 = {
  amount: 500000,
  years: 30,
  rate: 5,
};
const testValues3 = {
  amount: 1,
  years: 1,
  rate: 1,
};
const testValues4 = {
  amount: '',
  years: 1,
  rate: 1,
};
const testValues5 = {
  amount: 'a',
  years: 1,
  rate: 1,
};
const testValues6 = {
  amount: -1,
  years: 1,
  rate: 1,
};

describe (
  'correctly calculate monthly loan rates', () => {
    it('should calculate the monthly rate of testValues1', () => {
      expect(calculateMonthlyPayment(testValues1)).toEqual('102838.11');
    });

    it('should calculate the monthly rate of testValues2', () => {
      expect(calculateMonthlyPayment(testValues2)).toEqual('2684.11');
    });

    it('should calculate the monthly rate of testValues3', () => {
      expect(calculateMonthlyPayment(testValues3)).toEqual('0.08');
    });
  }
)
