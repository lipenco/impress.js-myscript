function MoveElementsFromEachOther(distance, elements) {   
    var position = elements[0].dataset.x;
    for (var index = 0; index < elements.length; index++) {
      position = position + distance;
      elements[index].dataset.x = position; 
    }
}

function RescaleEveryTwoElements(scale, elements) {
    for (var index = 0; index < elements.length; index+=2) {
      elements[index].dataset.scale = 2; 
    }
}

 function layoutLinear(distance, scale) {
      var elements = document.querySelectorAll(".step");
      RescaleEveryTwoElements(scale, elements) ;
      MoveElementsFromEachOther(distance, elements) ;
}