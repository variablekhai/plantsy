function notAFunction() {
    alert("Function has not been implemented yet, sorry! :D");
}

function validateEmail() {
    let form = document.getElementById("newsletter-form");
    let email = document.getElementById("email").value;
    let text = document.getElementById("validation");
    let border = document.getElementById("email");
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.match(mailFormat)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your email address is valid";
        text.style.color = "#20AC59";
        border.style.borderColor = "#20AC59";
        return true;
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please enter a valid email address";
        text.style.color = "red";
        border.style.borderColor = "red";
        return false;
    }
}

function confirmSubscribe() {
    let email = document.getElementById("email").value;
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.match(mailFormat)){
        alert("Succesfully subscribed to the newsletter!");
    } else {
        alert("Please recheck/enter a valid email address!");
        email = "";
    }
}