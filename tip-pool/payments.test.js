describe("Payment tests (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 200;
    tipAmtInput.value = 20;
  });

  it('should check if payment inputs are properly stored in the allPayments object', function () {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('200');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(10);
  });

  it('should check for empty inputs and not add it to allPayments object', function () {
    billAmtInput = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it('should check if payment inputs are updated onto paymentTable using apendPaymentTable function', function () {
    let currentPayment = createCurPayment();
    allPayments['payment1'] = currentPayment;
    console.log(currentPayment);
    appendPaymentTable(currentPayment);

    let currentPaymentTable = document.querySelector('#paymentTable tbody').childElementCount;
    
    expect(currentPaymentTable).toEqual(1);
    expect(document.querySelector('#payment1').firstChild.innerText).toEqual('$200');
  });

  // it('should check if an additional payment is saved into the summaryTable', function () {
  //   submitPaymentInfo();
  //   billAmtInput.value = 400;
  //   tipAmtInput.value = 35;
  //   let currentPayment = createCurPayment();
  //   allPayments['payment2'] = currentPayment;
  //   console.log(allPayments);
  //   appendPaymentTable(currentPayment);
  //   expect(Object.keys(allPayments).length).toEqual(2);
  //   expect(document.querySelector('#paymentTable tbody').childElementCount).toEqual(1);
  //   expect(document.querySelector('#payment1').firstChild.innerText).toEqual('$200');
  // });

  afterEach(function () {
    // teardown logic
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentId = 0;
    allPayments = {};
    paymentTbody.innerHTML = '';
    serverTbody.innerHTML = '';
  });
});
