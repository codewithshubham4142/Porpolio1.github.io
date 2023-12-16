function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// Contact form
function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Basic validation
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields');
      return;
  }

  // You can perform additional validation or send the form data to a server here

  // For demonstration purposes, let's just display an alert
  alert('Form submitted!\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);

  // You can reset the form after submission if needed
  document.getElementById('contactForm').reset();
}