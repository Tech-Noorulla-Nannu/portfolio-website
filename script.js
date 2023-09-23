/*toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
     menuIcon.classList.toggle('bx-x');
     navbar.classList.toggle('active');

     
};

/*==============   typed js   ===============*/

const typed = new Typed('.multiple-text',{
     strings: ['Frontend Developer','Backend Developer','Full-Stack-Developer'],
     typeSpeed: 100,
     backSpeed: 100,
     backDelay: 1000,
     loop: true
});

window.onscroll = () =>{
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');

};



