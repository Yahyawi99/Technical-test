const output = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    output.push("Hello,");
  }

  if (i % 5 === 0) {
    output.push("World,");
  }

  if (i % 7 === 0) {
    output.push("Yoo, ");
  }
}

console.log(output.join(" "));
