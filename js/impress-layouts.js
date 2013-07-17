function circleV1Layout(){
var elements = document.querySelectorAll(".step");
      var r = 2000;
      for (var i = 0; i < elements.length; i++) {
      var phi = -i/(elements.length-1) * 2 * Math.PI;
      var x = r * Math.cos(phi);
      var y = r * Math.sin(phi);
      var rotation = phi/(2*Math.PI) * 360-90 ;
      elements[i].dataset.x = Math.round(x);
      elements[i].dataset.y = Math.round(y);
      elements[i].dataset.rotateY = Math.round(rotation);
      elements[i].dataset.rotateX = 90;
     }
}

function circleV2Layout(){
    var elements = document.querySelectorAll(".step");
      var r = 2000;
      for (var i = 0; i < elements.length; i++) {
      var phi = -i/(elements.length-1) * 2 * Math.PI;
      var x = r * Math.cos(phi);
      var y = r * Math.sin(phi);
      var rotation = phi/(2*Math.PI) * 360-90 ;
      elements[i].dataset.x = Math.round(x);
      elements[i].dataset.y = Math.round(y);
      elements[i].dataset.rotateY = Math.round(rotation)-180;
      elements[i].dataset.rotateX = 90;
     }
}

function circleV3Layout(){
   var elements = document.querySelectorAll(".step");
      var r = 2000;
      for (var i = 0; i < elements.length; i++) {
      var phi = -i/(elements.length-1) * 2 * Math.PI;
      var x = r * Math.cos(phi);
      var y = r * Math.sin(phi);
      var rotation = phi/(2*Math.PI) * 360-90 ;
      elements[i].dataset.x = Math.round(x);
      elements[i].dataset.y = Math.round(y);
      elements[i].dataset.rotate = Math.round(rotation);
     }
}

function circleV4Layout(){
  var elements = document.querySelectorAll(".step");
      var r = 2000;
      for (var i = 0; i < elements.length; i++) {
      var phi = -i/(elements.length-1) * 2 * Math.PI;
      var x = r * Math.cos(phi);
      var y = r * Math.sin(phi);
      var rotation = phi/(2*Math.PI) * 360-90 ;
      elements[i].dataset.x = Math.round(x);
      elements[i].dataset.y = Math.round(y);
      elements[i].dataset.rotateY = Math.round(rotation)-90;
      elements[i].dataset.rotateX = 90; 
     }
}

function deepLayout(){
  var elements = document.querySelectorAll(".step");
    var positionZ = 1000;
    for (var index = 0; index < elements.length; index++) {
    elements[index].dataset.z=positionZ;
    positionZ = positionZ + 1200;
    }
}


function linearGridLayout(){
     var elements = document.querySelectorAll(".step");
     var positionX = 100;
     var positionY = 100;
     for (var index = 0; index < elements.length; index++) {
     elements[index].dataset.x=positionX;
     elements[index].dataset.y=positionY;
     if ((index+1)%4==0) {
     positionY = positionY + 1000;
     positionX = 100;
    }
  else {
      positionX = positionX + 1000;
    }
   }
}

function linearLayout(){
   var elements = document.querySelectorAll(".step");
    var position = 100;
    var scale = 1;
    for(var index=0; index<elements.length; index++)
    {
     elements[index].dataset.x=position;
     position = position + 2000;
     elements[index].dataset.scale=scale;
     if (index%2==0) {
         scale = 2;
     }
     else {
         scale = 1;
     }
    }
}


function snakeGridLayout(){
 var elements = document.querySelectorAll(".step");
    var positionX = 100;
    var positionY = 100;
    var numberOfColumns = 4; 
    var rowType = "even"
    for (var index = 0; index < elements.length; index++) {
        elements[index].dataset.x=positionX;
        elements[index].dataset.y=positionY;
        if ((index+1)%numberOfColumns==0) {
            positionY = positionY + 1000;
            if(rowType=="even"){
                rowType = "odd"
                positionX = (1000 * (numberOfColumns -1)) + 100;
            } else {
                rowType = "even"
                positionX = 100;
            }
        }
        else {
            if(rowType=="even"){
                positionX = positionX + 1000;
            } else {
                positionX = positionX - 1000;
            }
        }
    }
}


function verticalGridLayout(){
    var elements = document.querySelectorAll(".step");
    var positionX = 100;
    var positionY = 100;
    var numberOfColumns = 4
    for (var index = 0; index < elements.length; index++) {
    elements[index].dataset.x=positionX;
    elements[index].dataset.y=positionY;
    if ((index+1) %numberOfColumns==0) {
    positionX = positionX + 1000;
    positionY = 100;
    }
    else {
      positionY = positionY + 1000;
    }
    }
}


function verticalLayout(){
  var elements = document.querySelectorAll(".step");
     var position = 100;
     for(var index=0; index<elements.length; index++)
     {
      elements[index].dataset.y=position;
      position = position + 1000;
     }
}