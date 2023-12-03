
function closeJS() {
  var navListen = document.getElementById("js_link");
    navListen.style.display = "none";
}



function navJS() {
  var navListen = document.getElementById("js_link");

  if (navListen.style.display === "block") {
    navListen.style.display = "none";
  } else {
    navListen.style.display = "block";
  }



}


function navJS2() {
  var navListen = document.getElementById("js_link2");
  if (navListen.style.display === "block") {
    navListen.style.backgroundColor = "white";
    navListen.style.display = "none";
    navListen.style.width="0vw";
  } else {
    navListen.style.display = "block";
    navListen.style.width="200px";
    navListen.style.backgroundColor = "#D7D7D7";

  }
}


function navJS3() {
  var navListen = document.getElementById("js_link3");
  if (navListen.style.display === "block") {
    navListen.style.backgroundColor = "white";
    navListen.style.display = "none";
    navListen.style.width="0vw";
  } else {
    navListen.style.display = "block";
    navListen.style.width="200px";
    navListen.style.backgroundColor = "#D7D7D7";

  }
}

function navJS4() {
  var navListen = document.getElementById("js_link4");
  if (navListen.style.display === "block") {
    navListen.style.backgroundColor = "white";
    navListen.style.display = "none";
    navListen.style.width="0vw";
  } else {
    navListen.style.display = "block";
    navListen.style.width="200px";
    navListen.style.backgroundColor = "#D7D7D7";
  }
}

function closeJS2() {
  var navListen = document.getElementById("js_link2");
    navListen.style.display = "none";
}

function closeJS3() {
  var navListen = document.getElementById("js_link3");
    navListen.style.display = "none";
}

function closeJS4() {
  var navListen = document.getElementById("js_link4");
    navListen.style.display = "none";
}

function navTop() {
  var navListen = document.getElementById("d1");
  if (navListen.style.display === "block") {
    navListen.style.backgroundColor = "white";
  } else {
    navListen.style.backgroundColor = "#D7D7D7";
  }
}



function functOpac() {
  var opac1 = document.getElementById("opacity_id");
    opac1.style.opacity = 0;
}

function functOpac2() {
  var opac2 = document.getElementById("opacity_id");
  opac2.style.opacity= 1;
}

function functOpac_2() {
  var opac1 = document.getElementById("opacity_id2");
    opac1.style.opacity = 0;
}

function functOpac2_2() {
  var opac2 = document.getElementById("opacity_id2");
  opac2.style.opacity= 1;
}

function playPause() {
  const myVideo = document.getElementById("myVideo");
    myVideo.play();
    myVideo.style.opacity = 1;
}

function pausePlay() {
  const myVideo = document.getElementById("myVideo");
    myVideo.pause();
    myVideo.style.opacity = 0.5;

}

function audioPlay(){
  const audio = document.getElementById("audio1");
  audio.play();
}



function changeC(newColor) {
  var elem = document.querySelector('body');
  elem.style.backgroundColor=newColor;
}

function newD(newColor) {
  var d = document.createElement("DIV");
  d.innerHTML = "t .";
  document.getElementById('d1').appendChild(d);
  d.style.color = newColor;
  d.style.backgroundColor = newColor;
  d.style.width="5vw";
  d.style.height="5vw"
  d.style.border="20vw";

}

function infoS() {
  document.getElementById("b1").addEventListener("click", function() {
  alert("enter monty's work");
  });
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  const scrol = document.getElementById("scrol");
  //scrol.style.display = "block";

}

function appear(){
  const scrol = document.getElementById("scrol");
    scrol.style.display = "block";

}

function disappear(){
  const scrol = document.getElementById("scrol");
    scrol.style.display = "none";
}


// jquery
$(document).ready(function() {
  $("#button_red").click(function(){
  $("p").css("color", "red");
  $("p").html("change");
//  $("<h2>chang2</h2>").replaceAll("p");
  });
});

$(document).ready(function(){
  $("h2").click(function(){
    $(this).hide();
  });
});

/*
$(document).ready(function(){
  $("#button_note").click(function(){
    $("h1, h2, p").toggleClass("note");
  });
});


$(document).ready(function(){
  $("h1, h2, p").click(function(){
    $(this).toggleClass("note");
  });
});
*/

$(document).ready(function(){
  $("#button_highlight").click(function(){
    $("p").toggleClass("highlight");
  });
});


$(document).ready(function(){
  $("#add").click(function(){
    $("p").toggleClass("highlight", true);
  });
  $("#remove").click(function(){
    $("p").toggleClass("highlight", false);
  });
});


$(document).ready(function(){
  $("#text").dblclick(function(){
    alert("double");
  });
});

$(document).mousemove(function(e){
  $('.world').offset({
    left:e.pageX,
    top:e.pageY + 60,
    width: "20px"
  });
});

$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show(5000);
  });
});

