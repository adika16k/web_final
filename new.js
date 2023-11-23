const recipeLinks = document.querySelectorAll('#recipeContainer a');


function handleMouseOver() {
  this.style.color = 'white';
  this.style.fontSize = "25px";
  this.style.fontSizeAdjust = "20px";
  this.style.transition = "all 250ms";
  this.style.width="55%"
}
function handleMouseOut() {
  this.style.color = 'black';
  this.style.fontSize = "20px";
  this.style.fontSizeAdjust = "initial";
  this.style.transition = "all 250ms";
  this.style.width="45%"
}
recipeLinks.forEach(function (link) {
  link.addEventListener('mouseover', handleMouseOver);
  link.addEventListener('mouseout', handleMouseOut);
});
