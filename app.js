import RouterHandler from './router.js'

// change header link to white color when active
window.onhashchange = () => {
  setActiveLink();
}

function setActiveLink() {
  const links = document.querySelectorAll('.header-link');
  links.forEach(link => {
    const linkPath = link.getAttribute('href');
    const currentPath = window.location.hash;
    if(currentPath === linkPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  })
}

class App {
  constructor() {
    new RouterHandler();
  }
}

new App();