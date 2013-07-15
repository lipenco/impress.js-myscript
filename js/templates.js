 

 1. vertical template:
<script>
 var elements = document.querySelectorAll(".step");
 var position = 100;
 for(var index=0; index<elements.length; index++)
 {
  elements[index].dataset.y=position;
  position = position + 1000;
 }
</script>


2. linear template
<script>
var elements = document.querySelectorAll(".step");
var position = 100;
for(var index=0; index<elements.length; index++)
{
 elements[index].dataset.x=position;
 position = position + 1000;
}
 </script>

3. z-data template
 <script>
var elements = document.querySelectorAll(".step");
var positionZ = 1000;
for (var index = 0; index < elements.length; index++) {
    elements[index].dataset.z=positionZ;
     positionZ = positionZ + 1200;
}
</script>

4. circle template
 <script>
var elements = document.querySelectorAll(".step");
var r = 2000;
for (var i = 0; i < elements.length; i++) {
  var phi = -i/(elements.length-1) * 2 * Math.PI;
  var x = r * Math.cos(phi);
  var y = r * Math.sin(phi);
  var rotation = phi/(2*Math.PI) * 360 ;
  elements[i].dataset.x = Math.round(x);
  elements[i].dataset.y = Math.round(y);
  elements[i].dataset.rotate = Math.round(rotation);
}
</script>



5. grid template (horizontal)
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


6. grid template (vertical)
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
