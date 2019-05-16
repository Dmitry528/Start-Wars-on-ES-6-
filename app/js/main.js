window.addEventListener("load", init);

let nextPage = 1
let button_next = document.querySelector(".next_table");
let button_prev = document.querySelector(".prev_table");


function init(){
  request(render_table, request.url);
  next_paginator();
  back_paginator();
}

function next_paginator(){
  button_next.addEventListener("click", function(){
    if(nextPage >= 1 || nextPage < 8){
      nextPage++;
      request.url = `https://swapi.co/api/people/?page=${nextPage}`;
      request(Rerender_table, request.url);
      return nextPage;
    }
  });
}

function back_paginator(){
  button_prev.addEventListener("click", function(){
    if (nextPage >= 2 || nextPage < 8) {
      nextPage--;
      request.url = `https://swapi.co/api/people/?page=${nextPage}`;
      request(Backrender_table, request.url);
      return nextPage;
    }
  });
}



function request(callback, url){
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    } else {
      var data = JSON.parse(xhr.responseText);
      //console.log(data);
      callback(data);
    }
  };
}

request.url = `https://swapi.co/api/people/?page=1`;

let render_table = (data) => {
  let table = document.querySelector("table");
  for (let i = 0; i < 10; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td_2 = document.createElement("td");
    let td_3 = document.createElement("td");
    let td_4 = document.createElement("td");
    let td_5 = document.createElement("td");
    let td_6 = document.createElement("td");

    td.innerHTML = data.results[i].name;
    td_2.innerHTML = data.results[i].gender;
    td_3.innerHTML = data.results[i].height;
    td_4.innerHTML = data.results[i].mass;
    td_5.innerHTML = data.results[i].birth_year;
    td_6.innerHTML = data.results[i].skin_color;

    tr.appendChild(td);
    tr.appendChild(td_2);
    tr.appendChild(td_3);
    tr.appendChild(td_4);
    tr.appendChild(td_5);
    tr.appendChild(td_6);
    table.appendChild(tr);
  }  
}

let Rerender_table = (data) =>{
  let table = document.querySelector("table");
  let arrOftd = document.querySelectorAll("td");
  let cntr = 0;
  for (let i = 0; i < data.results.length; i++) {
    arrOftd[cntr++].innerHTML = data.results[i].name;
    arrOftd[cntr++].innerHTML = data.results[i].gender;
    arrOftd[cntr++].innerHTML = data.results[i].height;
    arrOftd[cntr++].innerHTML = data.results[i].mass;
    arrOftd[cntr++].innerHTML = data.results[i].birth_year;
    arrOftd[cntr++].innerHTML = data.results[i].skin_color;
  }
}

let Backrender_table = (data) => {
  let table = document.querySelector("table");
  let arrOftd = document.querySelectorAll("td");
  let cntr = 0;
  for (let i = 0; i < data.results.length; i++) {
    arrOftd[cntr++].innerHTML = data.results[i].name;
    arrOftd[cntr++].innerHTML = data.results[i].gender;
    arrOftd[cntr++].innerHTML = data.results[i].height;
    arrOftd[cntr++].innerHTML = data.results[i].mass;
    arrOftd[cntr++].innerHTML = data.results[i].birth_year;
    arrOftd[cntr++].innerHTML = data.results[i].skin_color;
  }
}

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




/* creating  validation */

const login_adm = "Admin";
const password_adm = "Admin123";

let btn_data = document.querySelector(".btn_get_data");

btn_data.addEventListener("click", get_input_data);

function get_input_data(){
  let login = document.querySelector(".login").value;
  let password = document.querySelector(".password").value;

  if(login == login_adm && password == password_adm){
    //console.log("We can set items in storage");
    let error = document.querySelector(".error");
    error.style.display = "none";

    localStorage.setItem("Login", login);
    localStorage.setItem("Role", "admin");

    check_role();
  } else{
    let error = document.querySelector(".error");
    error.style.display = "block";
  }
}


function check_role(){
  if(localStorage.getItem("Role") === "admin"){
    let validation_block = document.querySelector(".validation");
    console.log(validation_block);
    validation_block.setAttribute("class", "d-none");
    let reference = document.querySelector(".book");
    reference.setAttribute("class", "d-flex");
    reference.setAttribute("class", "align-items-center");
    reference.setAttribute("class", "book");
  }
}

check_role();


/* если чекаут то проверяэм роль і якщо немає адміна то ошибка */