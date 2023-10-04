const output = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    output.push("Hello,");
  } else if (i % 5 === 0) {
    output.push("World,");
  } else if (i % 7 === 0) {
    output.push("Yoo,");
  } else {
    output.push(i + ",");
  }
}

console.log(output.join(" "));
