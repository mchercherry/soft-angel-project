var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  percentPosition: false,
  groupCells: 3,
  contain: true,
  pageDots: false,
  prevNextButtons: false,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

//------------modal moment------------

//Get modal element
const modal = document.querySelector('.mapbig');
//Get open modal button
const modalBtn = document.querySelector('#map');

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for outside click
window.addEventListener('click', clickOutside);

//Function to open modal
function openModal(){
  var expand = modal;
  expand.classList.add("visible");
}

//Function to close modal
function closeModal(){
  var expand = modal;
  expand.classList.remove("visible");
}

//Function to close modal if outside click
function clickOutside(e){
    if(e.target == modal){
      var expand = modal;
      expand.classList.remove("visible");
    }
}
