const wrap = document.querySelector('.wrap');
const loginLink = document.querySelector('.login-register');
const registerLink = document.querySelector('.register-link');

register-link.addEventListener('click', ()=>{
    wrap.classList.add('active');
});

login-register.addEventListener('click', ()=> {
    wrap.classList.remove('active');
});
