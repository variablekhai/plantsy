function validateInfo() {
    let fname = document.querySelector("#first-name");
    let lname = document.querySelector("#last-name");
    let address = document.querySelector("#address-1");
    let town = document.querySelector("#town");
    let state = document.querySelector("#state");
    let zip = document.querySelector("#zip");
    let phone = document.querySelector("#phone");
    let email = document.querySelector("#email");

    if(fname.value == "") {
        document.getElementById("fname-warn").innerHTML = " Please enter your first name!";
        document.getElementById("fname-warn").style.color = "red";
        fname.style.borderColor = "red";
    } else {
        document.getElementById("fname-warn").innerHTML = "";
        fname.style.borderColor = "#21A055";
    }
    if(lname.value == "") {
        document.getElementById("lname-warn").innerHTML = " Please enter your last name!";
        document.getElementById("lname-warn").style.color = "red";
        lname.style.borderColor = "red";
    } else {
        document.getElementById("lname-warn").innerHTML = "";
        lname.style.borderColor = "#21A055";
    }
    if(address.value == "") {
        document.getElementById("address-warn").innerHTML = " Please enter your address!";
        document.getElementById("address-warn").style.color = "red";
        address.style.borderColor = "red";
    } else {
        document.getElementById("address-warn").innerHTML = "";
        address.style.borderColor = "#21A055";
    }
    if(town.value == ""){
        document.getElementById("town-warn").innerHTML = " Please enter your town!";
        document.getElementById("town-warn").style.color = "red";
        town.style.borderColor = "red";
    } else {
        document.getElementById("town-warn").innerHTML = "";
        town.style.borderColor = "#21A055";
    }
    if(state.value == ""){
        document.getElementById("state-warn").innerHTML = " Please enter your state!";
        document.getElementById("state-warn").style.color = "red";
        state.style.borderColor = "red";
    } else {
        document.getElementById("state-warn").innerHTML = "";
        state.style.borderColor = "#21A055";
    }
    if(zip.value == ""){
        document.getElementById("zip-warn").innerHTML = " Please enter your ZIP code!";
        document.getElementById("zip-warn").style.color = "red";
        zip.style.borderColor = "red";
    } else {
        document.getElementById("zip-warn").innerHTML = "";
        zip.style.borderColor = "#21A055";
    }
    if(phone.value == ""){
        document.getElementById("phone-warn").innerHTML = " Please enter your phone number!";
        document.getElementById("phone-warn").style.color = "red";
        phone.style.borderColor = "red";
    }
    if(email.value == "") {
        document.getElementById("email-warn").innerHTML = " Please enter your email!";
        document.getElementById("email-warn").style.color = "red";
        email.style.borderColor = "red";
    }
}

function validateEmail() {

    const email = document.querySelector("#email");
    const email_warn = document.querySelector("#email-warn");
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    email.addEventListener("keydown", e => {
        if(email.value.match(mailFormat)){
            email.style.borderColor = "#21A055";
            email_warn.innerHTML = "";
        } else {
            email.style.borderColor = "red";
            email_warn.innerHTML = " Please enter a valid email address!";
        }
    })
}


function validatePhone() {

    const phone = document.querySelector("#phone");
    const phone_warn = document.querySelector("#phone-warn");

    phone.addEventListener("keydown", e => {
        if(phone.value.length == 9) {
            phone.style.borderColor = "#21A055";
            phone_warn.innerHTML = "";
        } else {
            phone.style.borderColor = "red";
            phone_warn.innerHTML = " A valid phone number is 10 characters long!";
        }
    })
}

function validateValue(clicked_id) {

    const targetID = document.querySelector("#" + clicked_id);
    const warn_text = targetID.previousElementSibling.lastChild;

    targetID.addEventListener("keydown", e => {
        let targetValue = e.target.value;
    
        if(targetValue == ""){
            e.target.style.borderColor  = "red";
        } else {
            e.target.style.borderColor = "#21A055";
            warn_text.innerHTML = "";
        }
    })  
}




