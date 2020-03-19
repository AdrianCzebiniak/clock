function urlParam (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.href);
    if (results == null) {
         return 0;
    }
    return results[1] || 0;
}

function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

function currentTime() {
  var dt = new Date();
  var ampm = dt.getHours() > 12 ? 'pm' : 'am';
  var hours = dt.getHours() % 12
  hours = hours ? hours : 12;
  
  var time = hours + ":" + pad(dt.getMinutes(), 2);
  $('#time').text(time);
  $("#ampm").text(ampm);

  var t = setTimeout(currentTime, 1000);
}

$(document).ready(function() {
  color = urlParam('color');
  if(color) {
    $('body').css('color', '#' + color);
  }

  currentTime();
});

