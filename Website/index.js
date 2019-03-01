
function tabs(tabID, tabDiv) {
  // first of all we get all tab content blocks (I think the best way to get them by class names)
  var x = document.getElementsByClassName("tab");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'; // hide all tab content
  }
  document.getElementById(tabDiv).style.display = 'flex'; // display the content of the tab we need

  // now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
  var x = document.getElementsByClassName("btn");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].className = 'btn';
  }
  document.getElementById(tabID).className = 'btn btns active';
}