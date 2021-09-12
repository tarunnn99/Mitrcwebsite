burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList =document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')

burger.addEventListener('click',() => {

rightnav.classList.toggle('visibilityresp');
navList.classList.toggle('visibilityresp');
navbar.classList.toggle('heightnavresp');


})