

const color = 'red';

function start() {
  const color ='blue';
  console.log(color);
}

console.log(start()); // output: 'blue', blue is a local variable in the function start()
console.log(color);// output: 'red', remember that red is a glbal variable