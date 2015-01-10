/***
* Closures bind values at the very last minute.
***/
function makeTargetAssigner( sharks, targets ){
  
  return function ( name ) {
    for ( var i = 0; i<sharks.length; i++ ) {
      if ( sharks[i] == name ) {
        alert("What's up, " +
              sharks[i] +
              "!" +
              "\nThere've been " +
              targets[i] +
              " sightings in our 'hood!" +
              "\nTime for a swim-by lasering, homie!"
             );
      }
    }
  };
}
var listOfSharks = ["Sea Pain", "Great Wheezy",
                    "DJ Chewie", "Lil' Bitey",
                    "Finmaster Flex", "Swim Khalifa",
                    "Ice Teeth", "The Notorious J.A.W."];
var listOfTargets = ["icicle bat", "snow yeti",
                     "killer penguin", "frost tiger",
                     "polar bear", "iceberg",
                     "blue witch", "wooly mammoth"];

var getTargetFor = makeTargetAssigner(  listOfSharks,
                                        listOfTargets );
getTargetFor("Ice Teeth");
