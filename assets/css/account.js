document.addEventListener('DOMContentLoaded', function () {
  showStep(1);
});

function nextStep(currentStep) {
  showStep(currentStep + 1);
}

function prevStep(currentStep) {
  showStep(currentStep - 1);
}

function showStep(step) {
  var steps = document.querySelectorAll('.form-step');
  steps.forEach(function (stepElement) {
    stepElement.style.display = 'none';
  });

  var currentStep = document.querySelector(`[data-step="${step}"]`);
  if (currentStep) {
    currentStep.style.display = 'block';
  }
}

function register() {
  // Basic password validation
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    document.getElementById('registrationUnSuccessModal').style.display = 'block';
  } else {
    // Show registration success modal
    document.getElementById('registrationSuccessModal').style.display = 'block';
  }
}

function closeModal() {
  document.getElementById('registrationSuccessModal').style.display = 'none';
}
function closeModal1() {
  document.getElementById('registrationUnSuccessModal').style.display = 'none';
}

function redirectToMain() {
  window.location.href = '../../index.html'; // Replace 'main.html' with your actual main page URL
}
