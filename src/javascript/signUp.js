//store the credentials in local storage
let username, password;
document.querySelector('#user_name').addEventListener('input', function () {
    username = this.value;
    localStorage.setItem('login', JSON.stringify({ name: username, password: password }));
});
document.querySelector('#password').addEventListener('input', function () {
    password = this.value;
    localStorage.setItem('login', JSON.stringify({ name: username, password: password }));
});

//password validation
document.querySelector('.submit').onclick = () => {
    let password1 = document.querySelector('#password').value,
        confirmPassword = document.querySelector('#confirm_password').value;

    if (password1 != confirmPassword) {
        alert("Password didn't match, try again");
        location.reload(true);
        return false;
    }

    return true;
}

//prevent back page loading
function preventback() {
    window.history.forward();
}
setTimeout("preventback()", 0);
window.onunload = function () { null };