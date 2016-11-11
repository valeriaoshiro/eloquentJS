/*
Write a program that creates a string that represent an 8x8 grid, using
newline characters to separate lines. At each position of the grid there is either
a space or a "#" character. The characters should form a chess board.
*/

console.log("Chess Board");
var size = 8;

for(var i = 0; i < size; i++){
  var str = "";
  for(var j = 0; j < size; j++){
    if(i%2===0){ 
      str = str + ((j%2===0)?"#":" ");
    } else {
      str = str + ((j%2===0)?" ":"#");
    }
  }
  console.log(str);
}