(function () {
    "use strict";
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    let selHeader = select('#header-service')
   
    if (selHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selHeader.classList.add('header-scrolled')
        } else {
          selHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
})() 