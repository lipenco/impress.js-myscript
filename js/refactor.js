function MoveElementsFromEachOtherX(distanceX, elements) {   
    var positionX = parseInt(elements[0].dataset.x);
    for (var index = 0; index < elements.length; index++) {
      positionX = positionX + distanceX;
      elements[index].dataset.x = positionX; 
    }
}

function MoveElementsFromEachOtherY(distanceY, elements) {   
    var positionY = parseInt(elements[0].dataset.y);
    for (var index = 0; index < elements.length; index++) {
      positionY = positionY + distanceY;
      elements[index].dataset.y = positionY; 
    }
}

function MoveElementsFromEachOtherZ(distanceZ, elements) {   
    var positionZ = parseInt(elements[0].dataset.z);
    for (var index = 0; index < elements.length; index++) {
      positionZ = positionZ + distanceZ;
      elements[index].dataset.z = positionZ; 
    }
}


function RescaleEveryTwoElements(scale, elements) {
    for (var index = 0; index < elements.length; index+=2) {
      elements[index].dataset.scale = 2; 
    }
}
 
function CreateGrid(numberOfColumns, elements) {
  for (var index = 0; index < elements.length; index++) {
        var positionY = parseInt(elements[0].dataset.y);
        var positionX = parseInt(elements[0].dataset.x);
        if ((index + 1) % numberOfColumns === 0) {
            MoveElementsFromEachOtherY(distanceY, elements);
        } else {
            MoveElementsFromEachOtherX(distanceX, elements);
        }
    }



function layoutLinear(distanceX, scale) {
      var elements = document.querySelectorAll(".step");
      if (!distanceX || distanceX < 1000) {
        distanceX = 1500;
      }
      elements[0].dataset.x = 0;
      RescaleEveryTwoElements(scale, elements) ;
      MoveElementsFromEachOtherX(distanceX, elements) ;
}


function layoutVertical(distanceY) {
    var elements = document.querySelectorAll(".step");
    if (!distanceY || distanceY < 700) {
        distanceY = 900;
    }
    elements[0].dataset.y = 0; 
    MoveElementsFromEachOtherY(distanceY, elements) ;
}


function layoutDeep(distanceZ) {
    var elements = document.querySelectorAll(".step");
    if (!distanceZ || distanceZ < 900) {
        distanceZ = 1000;
    }
    elements[0].dataset.z = 0; 
    MoveElementsFromEachOtherZ(distanceZ, elements) ;
}






