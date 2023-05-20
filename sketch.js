var weight = [35, 38, 42, 45, 43, 34, 36, 41, 48, 32];
var sum = 0
var avr = 0

for (var i = 0; i <= 9; i++) {
  console.log(weight[i])
  sum = sum + weight[i]
}

console.log(sum)
avr = sum / weight.length
console.log(avr)




function setup() {
  createCanvas(400, 400);

}
function draw() {
  background(30);
}



