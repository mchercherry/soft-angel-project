var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  percentPosition: false,
  groupCells: 3,
  contain: true,
  pageDots: false
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});


//var launch = 0;

//const IDEM = document.querySelectorAll('#IDEM');

//document.getElementById('IDEM').addEventListener(
//  'focus', e => {
//      var launch = 1;
//});

//if (launch = 2) {
//  window.location.href = "palm.html"};