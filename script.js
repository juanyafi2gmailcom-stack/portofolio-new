function typeEffect(element){
  const text = element.textContent;
  element.textContent = "";

  text.split("").forEach((char,i)=>{
    const span = document.createElement("span");
    span.textContent = char;
    element.appendChild(span);

    setTimeout(()=>{
      span.classList.add("show");
    }, i * 20);
  });
}

document.querySelectorAll(".typing").forEach(el=>{
  typeEffect(el);
});

function revealOnScroll(){
  document.querySelectorAll(".reveal").forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if(a.getAttribute("href") === "#" + current){
      a.classList.add("active");
    }
  });
});
// Reveal animation
function revealOnScroll(){
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el=>{
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);