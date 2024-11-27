var winw = $(window).width();
var doch = $(document).height();

$(window).scroll(function() {
  var current_pos = $(window).scrollTop();
  var new_width = (current_pos * winw) / doch;
  
  // Update the width of the element with the id 'bar'
  $('#bar').css('width', (new_width*2.4523-500) + 'px');
  
  // Log the width to the console
  console.log(new_width);
});
