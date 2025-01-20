// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Retrieve form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const goal = document.getElementById("goal").value;
      const skinType = document.getElementById("skin-type").value;
      const hairType = document.getElementById("hair-type").value;
      const skinConcerns = document.getElementById("skin-concerns").value;
  
      // Create an object to store the data
      const formData = {
        name,
        email,
        goal,
        skinType,
        hairType,
        skinConcerns,
      };
  
      // Log the data to the console (for testing)
      console.log("Form Data:", formData);
  
      // You can send this data to a server or use it as needed
      // For example, sending it via a POST request:
      // fetch('/your-server-endpoint', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      // })
      // .catch(error => {
      //   console.error('Error:', error);
      // });

      const isValid = formData.name && formData.email && formData.goal && formData.skinType && formData.skinConcerns;

      if (isValid) {
          // Example: send the form data (with emailjs, or another service)
          emailjs.send('service_mzmnucd', 'template_qfguwc4', formData)
              .then(response => {
                  console.log('SUCCESS!', response.status, response.text);
                  window.location.href = "thanks_regist.html";
              })
              .catch(error => {
                  console.log('FAILED...', error);
                  alert("There was an error with your submission. Please try again.");
              });
      } else {
          // Handle invalid form data (optional)
          alert("Please fill in all required fields.");
      }
    });
  });
  