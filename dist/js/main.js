"use strict";var xhr=new XMLHttpRequest;xhr.open("GET","https://swapi.co/api/people/",!0),xhr.send(),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(200!=xhr.status){var e=xhr.status,t=xhr.statusText;console.log(e+": "+t)}else{var s=JSON.parse(xhr.responseText);console.log(s)}};
//# sourceMappingURL=main.js.map
