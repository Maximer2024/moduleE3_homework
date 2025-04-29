function isPrime(num) {
  if (typeof num !== 'number' || num < 0 || num > 1000) {
    console.log('Данные неверны');
    return;
  }
  if (num === 0 || num === 1) {
    console.log('Не простое число');
    return;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log('Не простое число');
      return;
    }
  }
  console.log('Простое число');
}

isPrime(7);
isPrime(10);
isPrime(1001);
