
function Input(){
login_ok = false;
user_name = "shaxa";
password = "1111";
user_name = prompt("Логин","");
password = prompt("Пароль","");
if (user_name=="login" && password=="pass") {
 login_ok = true;
}
if (user_name=="shaxa" && password=="1234") {
 login_ok = true;
}
else alert ('Вход запрещен!');

if (login_ok==false) alert("Неверный логин или пароль!");
}
