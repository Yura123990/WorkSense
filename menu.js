(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-modal-open]"),
      closeMenuBtn: document.querySelector("[data-modal-close]"),
      menu: document.querySelector("[data-modal]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
    }
  })();