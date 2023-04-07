// temporary fix, used to bring users to the top of the page on refresh
// instead of jumping to the anchor. ideally, the page would be reloaded without the anchor ID on the end
if (location.hash) {
  setTimeout(function() {

    window.scrollTo(0, 0);
  }, 1);
}
// for background fade effect when scrolling through website
let x = document.querySelector(".info-text").offsetTop;
window.onscroll = function() {
  if (window.scrollY > 0) {
 var opac = (window.scrollY / x - 0.1);
    document.body.style.background = "linear-gradient(rgba(37, 42, 52, " + opac + "), rgba(37, 42, 52, " + opac + ")), url(./images/adrien-olichon-RCAhiGJsUUE-unsplash.jpg) no-repeat";
  }
}

// to make down arrow disappear once it has been clicked
document.querySelector('#down-link').addEventListener('click', () => {
  document.querySelector('#down-link').classList.add('down-invisible');
})