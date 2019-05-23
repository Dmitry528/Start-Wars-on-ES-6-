
function render_table(data){
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


fetch(`https://swapi.co/api/people/?page=1`)
.then((response) => {
  return response.json();
})
.then((data) => {
  render_table(data);
  return data.next;
})

.then(() => {
  let page_1 = document.querySelector(".page_1");
  page_1.addEventListener("click", function () {
  fetch(`https://swapi.co/api/people/?page=1`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      reRender(data);
    });
  })
})

.then(() => {
  let page_2 = document.querySelector(".page_2");
  page_2.addEventListener("click", function(){
    fetch(`https://swapi.co/api/people/?page=2`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      reRender(data);
    });
  })
})

.then(() => {
  let page_3 = document.querySelector(".page_3");
  page_3.addEventListener("click", function () {
    fetch(`https://swapi.co/api/people/?page=3`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reRender(data);
      });
  })
})

.then(() => {
  let page_4 = document.querySelector(".page_4");
  page_4.addEventListener("click", function () {
    fetch(`https://swapi.co/api/people/?page=4`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reRender(data);
      });
  })
})

.then(() => {
  let page_5 = document.querySelector(".page_5");
  page_5.addEventListener("click", function () {
  fetch(`https://swapi.co/api/people/?page=5`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      reRender(data);
    });
  })
})

.then(() => {
  let page_6 = document.querySelector(".page_6");
  page_6.addEventListener("click", function () {
  fetch(`https://swapi.co/api/people/?page=6`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      reRender(data);
    });
  })
})

.then(() => {
  let page_7 = document.querySelector(".page_7");
  page_7.addEventListener("click", function () {
  fetch(`https://swapi.co/api/people/?page=7`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      reRender(data);
    });
  })
})

.then(() => {
  let page_8 = document.querySelector(".page_8");
  page_8.addEventListener("click", function () {
  fetch(`https://swapi.co/api/people/?page=8`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      reRender(data);
    });
  })
})






function reRender(data){
  let mainElem = document.querySelector("table");
  let arrOftd = document.querySelectorAll("td");
  
  let cntr = 0;

  for(let i = 0; i < data.results.length; i++){
    arrOftd[cntr++].innerHTML = data.results[i].name;
    arrOftd[cntr++].innerHTML = data.results[i].gender;
    arrOftd[cntr++].innerHTML = data.results[i].height;
    arrOftd[cntr++].innerHTML = data.results[i].mass;
    arrOftd[cntr++].innerHTML = data.results[i].birth_year;
    arrOftd[cntr++].innerHTML = data.results[i].skin_color;
  }
}

















/* create pagination and preloader */

/* Paginator with Promises end fetch end */













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



/* VALIDATION */
let book = document.querySelector(".book");
let validation_block = document.querySelector(".validation");

const login_adm = "Admin";
const password_adm = "Admin123";

let btn_data = document.querySelector(".btn_get_data");
btn_data.addEventListener("click", get_data);

function get_data() {
  let login = document.querySelector(".login").value;
  let password = document.querySelector(".password").value;


  chek_valid_data(login, password);
}

function chek_valid_data(login, password){
  if(login === login_adm && password === password_adm){
    localStorage.setItem("Login", login);
    localStorage.setItem("Role", "Admin");
    if(localStorage.getItem("Role") === "Admin"){
      render_main();
    }
  }
  else{
    let error = document.querySelector(".error");
    error.style.display = "block";
  }
}

function render_main(){
  let validation_block = document.querySelector(".validation");
  validation_block.setAttribute("class", "validation");
  validation_block.setAttribute("class", "d-none");

  book.setAttribute("class", "book");
  book.setAttribute("class", "d-flex");
  book.setAttribute("class", "align-items-center");
}


let sign_out = document.querySelector(".sign_out");
sign_out.addEventListener("click", out);

function out(){
  localStorage.removeItem("Login");
  localStorage.removeItem("Role");
  if (localStorage.getItem("Role") != "Admin") {
    console.log("WFT");
    book.setAttribute("class", "d-none");

    validation_block.classList = "validation d-flex justify-content-center align-items-center";
  }
}

