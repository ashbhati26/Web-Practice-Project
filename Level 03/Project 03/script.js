const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function loadinganimation() {
    gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
  }
  loadinganimation();

function setupAccordion() {
  const items = document.querySelectorAll('.accordion button');
  function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  for (i = 0; i < items.length; i++) {
  items[i].setAttribute('aria-expanded', 'false');
  }
  if (itemToggle == 'false') {
  this.setAttribute('aria-expanded', 'true');
    }
  }
  items.forEach((item) => item.addEventListener('click', toggleAccordion));
}
setupAccordion();
