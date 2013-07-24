function layoutLinearStep( stepIndex, distance ) {
     var position = 0;
     if (!distance || distance < 900) {
     distance = 1500;
     } 
     position = position + distance;
  return { x: 1000 };
}

function layoutLinear(distance) {
    var elements = document.querySelectorAll(".step");
    for (var index = 0; index < elements.length; index++) {
      elements[index].dataset.x = layoutLinearStep( index, distance ); 
    }
}