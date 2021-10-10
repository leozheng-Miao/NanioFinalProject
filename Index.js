
function tab() {
  var oDiv = document.getElementById('playimages');
  var oDivSmall = getByClass(oDiv, 'small_pic')[0];
  var oUlSmall = oDivSmall.getElementsByTagName('ul')[0];
  var aLiSmall = oDivSmall.getElementsByTagName('li');

  var now = 0;
  for (var i = 0; i < aLiSmall.length; i++) {
    aLiSmall[i].index = i;
    aLiSmall[i].onclick = function () {
      tab();
    }
    aLiSmall[i].onmouseover = function () {
      aLiSmall[i].opacity = 1;
    };
    aLiSmall[i].onmouseout = function () {
      aLiSmall[i].opacity = 0.6;
    }
  }
}