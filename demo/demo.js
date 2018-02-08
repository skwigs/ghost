/* Update the size & width displayed in the DOM once the page has loaded. */
$(window).ready(function(){
  var currentWidth = $(window).width();
  updateWidth(currentWidth);
  updateSize(currentWidth);
});

/* Update the size & width displayed in the DOM every time the browser window is resized. */
$(window).resize(function(){
  var currentWidth = $(window).width();
  updateWidth(currentWidth);
  updateSize(currentWidth);
});

/* Update the DOM with the current window width. */
updateWidth = function(width) {
  $("#demo-width").text(width + 'px');
}

/* Update the DOM with the current window size. */
updateSize = function(width) {
  var demoSize = '';
  /* if statements are up to 20-30x faster than switch statements when comparing value ranges. */
  if (width < 600) { demoSize = 'Extra Small ( < 600px )'; }
  if (width >= 600 && width < 960)  { demoSize = 'Small ( 600px < 959px )'; }
  if (width >= 960 && width < 1264)  { demoSize = 'Medium ( 960px < 1263px )'; }
  if (width >= 1264 && width < 1904)  { demoSize = 'Large ( 1264px < 1903px )'; }
  if (width >= 1904)  { demoSize = 'Extra Large ( > 1904px )'; }
  $("#demo-size").text(demoSize);
}

/* Toggle the display of all elements for training purposes. */
$("#behaviorToggle").click(function(){
  if($('#behaviorDefault').is(':checked')) { $('div.box').removeClass('show-all'); }
  if($('#behaviorShowAll').is(':checked')) { $('div.box').addClass('show-all'); }
});
