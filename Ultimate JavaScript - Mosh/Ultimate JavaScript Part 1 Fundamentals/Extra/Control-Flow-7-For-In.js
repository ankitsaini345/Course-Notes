

const colors = ['red', 'green', 'blue'];

for(let color of colors)
console.log(color);// output:  ['red', 'green', 'blue'];

/* console.log(colors)
red
blue
gree

*/

for(let index in colors)
console.log(index, colors[index]);
/*
0 read
1 green
2 blue
*/