// Старт модалка

// кнопка відкриття модалки
let openModal = document.querySelectorAll(".banner-btn-explore");

// кнопка закриття модалки - "хрестик"
let closeModal = document.querySelector(".close-modal");

// модалка - сірий фон
let modalWrapper = document.querySelector(".modal-wrapper");

// кнопка всередині модалки - "Надіслати заявку"
let modalBtn = document.querySelector(".modal-btn");

// відкритя модалки
for (item of openModal) {
  item.addEventListener("click", function () {
    modalWrapper.style.display = "flex";
  });
}

// закриття модалки по кнопці-хрестику
closeModal.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});

// закриття модалки по кнопці модалки
modalBtn.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});

// закриття модалки по кліку на сірому фоні
modalWrapper.addEventListener("click", function (event) {
  if (event.target === modalWrapper) {
    modalWrapper.style.display = "none";
  }
});

//  THE END МОДАЛКА

// START TABS
let tabs = document.querySelectorAll(".tab");
let cards = document.querySelectorAll(".card");
for (tab of tabs) {
  tab.addEventListener("click", onClickTab);
}

function onClickTab(event) {
  for (tab of tabs) {
    tab.classList.remove("tabs-active");
  }
let activeTab = event.target;
activeTab.classList.add("tabs-active");
let filter = activeTab.getAttribute("data-target");
console.log(filter);
for(card of cards){
let cardId = card.getAttribute("data-id");
if(cardId===filter){
	// card.style.dysplay="block";
card.style.display="block";
} else {
  card.style.display = "none";
  }
 }
}
 for(card of cards){
  let cardId = card.getAttribute("data-id");
  if(cardId==="centre"){
  card.style.display="block";
  } else {
    card.style.display = "none";
    }
   }

  //  THE END TABS


  // START SLIDER
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let sliderNext = document.querySelector(".nextBtn");
let sliderBack = document.querySelector(".backBtn");
// console.log(slides);
// console.log(dots);
// console.log(sliderNext);
// console.log(sliderBack);
let activeSlide = 0;
showSlide(activeSlide);
  function showSlide(n) {
if(n > slides.length -1){
  activeSlide = 0;
}
if (n < 0) {
  activeSlide = slides.length -1;
}


  for(let i = 0; i < slides.length; i = i+1){
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slides[activeSlide].style.display = "flex";
  dots[activeSlide].classList.add("active");
}
sliderNext. addEventListener("click", function(){
  activeSlide=activeSlide + 1;
  showSlide(activeSlide)
});
sliderBack. addEventListener("click", function(){
  activeSlide=activeSlide - 1;
  showSlide(activeSlide);
});

for(let i = 0; i < slides.length; i = i + 1) {
  dots[i].addEventListener("click", function (){
    activeSlide = i;
    showSlide(activeSlide);
  })
}

$(document).ready(function() {

  setInterval(function() {
    let date = new Date();
    let dateFinish = new Date(2024,5,1);
    let time = dateFinish - date;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(time / day);
    const hours = Math.floor((time % day) / hour);
    const min = Math.floor(((time % day) % hour) / minute);
    const sec = Math.floor((((time % day) % hour) % minute) / second);


    $(".days").text(days);
    $(".hours").text(hours);
    $(".min").text(min);
    $(".sec").text(sec);

  }, 1000);
  });




