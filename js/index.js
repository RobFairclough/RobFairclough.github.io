$("#home-button").click(function() {
  $(html, body).animate({
    scrolltop: $home-link.offset().top
  }, 2000);
});