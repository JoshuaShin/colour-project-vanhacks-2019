// This is meant to change the colour of the top-left logo to the colour of the section we are currently on

var screen_height = document.documentElement.clientHeight
var extra_offset = 0.9

var about_top = $('#about').offset().top * extra_offset;
var service_top = $('#service').offset().top * extra_offset;
var beta_top = $('#beta').offset().top * extra_offset;
var join_top = $('#join').offset().top * extra_offset;
var story_top = $('#story').offset().top * extra_offset;
var contact_top = $('#contact').offset().top * extra_offset;


$(document).scroll(function() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos >= about_top && scrollPos < service_top) {
    $('#main-logo').css('background-color', '#16a3ee');
  } else if (scrollPos >= service_top && scrollPos < beta_top) {
    $('#main-logo').css('background-color', '#F0B750');
  } else if (scrollPos >= beta_top && scrollPos < story_top) {
    $('#main-logo').css('background-color', '#FF907B');
  } else if (scrollPos >= story_top && scrollPos < join_top) {
    $('#main-logo').css('background-color', '#9D8CFF');
  } else if (scrollPos >= join_top && scrollPos < contact_top) {
    $('#main-logo').css('background-color', '#00cc99');
  } else if (scrollPos >= contact_top) {
    $('#main-logo').css('background-color', '#DEB887');
  } else {
    $('#main-logo').css('background-color', '#F2F5FB');
  }
});
