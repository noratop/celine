/**
 * Created by noratop on 2017-01-08.
 */
var Instafeed = require('instafeed.js');

var userFeed = new Instafeed({
    get: 'user',
    tagName: 'imback',
    userId: '992072343',
  resolution: 'low_resolution',
    accessToken: '741673670.e75f8b0.16f0e85373544f1f8510038115a0f64a'
});
userFeed.run();

console.log(userFeed);

// var $aboutMe = $('#aboutme');
//
// var $overlay = $('<div class="overlay"></div>');
// var $page = $('.page');
// $aboutMe.on('click', function () {
//     $page.append($overlay);
//     $overlay.fadeIn(100);
// });
//
// $overlay.on('click', function(evt) {
//     $overlay.fadeOut(100);
//     $page.remove($overlay);
//
//     // if (evt.target === evt.currentTarget) {
//     // }
// });

var $header = $('header');

$.fn.isOnScreen = function() {
    var viewport = {};
    viewport.top = $(window).scrollTop();
    viewport.bottom = viewport.top + $(window).height();
    var bounds = {};
    bounds.top = this.offset().top;
    bounds.bottom = bounds.top + this.outerHeight();
    return ((bounds.top < viewport.top + 30) && (bounds.bottom > viewport.bottom - 30));
};

var $window = $(window);
var $home = $('#home');
var $about = $('#about');
var $portfolio = $('#portfolio');
var $instagram = $('#instagram');
$window.on("scroll load", function (){
  if ($portfolio.isOnScreen() || $instagram.isOnScreen()) {
    $header.addClass('dark');
  } else {
    $header.removeClass('dark');
  }

  if ($about.isOnScreen()) {
    $('.line').addClass('clear');
  } else {
    $('.line').removeClass('clear');
  }
});
