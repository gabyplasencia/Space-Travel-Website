document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {

      arrows: false,
      rewind: true,
      type: 'fade',
      // height: '35rem',
    } );

    splide.mount();
  } );