var btn = document.getElementById("btn");
var msg;

//the event callback function
function eventCallback (e){
    msg.innerHTML = e.type;
}

//attach event handlers to the button
//for each of the four events mention the button
<script>
$( "p" )
  .mouseup(function() {
    $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" );
  })
  .mousedown(function() {
    $( this ).append( "<span style='color:#00f;'>Mouse down.</span>" );
  });
</script>