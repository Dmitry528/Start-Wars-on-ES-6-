"use strict";window.addEventListener("load",init);var nextPage=1,button_next=document.querySelector(".next_table"),button_prev=document.querySelector(".prev_table");function init(){request(render_table,request.url),next_paginator(),back_paginator()}function next_paginator(){button_next.addEventListener("click",function(){if(1<=nextPage||nextPage<8)return nextPage++,request.url="https://swapi.co/api/people/?page="+nextPage,request(Rerender_table,request.url),nextPage})}function back_paginator(){button_prev.addEventListener("click",function(){if(2<=nextPage||nextPage<8)return nextPage--,request.url="https://swapi.co/api/people/?page="+nextPage,request(Backrender_table,request.url),nextPage})}function request(n,e){var s=new XMLHttpRequest;s.open("GET",e,!0),s.send(),s.onreadystatechange=function(){if(4==s.readyState)if(200!=s.status){var e=s.status,t=s.statusText;console.log(e+": "+t)}else{var r=JSON.parse(s.responseText);n(r)}}}request.url="https://swapi.co/api/people/?page=1";var render_table=function(e){for(var t=document.querySelector("table"),r=0;r<10;r++){var n=document.createElement("tr"),s=document.createElement("td"),i=document.createElement("td"),o=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),a=document.createElement("td");s.innerHTML=e.results[r].name,i.innerHTML=e.results[r].gender,o.innerHTML=e.results[r].height,c.innerHTML=e.results[r].mass,l.innerHTML=e.results[r].birth_year,a.innerHTML=e.results[r].skin_color,n.appendChild(s),n.appendChild(i),n.appendChild(o),n.appendChild(c),n.appendChild(l),n.appendChild(a),t.appendChild(n)}},Rerender_table=function(e){document.querySelector("table");for(var t=document.querySelectorAll("td"),r=0,n=0;n<e.results.length;n++)t[r++].innerHTML=e.results[n].name,t[r++].innerHTML=e.results[n].gender,t[r++].innerHTML=e.results[n].height,t[r++].innerHTML=e.results[n].mass,t[r++].innerHTML=e.results[n].birth_year,t[r++].innerHTML=e.results[n].skin_color},Backrender_table=function(e){document.querySelector("table");for(var t=document.querySelectorAll("td"),r=0,n=0;n<e.results.length;n++)t[r++].innerHTML=e.results[n].name,t[r++].innerHTML=e.results[n].gender,t[r++].innerHTML=e.results[n].height,t[r++].innerHTML=e.results[n].mass,t[r++].innerHTML=e.results[n].birth_year,t[r++].innerHTML=e.results[n].skin_color},button_shoose=document.querySelector(".button_shoose"),currency_side=document.querySelector(".currency_side i"),side_classes=["fab fa-sith","fas fa-jedi"],side_prev=document.querySelector(".prev"),side_next=document.querySelector(".next");currency_side.setAttribute("class",side_classes[0]);var counter_choose=0;side_next.addEventListener("click",function(){++counter_choose>side_classes.length-1&&(counter_choose=0),currency_side.setAttribute("class",side_classes[counter_choose])}),side_prev.addEventListener("click",function(){--counter_choose<0&&(counter_choose=side_classes.length-1),currency_side.setAttribute("class",side_classes[counter_choose])}),button_shoose.addEventListener("click",function(){side_prev.setAttribute("class","d-none"),side_next.setAttribute("class","d-none"),button_shoose.setAttribute("class","d-none"),currency_side.className+=" current_side";var e=document.querySelector(".text_wrapper .contact");"fab fa-sith current_side"===currency_side.getAttribute("class")?e.innerHTML="Sith is need you !":e.innerHTML="Jedi is need you !"});var slider_img=["../img/img_slider_1.jpg","../img/img_slider_2.jpg","../img/img_slider_3.jpg"],current_slider=document.querySelector(".current_slider"),prev_slider=document.querySelector(".prev_slider"),next_slider=document.querySelector(".next_slider"),slider_counter=0;current_slider.setAttribute("src",slider_img[slider_counter]),next_slider.addEventListener("click",function(){++slider_counter>slider_img.length-1&&(slider_counter=0),current_slider.setAttribute("src",slider_img[slider_counter])}),prev_slider.addEventListener("click",function(){--slider_counter<0&&(slider_counter=slider_img.length-1),current_slider.setAttribute("src",slider_img[slider_counter])}),setInterval(function(){++slider_counter>slider_img.length-1&&(slider_counter=0),current_slider.setAttribute("src",slider_img[slider_counter])},8e3);var book=document.querySelector(".book"),validation_block=document.querySelector(".validation"),login_adm="Admin",password_adm="Admin123",btn_data=document.querySelector(".btn_get_data");function get_data(){chek_valid_data(document.querySelector(".login").value,document.querySelector(".password").value)}function chek_valid_data(e,t){e===login_adm&&t===password_adm?(localStorage.setItem("Login",e),localStorage.setItem("Role","Admin"),"Admin"===localStorage.getItem("Role")&&render_main()):document.querySelector(".error").style.display="block"}function render_main(){var e=document.querySelector(".validation");e.setAttribute("class","validation"),e.setAttribute("class","d-none"),book.setAttribute("class","book"),book.setAttribute("class","d-flex"),book.setAttribute("class","align-items-center")}btn_data.addEventListener("click",get_data);var sign_out=document.querySelector(".sign_out");function out(){localStorage.removeItem("Login"),localStorage.removeItem("Role"),"Admin"!=localStorage.getItem("Role")&&(console.log("WFT"),book.setAttribute("class","d-none"),validation_block.classList="validation d-flex justify-content-center align-items-center")}sign_out.addEventListener("click",out);
//# sourceMappingURL=main.js.map
