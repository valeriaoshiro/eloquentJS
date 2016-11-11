/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

console.log("Looping a triangle");
var triangle = "";
for(var i = 1; i<= 7; i++){
  triangle += "#";
  console.log(triangle);
}