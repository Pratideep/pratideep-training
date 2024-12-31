// Name
const name = document.getElementById("name");

// Phone Number
const phone = document.getElementById("phone");

// Current Weight
const weight = document.getElementById("weight");

// Height
const height = document.getElementById("height");

// Age
const age = document.getElementById("age");

// Gender (Capture dynamically after form submission)
const gender = () => document.querySelector('input[name="gender"]:checked');

// Fitness Goals (Capture dynamically after form submission)
const fitnessGoals = () => document.querySelector('input[name="fitness-goals"]:checked');

// Workout Frequency (Capture dynamically after form submission)
const workoutFrequency = () => document.querySelector('input[name="workout-frequency"]:checked');

// Sleep Hours (Capture dynamically after form submission)
const sleep = () => document.querySelector('input[name="sleep"]:checked');

// Medical Conditions (Capture dynamically after form submission)
const medical = () => document.querySelector('input[name="medical"]:checked');

// Injuries or Surgeries (Capture dynamically after form submission)
const injury = () => document.querySelector('input[name="injury"]:checked');

// Email Address
const email = document.getElementById("email");

// Submit Button
const submitButton = document.querySelector("button[type='submit']");

// Form Submission Handler
submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission for demonstration
    
    // Capture the selected radio buttons
    const selectedGender = gender();
    const selectedFitnessGoals = fitnessGoals();
    const selectedWorkoutFrequency = workoutFrequency();
    const selectedSleep = sleep();
    const selectedMedical = medical();
    const selectedInjury = injury();
    
    // Gather form data
    const formData = {
        name: name.value,
        phone: phone.value,
        weight: weight.value,
        height: height.value,
        age: age.value,
        gender: selectedGender ? selectedGender.value : null,
        fitnessGoals: selectedFitnessGoals ? selectedFitnessGoals.value : null,
        workoutFrequency: selectedWorkoutFrequency ? selectedWorkoutFrequency.value : null,
        sleep: selectedSleep ? selectedSleep.value : null,
        medical: selectedMedical ? selectedMedical.value : null,
        injury: selectedInjury ? selectedInjury.value : null,
        email: email.value
    };

    console.log(formData);

    // Validate form data (optional)
    const isValid = formData.name && formData.phone && formData.weight && formData.height && formData.email;

    if (isValid) {
        // Example: send the form data (with emailjs, or another service)
        emailjs.send('service_5xqfini', 'template_rrsi52b', formData)
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
