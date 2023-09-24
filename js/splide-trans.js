document.addEventListener( 'DOMContentLoaded', function() {

    var splide = new Splide( '.splide', {
      arrows: false,
      rewind: true,
      type: 'fade',
      paginationDirection: 'ttb',
    } );
    
    //This allows to add a number to each dot
    splide.on( 'pagination:mounted', function ( data ) {
      data.list.classList.add( 'splide__pagination--custom' );
      data.items.forEach( function ( item ) {
        item.button.textContent = String( item.page + 1 );
      } );
    } );

    
    splide.mount();
  } );