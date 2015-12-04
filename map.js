//Entity this is the parent class
function Entity(){
    return {
      energy: 20,
      direction: 'n',
      originChar: 'E',
      act: function() {
          return {
            type: 'move',
            direction: this.direction
      };
    }
  };
}
//The wall element inherits from Entity
function Wall() {
  var self = new Entity();
  //override act
  self.act= false;
  //self.act = function(){
    //do nothing
 // };
  return self;
}
// Your code here


function Animal() {
  var self = new Entity();
  self.energy = 20;
  self.direction = 's';
  self.originChar = 'A';
  self.act = function() {
    return {
        type: 'move',
          direction: this.direction
      };
  };
  return self;
}


//plants 
function Plant() {
  var self = new Entity();
  self.energy = 1;
  self.originChar = "P";
  self.act = function(view) {

    //grow is default act
    var returnAction = {
        type: "grow"
      };
    var emptySpace = view.find(' ');
      if(self.energy > 30) {

        if(emptySpace) {
          //reproduce in empty space
          returnAction = {
           type: 'reproduce',
           direction: emptySpace 
          };
         }
      }
    //return action
    return returnAction;
  };
  return self;
}

//uncomment entities from the legend as you implement them
var legend = {
  "#": Wall,
  "E": Entity,
  "P": Plant,
  "A": Animal
};

//to add an entity to the map replace an empty character with your entitycharacter
var map =
["############################",
 "#####                 ######",
 "##                        ##",
 "#    ##                   ##",
 "#            E    ##       #",
 "#          P      ##       #",
 "#       A         ##       #",
 "#           #              #",
 "#           #              #",
 "#           ##             #",
 "##         ###           ###",
 "############################"];
var world = new LifelikeWorld(map, legend);

//Megaman EXECUTE! \o/
      
animateWorld(world);