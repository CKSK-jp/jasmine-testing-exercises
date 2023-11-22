window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");

  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const amountInput = Number(document.getElementById('loan-amount').value);
      const yearsInput = Number(document.getElementById('loan-years').value);
      const rateInput = Number(document.getElementById('loan-rate').value);

      // check for invalid inputs
      if (amountInput == '' || yearsInput === '' || rateInput === '') {
        alert('Please fill out all fields');
      } else if (amountInput < 0 || yearsInput < 0 || rateInput < 0) {
        alert('Value cannot be negative');
      } else if (!Number.isInteger(amountInput) || !Number.isInteger(yearsInput) || !Number.isInteger(rateInput)) {
        alert('Value must be an integer');
      } else {
        update();
      }
    });
  }
});

// function stores UI values into an object
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const initValues = {
    amount: 500000,
    years: 30,
    rate: 5,
  };

  document.getElementById('loan-amount').value = initValues.amount;
  document.getElementById('loan-years').value = initValues.years;
  document.getElementById('loan-rate').value = initValues.rate;

  calculateMonthlyPayment(initValues);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  console.log('updating');
  const initValues = {
    amount: document.getElementById('loan-amount').value,
    years: document.getElementById('loan-years').value,
    rate: document.getElementById('loan-rate').value,
  };
  calculateMonthlyPayment(initValues);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  console.log('calculating');
  periodInMonths = values.years * 12; // convert to months
  monthlyRate = (values.rate / 100) / 12; // periodic interest rate in months

  let monthlyPayment = (values.amount * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -(periodInMonths)));

  monthlyPayment = (Math.round(monthlyPayment * 100) / 100).toString();

  // return monthlyPayment;

  updateMonthly(monthlyPayment);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  console.log('printing');
  monthPaymentContainer = document.getElementById('monthly-payment');
  monthPaymentContainer.innerText = `$${monthly}`;
}
