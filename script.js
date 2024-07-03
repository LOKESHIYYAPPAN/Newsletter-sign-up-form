const form = document.querySelector("form")
const emailPlace = document.getElementById("emailPlace")
const email = document.getElementById("email")
const successDiv = document.querySelector(".success")
const landingDiv = document.querySelector(".landing")
const err = document.getElementById("err")
const img = document.querySelector(".sign-up")

window.addEventListener("resize",resize)

function resize(){
    if(window.innerWidth>=769){
        img.src = "./assets/images/illustration-sign-up-desktop.svg"

    } else{
        img.src = "./assets/images/illustration-sign-up-mobile.svg"
    }
}
resize()

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!validation()){
        return
    }
    emailPlace.innerHTML = email.value;
    if(window.innerWidth>=769){
        successDiv.style.left = "60%";
        setTimeout(() => {
            successDiv.style.left = "50%";
        }, 300);
    } 
    else{
        successDiv.style.left = "100px";
        setTimeout(() => {
            successDiv.style.left = "0px";
        }, 300);
    }
    landingDiv.style.display = "none";
})

const dismiss = () => {
    email.value = "";
    successDiv.style.left = "-120vw";
    landingDiv.style.display = "flex";
    // setTimeout(() => {
    //     location.reload();
    // }, 300);
}

const validation = () => {
    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value === ""){
        err.innerHTML = "Email required";
        isValid = false;
    } else if(!emailPattern.test(email.value)){
        err.innerHTML = "Valid email required";
        isValid = false;
    } else{
        err.innerHTML = "";
    }

    return isValid
}

