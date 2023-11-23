document.addEventListener('DOMContentLoaded', function () {
  var reviewForm = document.getElementById('reviewForm');
  var emailInput = document.getElementById('emailInput');
  var commentInput = document.getElementById('commentInput');
  var reviewDisplay = document.getElementById('reviewDisplay');
  var submitButton = document.getElementById('myBtn');

  reviewForm.addEventListener('submit', function (event) {

    event.preventDefault();

    clearErrorMessages();

    if (!isValidEmail(emailInput.value)) {
      displayErrorMessage(emailInput, 'Пожалуйста, введите действительный адрес электронной почты.');
      return;
    }

    if (commentInput.value.trim() === '') {
      displayErrorMessage(commentInput, 'Пожалуйста, введите комментарий.');
      return;
    }

    displaySuccessMessage();
    reviewForm.reset();
  });

  function isValidEmail(email) {
    // Use a simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function displayErrorMessage(element, message) {
    var errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.innerHTML = message;
    element.parentNode.appendChild(errorDiv);
  }

  function clearErrorMessages() {
    var errorMessages = document.querySelectorAll('.alert-danger');
    errorMessages.forEach(function (errorMessage) {
      errorMessage.parentNode.removeChild(errorMessage);
    });
  }

  function displaySuccessMessage() {
    var successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success';
    successDiv.innerHTML = 'Ваш отзыв успешно отправлен.';
    reviewDisplay.appendChild(successDiv);
    alert('Ваш отзыв успешно отправлен.')
    setTimeout(function () {
      successDiv.style.display = 'none';
    }, 5000);
  }
});




document.querySelector('#push').onclick = function(){
  if(document.querySelector('#newtask input').value.length === 0){
    alert("Kindly Enter Task Name!!!!")
  }

  else{
    document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
      current_tasks[i].onclick = function(){
        this.parentNode.remove();
      }
    }
  }
}
