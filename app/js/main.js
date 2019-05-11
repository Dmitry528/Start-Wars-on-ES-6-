let xhr = new XMLHttpRequest();
xhr.open("GET", "https://swapi.co/api/people/", true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState != 4) return;

  if (xhr.status != 200) {
    var errStatus = xhr.status;
    var errText = xhr.statusText;
    console.log(errStatus + ": " + errText);
  } else {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};




/* UI features in header */

  /* choose side */
let button_shoose = document.querySelector(".button_shoose");
let currency_side = document.querySelector(".currency_side i");
let side_classes = ["fab fa-sith", "fas fa-jedi"];
let side_prev = document.querySelector(".prev");
let side_next = document.querySelector(".next");




currency_side.setAttribute("class", side_classes[0]);


let counter_choose = 0;

side_next.addEventListener("click", function(){
  counter_choose++;
  if(counter_choose > side_classes.length -1){
    counter_choose = 0;
  }
  currency_side.setAttribute("class", side_classes[counter_choose]);
});

side_prev.addEventListener("click", function () {
  counter_choose--;
  if (counter_choose < 0) {
    counter_choose = side_classes.length - 1;
  }
  currency_side.setAttribute("class", side_classes[counter_choose]);
});


button_shoose.addEventListener("click", function(){
  side_prev.setAttribute("class", "d-none");
  side_next.setAttribute("class", "d-none");
  button_shoose.setAttribute("class", "d-none");

  currency_side.className += " current_side";

  let needs_you = document.querySelector(".text_wrapper .contact");
  if (currency_side.getAttribute("class") === "fab fa-sith current_side"){
    needs_you.innerHTML = "Sith is need you !";
  }
  else{
    needs_you.innerHTML = "Jedi is need you !";
  }
});

  /* img slider */

let slider_img = [
  "../img/img_slider_1.jpg",
  "../img/img_slider_2.jpg",
  "../img/img_slider_3.jpg"
];
let current_slider = document.querySelector(".current_slider");

let prev_slider = document.querySelector(".prev_slider");
let next_slider = document.querySelector(".next_slider");

let slider_counter = 0;
current_slider.setAttribute("src", slider_img[slider_counter]);

next_slider.addEventListener("click", function(){
  slider_counter++;
  if(slider_counter > slider_img.length - 1){
    slider_counter = 0;
  }
  current_slider.setAttribute("src", slider_img[slider_counter]);
});

prev_slider.addEventListener("click", function(){
  slider_counter--;
  if(slider_counter < 0){
    slider_counter = slider_img.length -1;
  }
  current_slider.setAttribute("src", slider_img[slider_counter]);
});

setInterval(
  function() {
    slider_counter++;
    if (slider_counter > slider_img.length - 1) {
      slider_counter = 0;
    }
    current_slider.setAttribute("src", slider_img[slider_counter]);
  }, 8000
);