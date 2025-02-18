document.addEventListener("DOMContentLoaded", function () {
    const enrollBtn = document.querySelector(".enroll_btn");

    if (enrollBtn) {
        enrollBtn.addEventListener("click", function () {
            window.location.assign("enroll_form.html"); // Alternative to window.location.href
        });
    } else {
        console.error("Enroll button not found!");
    }
});
