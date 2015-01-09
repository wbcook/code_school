/*****
/* Fun with closures.
*****/
function warningMaker( obstacle ){
  var count = 0;
  var zones = [];
  var list = "";
  return function ( number, location ) {
    count++;
    zones.push(location);
    list = list + "\n" + location + 
          " (" +
          number +
          ")";  

    alert("Beware! There have been " +
          obstacle +
          " sightings in the Cove today!\n" +
          number +
          " " +
          obstacle +
          "(s) spotted at the " +
          location +
          "!\n" +
          "This is Alert #" +
          count +
          " today for " +
          obstacle +
          " danger.\n" +
          "Current danger zones are: " +
          list
         );
  };
}

thisWarning = warningMaker("Ice Bat");
thisWarning(2, "Blizzard Shore");
thisWarning(3, "Ice Cove");
thisWarning(4, "Slippery Slope");
