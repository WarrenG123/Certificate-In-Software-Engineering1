const validate = (event) => {
    let error = 0;
    //input
    let first = document.getElementById("fName");
    let last = document.getElementById("lName");
    let birth = document.getElementById("dob");
    // let gender = document.getElementById("gender");
    le
    //error
    let firstErr = document.getElementById("fNameErr")
    let lastErr = document.getElementById("lNameErr");
    let birthError = document.getElementById("dobErr");
    // let genderError = document.getElementById("genErr");



    if (!first.value) {
        first.style.border = "1px solid red";
        firstErr.textContent = "Please enter first name";
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
        lastErr.textContent = "Please enter last name";
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
        birthError.textContent = "Please fill in this field";
        birthError.style = "color: red";
        error++;
    }
    //gender
    // if (!gender.value) {
    //     gender.style.border = "1px solid red";
    //     genderError.textContent = "Select the gender you belong to";
    //     genderError.style = "color: red";
    //     error++
    // } else {
    //     gender.style.border = "1px solid green";
    //     genderError.textContent = "";
    // }





    if (error > 0) {
        event.preventDefault();
    }
}
