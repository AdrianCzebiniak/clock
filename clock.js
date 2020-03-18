function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

function currentTime() {
  var dt = new Date();
  var ampm = dt.getHours() > 12 ? 'PM' : 'AM';
  var hours = dt.getHours() % 12
  hours = hours ? hours : 12;
  
  var time = pad(hours, 2) + ":" + pad(dt.getMinutes(), 2) + ":" + pad(dt.getSeconds(), 2) + " " + ampm;
  $('#clock').innerText = time;

  var t = setTimeout(currentTime, 1000);
}

currentTime();
