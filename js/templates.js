 

 vertical template:
<script>
 var elements = document.querySelectorAll(".step");
 var position = 100;
 for(var index=0; index<elements.length; index++)
 {
  elements[index].dataset.y=position;
  position = position + 1000;
 }
</script>


linear template
<script>
var elements = document.querySelectorAll(".step");
var position = 100;
for(var index=0; index<elements.length; index++)
{
 elements[index].dataset.x=position;
 position = position + 1000;
}
 </script>


circle template
 <script>
var elements = document.querySelectorAll(".step");
var r = 2000;
for (var i = 0; i < elements.length; i++) {
  var phi = -i/(elements.length-1) * 2 * Math.PI;
  var x = r * Math.cos(phi);
  var y = r * Math.sin(phi);
  var rotation = phi/(2*Math.PI) * 360 - 90;
  elements[i].dataset.x = Math.round(x);
  elements[i].dataset.y = Math.round(y);
  elements[i].dataset.rotate = Math.round(rotation);
}

</script>

grid template (horizontal)
<script>
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
</script>


grid template (vertical)
<script>
var elements = document.querySelectorAll(".step");
var positionX = 100;
var positionY = 100;
for (var index = 0; index < elements.length; index++) {
    elements[index].dataset.x=positionX;
    elements[index].dataset.y=positionY;
  if ((index+1) %4==0) {
      positionX = positionX + 1000;
      positionY = 100;
    }
  else {
      positionY = positionY + 1000;
    }
}
</script>
