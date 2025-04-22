const textList = ["Software Engineer ", "expert in C++ | Dart | Flutter | SQL ",];
const typingSpeed = 100; // typing speed in ms
const erasingSpeed = 50;
const delayBetween = 1500; // wait time before deleting

let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const target = document.getElementById("my-typer");
  if (!target) return;

  const currentText = textList[index];

  if (isDeleting) {
    target.textContent = currentText.substring(0, charIndex--);
  } else {
    target.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, delayBetween);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % textList.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
  }
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  if (window.scrollY > 0) {
      header.classList.add('sticky');
  } else {
      header.classList.remove('sticky');
  }
});

document.addEventListener("DOMContentLoaded", typeEffect);

