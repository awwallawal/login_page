// Note: Don't fire up an eventListener via the anchor link tag if cause momentary firing of the eventListener
const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnLoginPopup = document.querySelector(".btnLogin-popup");
const iconClosse = document.querySelector(".icon-close");

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
    console.log("Awwal")
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnLoginPopup.addEventListener('click', ()=>{
    wrapper.classList.add("active-popup");
});

iconClosse.addEventListener('click', ()=>{
    wrapper.classList.remove("active-popup");
});