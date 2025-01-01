const enrollBtns = document.querySelectorAll(".enroll_btn");

function enrollFunc(){
    window.location.href = "enroll_form.html";
}

enrollBtns.forEach((i)=>{
    i.addEventListener('click',enrollFunc);
});