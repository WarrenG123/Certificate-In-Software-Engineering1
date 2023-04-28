const validate = (event) => {
    let error = 0;
    //input
    let first = document.getElementById("fName");
    let last = document.getElementById("lName");
    let birth = document.getElementById("dob");
    let gender = document.getElementById("gender");
    let country = document.getElementById("country");
    let district = document.getElementById("district");
    let town = document.getElementById("town");
    let zip = document.getElementById("zip");
    let phone1 = document.getElementById("phone1");
    let phone2 = document.getElementById("phone2");
    
    //error
    let firstErr = document.getElementById("fNameErr")
    let lastErr = document.getElementById("lNameErr");
    let birthError = document.getElementById("dobErr");
    let genderError = document.getElementById("genErr");
    let countError = document.getElementById("countErr");
    let distError = document.getElementById("distrErr");
    let townError = document.getElementById("townErr");
    let zipError = document.getElementById("zipErr");
    let ph1Error = document.getElementById("phone1Err");
    let ph2Error = document.getElementById("phone2Err");



    if (!first.value) {
        first.style.border = "1px solid red";
        firstErr.textContent = "Enter your first name";
        firstErr.style = "color: red";
        error++;
    } else if (first.value.length < 2) {
        first.style.border = "1px solid red";
        firstErr.innerHTML = "first name should have atleast twoletters";
        firstErr.style = "color: red";
        error++;
    } else if (first.value.length > 255) {
        first.style.border = "1px solid red";
        firstErr.innerHTML = "first name cannot have more than 255 letters";
        firstErr.style = "color: red";
        error++;
    }else {
        first.style.border = "1px solid green";
        firstErr.textContent = "";
    }
    //last
    if (!last.value) {
        last.style.border = "1px solid red";
        lastErr.textContent = "Enter your last name";
        lastErr.style = "color: red";
        error++;
    } else if (last.value.length < 2) {
       last.style.border = "1px solid red";
        lastErr.innerHTML = "last name should have atleast 2 letters";
        lastErr.style = "color: red";
        error++;
    } else if (last.value.length > 255) {
        last.style.border = "1px solid red";
        lastErr.innerHTML = "last name cannot have more than 255 letters";
        lastErr.style = "color: red";
        error++;
    }else {
        last.style.border = "1px solid green";
        lastErr.textContent = "";
    }
     // DOB
     if (!birth.value) {
        birth.style.border = "1px solid red";
        birthError.textContent = "Select your date of birth";
        birthError.style = "color: red";
        error++;
    }
    //gender
    if (!gender.value) {
        gender.style.border = "1px solid red";
        genderError.textContent = "Select your gender";
        genderError.style = "color: red";
        error++
    } else {
        gender.style.border = "1px solid green";
        genderError.textContent = "";
    }
    //country
    if (!country.value) {
        country.style.border = "1px solid red";
        countError.textContent = "Select your Country of Residence";
        countError.style = "color: red";
        error++
    } else {
        country.style.border = "1px solid green";
        countError.textContent = "";
    }
    //district
    if (!district.value) {
        district.style.border = "1px solid red";
        distError.textContent = "Enter your District/State here";
        distError.style = "color: red";
        error++
    } else {
        district.style.border = "1px solid green";
        distError.textContent = "";
    }
    //town
    if (!town.value) {
        town.style.border = "1px solid red";
        townError.textContent = "Enter your town here";
        townError.style = "color: red";
        error++
    } else {
        town.style.border = "1px solid green";
        townError.textContent = "";
    }
    //zip
    if (!zip.value) {
       zip.style.border = "1px solid red";
        zipError.textContent = "Zip Code";
        zipError.style = "color: red";
        error++
    } else {
        zip.style.border = "1px solid green";
       zipError.textContent = "";
    }
//phone1
const phoneNumberregex = /^\+256\d{9}$/;
if (!phone1.value) {
    phone1.style.border = "1px solid red";
    ph1Error.innerHTML = "Phone Number 1";
     ph1Error.style = "color: red";
    error++;
} else if (!phone1.value.match(phoneNumberregex)) {
    phone1.style.border = "1px solid red";
    ph1Error.innerHTML =
        "phone number should be in this format +2567********";
    ph1Error.style = "color: red";
    error++;
} else {
    phone1.style.border = "1px solid green";
   ph1Error.textContent = "";
}
//phone2
if (!phone2.value) {
   phone2.style.border = "1px solid red";
     ph2Error.innerHTML = "Phone Number 2";
     ph2Error.style = "color: red";
    error++;
} else if (!phone2.value.match(phoneNumberregex)) {
   phone2.style.border = "1px solid red";
     ph2Error.innerHTML =
        "phone number should be in this format +2567********";
     ph2Error.style = "color: red";
    error++;
} else {
    phone2.style.border = "1px solid green";
  ph2Error.textContent = "";
}




    if (error > 0) {
        event.preventDefault();
    }
}
