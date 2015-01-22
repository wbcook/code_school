var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: { name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
  ranger3: { name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: { name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};
function relieveDuty( vehicle, day ){
  var onDuty = [];
  var offDuty = [];
  for ( var i=1; i<=vehicle.numRangers; i++){
    if ( vehicle["ranger" + i].dayOff == day ) {
      offDuty.push(vehicle["ranger" + i]);
    }
    else {
      onDuty.push(vehicle["ranger" + i]);
    }
    delete vehicle["ranger" + i];
  }
  vehicle.numRangers = onDuty.length;
  for (var j=1; j<=vehicle.numRangers; j++){
    vehicle["ranger" + j] = onDuty[j];
  }
  return offDuty;
}
var offToday = relieveDuty( vehicle3, "Friday" );
console.log(offToday);
