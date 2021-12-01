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

var page = 0;
var whee = 0;

const today = document.querySelector('#donthurtme');
const log = scrollY;

document.onscroll = update;

document.addEventListener('scroll', function(e) {
  update();
});

function update(e) {
  var whee = log;
  if (whee = 5000) {
    var page = 3
  };
}

//if (page = 3) {
//  window.location.href = "palm.html"
//};
