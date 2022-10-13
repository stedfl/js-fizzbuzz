



for (let i=1; i <= 100; i++) {
  const container = document.querySelector('.container')
  const box = document.createElement('div');
  box.className = 'box';
  container.append(box);
  if (!(i % 3) && !(i % 5)) {
    box.innerHTML = "FizzBuzz";
    box.classList.add('fizzbuzz-number')
  } else if (!(i % 5)) {
    box.innerHTML = "Buzz";
    box.classList.add('buzz-number')
  } else if (!(i % 3)) {
    box.innerHTML = "Fizz";
    box.classList.add('fizz-number')
  } else {
    box.innerHTML = i;
    box.classList.add('just-number')
  }
}