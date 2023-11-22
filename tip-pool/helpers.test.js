describe("Payment tests (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 200;
    tipAmtInput.value = 20;

  });

  it('should check if payment inputs are valid and render onto paymentTable', function () {
    submitPaymentInfo();
    console.log(allPayments);
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment' + paymentId].tipPercent).toEqual(10);
  });

  afterEach(function () {
    // teardown logic
    billAmtInput = 0;
    tipAmtInput = 0;
  });
});
