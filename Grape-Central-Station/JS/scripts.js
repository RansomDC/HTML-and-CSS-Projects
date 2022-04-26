function validateField(fieldValue) {
    let formInput = document.forms['rsvp-form'][fieldValue].value;
    if (formInput == "") {
        
        return false;
    }
}

function validateForm() {
    if(!validateField("fname") || !validateField("lname") || !validateField("email") || !validateField("phone-number")) {
        alert("All fields must be filled out!")
        return false;
    }
}

