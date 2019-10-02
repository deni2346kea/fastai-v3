

//Invert
var action = 1;
$("#inv").on("click", viewSomething);

function viewSomething() {
    if ( action == 1 ) {
      var c = 2;
      console.log(c);
      document.getElementById("image-picked").style.filter="invert(100%)";
        action = 2;
    } else {
      var f = 2222;
      console.log(f);
      document.getElementById("image-picked").style.filter="none";
        action = 1;
    }
}

//Sepia
var action = 1;
$("#sep").on("click", viewSomething);

function viewSomething() {
    if ( action == 1 ) {
      var c = 2;
      console.log(c);
      document.getElementById("image-picked").style.filter="sepia(100%)";
        action = 2;
    } else {
      var f = 2222;
      console.log(f);
      document.getElementById("image-picked").style.filter="none";
        action = 1;
    }
}

// Brightness

var action = 1;
$("#brh").on("click", viewSomething);

function viewSomething() {
    if ( action == 1 ) {
      var c = 2;
      console.log(c);
      document.getElementById("image-picked").style.filter="brightness(140%)";
        action = 2;
    } else {
      var f = 2222;
      console.log(f);
      document.getElementById("image-picked").style.filter="none";
        action = 1;
    }
}

//Zoom in

$("#zoomin").on("click", viewSomething);

function viewSomething() {
document.getElementById("image-picked").style.transform ="scale(1.5)";
}


// Zoom out 

$("#zoomout").on("click", viewSomething);

function viewSomething() {
document.getElementById("image-picked").style.transform ="scale(1.0)";
}



