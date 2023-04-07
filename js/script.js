
// for background fade effect when scrolling through website
let x = document.querySelector(".info-text").offsetTop;
window.onscroll = function() {
  if (window.scrollY > 0) {
 var opac = (window.scrollY / x - 0.1);
    document.body.style.background = "linear-gradient(rgba(37, 42, 52, " + opac + "), rgba(37, 42, 52, " + opac + ")), url(./images/adrien-olichon-RCAhiGJsUUE-unsplash.jpg) no-repeat";
  }
}

document.querySelector('#down-link').addEventListener('click', () => {
  console.log("It was clicked");
  document.querySelector('#down-link').classList.add('down-invisible');
})