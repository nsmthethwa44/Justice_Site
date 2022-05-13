// view navbar if menuImg is clicked and
// add active class to remove menuImg 
let menuImg = document.querySelector(".menuImg");
let navbar = document.querySelector(".navbar");
let closeImg = document.querySelector(".closeImg");
menuImg.onclick = () => { 
  navbar.classList.add("active");
  menuImg.classList.add("active");
}

// when a loseImg is clicked close a navbar
closeImg.onclick = () => { 
  navbar.classList.remove("active");
  menuImg.classList.remove("active");
}

// when windows scroll remove navbar
let goTop = document.querySelector(".goTop");
window.onscroll = () => {
   navbar.classList.remove("active");
  menuImg.classList.remove("active");

   // when window scrolls top show scroll top button
  if (window.scrollY > 200) {
    goTop.classList.add("active");
  } else { 
    goTop.classList.remove("active");
  }
}

// when nav link is cliked add an active class
let navLinks = document.querySelectorAll(".navbar .nav li a");
Array.from(navLinks).forEach((item, index) => { 
  item.onclick = (e) => {
let activeNavlink = document.querySelector(".navbar .nav li a.active");
    activeNavlink.classList.remove("active");
    e.target.classList.add("active");

  // also remove navbar active classes
  navbar.classList.remove("active");
  menuImg.classList.remove("active");
  }
})

// if appointment button is clicked remove navbar
let appointmentBtn = document.querySelector(".appointmentBtn");
appointmentBtn.onclick = () => {
  navbar.classList.remove("active");
  menuImg.classList.remove("active");
}