const loginFun = () => {

    let user = document.getElementById(`username`).value;
    let pass = document.getElementById(`password`).value;

    let welcomeMessage = `Hi ${user}! Welcome here!`;

    console.log(welcomeMessage);
    console.log(pass);

    document.getElementById(`welcome`).textContent = welcomeMessage;
    document.getElementById(`welcome2`).textContent = welcomeMessage;

}