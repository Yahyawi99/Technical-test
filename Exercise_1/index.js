for (let i; i <= 100; i++) {
  if (i % 3) {
    console.log("Hello, ");
    return;
  }

  if (i % 5) {
    console.log("World, ");
    return;
  }

  if (i % 7) {
    console.log("Yoo, ");
    return;
  }

  console.log(i);
}
