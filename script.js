$(document).ready(function () {
  $("#studentForm").on("submit", function (event) {
    let isValid = true;
    let errorMessage = "";

    const name = $("#name").val();
    const email = $("#email").val();

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namePattern.test(name)) {
      errorMessage += "Name should only contain letters and spaces.<br>";
      isValid = false;
    }

    if (!emailPattern.test(email)) {
      errorMessage += "Please enter a valid email address.<br>";
      isValid = false;
    }

    if (!isValid) {
      $("#error-message").html(errorMessage);
      event.preventDefault(); // Prevent form submission
    } else {
      $("#error-message").html("");
    }
  });
});
