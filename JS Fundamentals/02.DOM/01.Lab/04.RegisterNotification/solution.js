function register() {
 let username = document.getElementById('username').value;
 let email = document.getElementById('email').value;
 let password = document.getElementById('password').value;
 let correctEmail = email.match(/(.+)@(.+).(com|bg)/gm);


 let section = document.getElementById('result');
 let succesfulRegistration = document.createElement('h1');
 succesfulRegistration.textContent = 'Successful Registration!';
 section.appendChild(succesfulRegistration);

 let usernameText =
 section.appendChild('Username');

 if(username !== '' && correctEmail !== null && password !== ''){

 }else{
  console.log('prazni sa')
 }
}
