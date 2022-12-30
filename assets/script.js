// moblie menu
const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
    selectElement('.container').classList.toggle('active');
    
    
});










function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success","form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");


    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form__hidden");
        createAccountForm.classList.remove("form__hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form__hidden");
        createAccountForm.classList.add("form__hidden");
    });




    



    // loginForm.addEventListener("submit", e => {
    //     e.preventDefault();

    //     //Preform your AJAX/Fetch login 

    //     setFormMessage(loginForm, "error", "Invalid username/password combination");
    // });

    //when the User types less then 10 characters and clicks off the input field this error will post.
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Username must be at least 8 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});


                                        //sign up function 



function store(){

    var name = document.getElementById('signupUsername');
    var email = document.getElementById('email');
    var pw = document.getElementById('password');
    var cpw = document.getElementById('cpass');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Enter a valid username to use as your Apple ID.');

    }else if(pw.value.length == 0){
        alert('Please create a password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 18){
        alert('Max of 18');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('cpw', cpw.value);
        alert('Your account has been created');
        setTimeout(function(){
            window.location.reload(1);
         }, 50);
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        result.innerHTML = 'Logged in';
    }else{
        alert('Error on login');
        result.innerHTML = 'Invalid Apple ID/Password';
    }
}














// function signup(e){
//     event.preventDefault();
//     // console.log('working');

//     var email = document.getElementById('email').value;
//     var username = document.getElementById('signupUsername').value;
//     var pass = document.getElementById('password').value;

//     var user = {
//         email: email,
//         username: username,
//         password: pass,
//     };

//     var json = JSON.stringify(user);
//     localStorage.setItem(user, json);
//     console.log('user added');

// }






//                                 // Login function 


// function loginfunc(e){
//     event.preventDefault();
   

//     var username = document.getElementById('signIn').value;
//     var pass = document.getElementById('pass').value;
//     var result = document.getElementById('result');

//     var user = localStorage.getItem(username);
//     var data = JSON.parse(user);
//     console.log(data);
    
//     if(user == null){
//         result.innerHTML = 'Invalid username/password combination';
    
//     } else if(username == data.username && pass == data.password){
//         result.innerHTML = 'logged in';
//     } else {
//         result.innerHTML = 'wrong password';
//     }
// }                                