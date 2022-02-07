

(() => {
  const mobileMenu = document.querySelector('.js-menu-container1');
  const openMenuBtn = document.querySelector('.js-open-menu1');
  
  
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
      openMenuBtn.classList.toggle('is-open');
  };

    openMenuBtn.addEventListener('click', toggleMenu);
  })
();
    
