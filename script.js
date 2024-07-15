document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("regform");
  if (form) {
    form.addEventListener("submit", function(event) {
      // Prevent form submission if the form is invalid
      if (!form.checkValidity()) {
        event.preventDefault(); // This will show the default validation messages
      } else {
        event.preventDefault(); // Prevent default form submission
        confirmregistration(); // Handle form data storage and redirection
      }
    });

    function confirmregistration() {
      // Collect form data and store it in localStorage
      const formData = {
        firstname: document.getElementById("fname").value,
        middlename: document.getElementById("mname").value,
        lastname: document.getElementById("lname").value,
        contactno: document.getElementById("cno").value,
        email: document.getElementById("mail").value,
        address: document.getElementById("address").value,
        education: document.getElementById("edu").value,
        college: document.getElementById("clg").value,
      };

      localStorage.setItem('formData', JSON.stringify(formData));

      // Redirect to confirmation.html
      window.location.href = 'confirmation.html';
    }
  }

  // This part handles displaying the stored data in confirmation.html
  if (document.getElementById("firname")) {
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
      document.getElementById('firname').textContent = formData.firstname;
      document.getElementById('midname').textContent = formData.middlename;
      document.getElementById('lasname').textContent = formData.lastname;
      document.getElementById('conno').textContent = formData.contactno;
      document.getElementById('email').textContent = formData.email;
      document.getElementById('addr').textContent = formData.address;
      document.getElementById('eduqua').textContent = formData.education;
      document.getElementById('college').textContent = formData.college;
    }
  }
});
