function addGalleryEventListeners() {
    const gallery = document.getElementById('photoGallery');
    const images = gallery.getElementsByTagName('img');


    function handleMouseOver(event) {
      event.target.style.border = '2px solid red';
      console.log('Mouseover event triggered on:', event.target.alt);
    }

    function handleMouseLeave(event) {
      event.target.style.border = '2px solid transparent';
      console.log('Mouseleave event triggered on:', event.target.alt);
    }

    function handleFocus(event) {
      event.target.style.border = '2px solid green';
      console.log('Focus event triggered on:', event.target.alt);
    }

    function handleBlur(event) {
      event.target.style.border = '2px solid transparent';
      console.log('Blur event triggered on:', event.target.alt);
    }

    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener('mouseover', handleMouseOver);
      images[i].addEventListener('mouseleave', handleMouseLeave);
      images[i].addEventListener('focus', handleFocus);
      images[i].addEventListener('blur', handleBlur);
    }
  }

  function initializeGallery() {
    console.log('Gallery initialized.');
    addGalleryEventListeners();
  }

  window.onload = initializeGallery;