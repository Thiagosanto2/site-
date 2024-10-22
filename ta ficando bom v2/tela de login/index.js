const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});


signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});



function rsrs(){
        var login = document.getElementById('login').value;
        var senha = document.getElementById('senha').value;

        if(login == "admin" && senha == "teste"){
            alert('sucesso');
            location.href = "1.html"
        }else{
            alert('login ou senha incorreta');
        }


}