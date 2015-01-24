function Fencepost (x, y, postNum){
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [2,3];
}
Fencepost.prototype = {
  sendRopeTo: function ( connectedPost ){
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function ( removeTo ){
    var temp = [];
    for(var i = 0; i<this.connectionsTo.length; i++){
      if(this.connectionsTo[i].postNum != removeTo){
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function (x, y){
    this.x = x;
    this.y = y;
  },
  valueOf: function (){
  return Math.sqrt( this.x*this.x + this.y*this.y );
  }
};
Fencepost.prototype.toString = function() {
  var joinedPosts = this.connectionsTo.join('\n');
  return "Fencepost #" + this.postNum + ":" +
    "\nConnected to posts:" +
    "\n" + 
    joinedPosts +
    "\nDistance from ranch: " +
    this.valueOf() + " yards";
};
var post1 = new Fencepost(2,2,1);
var post2 = new Fencepost(4,4,2);

post1.toString();
