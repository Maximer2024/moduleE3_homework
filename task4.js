function printNumbers(from, to) {
  let current = from;

  const timerId = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

printNumbers(5, 15);