$(document).ready(function(){
  $("p").mouseenter(function(){
    $(this).animate({
      opacity:".9"
    });
  }).mouseleave(function(){
    $(this).animate({
      opacity:"1"
    });
  });
});

//animations


$(document).ready(function(){
  var g = $("h4");
  function blink(){
    g.animate({'right':'150px'
    }).animate({
      'right':'-20px'
    },1000)
  }
setInterval(blink, 1500)
});



$(document).ready(function(){
  $("#btns1").click(function(){
    var div = $("#box");
    div.animate({height:'300px'});
    div.animate({height:'100px'}, loop);


  });
});

$(function() {
  $("#btn1").click(function(){
    function loop(){
      var div = $("#arrow");
       div.animate({height:'100px'},1000)
       div.animate({height:'300px'},1000, loop);
    }
    loop(); // call this wherever you want
  });
});

$(function() {

  $("#btn2").click(function(){
    var b = Math.floor(Math.random() * (400 - 100)) + 100;

    function loop(){

      var div = $("#build20");
       div.animate({height:b},1000)
       div.animate({height:'100'},1000, loop);
    }
    loop(); // call this wherever you want
  });
});

$('#theDiv').prepend('<img id="theImg" src="images/rf/cutouts/rf3.png" />')


$(function() {
  $(document).ready(function(){

    function loop(){
      var b = Math.floor(Math.random() * (400 - 100)) + 100;

      var div = $("#build3b");
       div.animate({height:b},1000)
       div.animate({height:'100'},1000, loop);
    }
    loop(); // call this wherever you want
  });
});

$(function() {
  $(document).ready(function(){

    function loop(){
      var b2 = Math.floor(Math.random() * (350 - -100));

      $("#build2, #build3,#build4, #build5, #build6, #build7, #build8, #build9, #build10, #build11, #build5, #build5, #build5").each(function(){
        var b = Math.floor(Math.random() * (300 - 0)) + 150;
        console.log(b)

        $(this).animate({height:(b+b2)}, (b*20)+b2, 'easeInOutCubic')
        $(this).animate({height:290 - ((b2/7)+(b/3))},(b*10)+b2, 'easeInOutCubic', loop);
      });

    }
    loop();
  });
});

$(function() {
  $(document).ready(function(){
      var url = "images/rf/cutouts/rf3.png";
      var image = new Image();
      image.src = url;
      $('#container').append(image);
      $("#container, #container2" ).each(function(){
        $(this).animate({height:b}, b*5)
        $(this).animate({height:'100'},b*5, 'easeInOutCubic', loop);
      });
  });
});

function doOnload(){
   taccgl_texCanWidth=7400; taccgl_texCanHeight=9000;
   taccgl.begin(); taccgl.texClearAll();
   if (taccgl.dddmode) document.getElementById('msg3D').style.display='none';
   ex2();
   ex4();
   ex3();
   ex5();
   taccgl.onResize= function(){
       taccgl.stop(); taccgl.texClearAll(); doOnload();
   }
}

function initExample() {
  if (!taccgl.busy) taccgl.texClearAll()
};


function ex2() {  //println('inc');
  initExample(); ;
  taccgl.actor("wave2",taccgl.flexiBorder). Wave(2,3,-150). duration(1000) . start();; ; taccgl.start('no epilepsy warning');
}

function ex3() {
  initExample(); ;
  taccgl.actor("wave3",taccgl.flexiBorder)  . Wave(2,3,-150). duration(7200) . start();; ; taccgl.start('no epilepsy warning');
}

function ex4() {
  initExample(); ;
  taccgl.actor("wave4",taccgl.flexiBorder)  . Wave(1,3,-100). duration(7200) . start();; ; taccgl.start('no epilepsy warning');
}


function ex5() {
  initExample(); ;
  taccgl.actor("wave5",taccgl.flexiBorder)
  .posZ(500). resizeZ(). ZWave1(1,1,5*-3.14159,0). bgColor ("#ffcccc"). duration(5) . start()
  .cont() . rotateMiddle(0.4,0.4,0.4) . duration (5) . start()
  .cont() . Rect1() . start();; ; taccgl.start('no epilepsy warning');
}



/*
$(function() {
    $('.size1, .size2, .size3').on('click', enlarge(){
      $(this).css({width: "92vw"});
    });
  });
  */


//touch events
var colorA = 1;
function myFunction() {

  var size = document.getElementById("demo")
  size.style.color = "rgb(colorA,255,0)";
  size.innerHTML = "Hello World";

}

//document.getElementById("id1").ontouchstart = play1;

//opened video as full screen so no luck
function playIndex() {

  var p = document.getElementById("back1");
  p.play();
}

function pauseIndex() {
  document.getElementById("id1").pause();
}

//doesn't work on my phone
function vibrate() {
  navigator.vibrate(500);
}
