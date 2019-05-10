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

