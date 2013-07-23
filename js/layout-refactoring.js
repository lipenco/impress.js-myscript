function layoutLinearStep( stepIndex, distance ) {
    // ....
     //var position = 100;
    //var scale = 1;
    //if (!distance || distance < 900) {
    //    distance = 1500;
    //} 
  //position = position + distance;
        //elements[index].dataset.scale = scale;
        //if (index % 2 === 0) {
        //    scale = 2;
        //} else {
        //    scale = 1;
        //}
  return { x: 1000, scale: 2 }
}

function layoutLinear(distance) {
    var elements = document.querySelectorAll(".step");

    for (var index = 0; index < elements.length; index++) {
      elements[index].dataset.x = layoutLinearStep( index, distance ); 
    }
}