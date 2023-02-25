$(document).ready(function () {

  $('.block-info__height--height').text($('.main-block').height());
  $('.block-info__width--width').text($('.main-block').width());

  console.log('%c this is main scripts >> ', 'background:teal;color:white;');
  console.log('%c Height window >> ', 'background:teal;color:white;', $('.main-block').height());

});
$(window).resize(function () {

  $('.block-info__height--height').text($('.main-block').height());
  $('.block-info__width--width').text($('.main-block').width());

  console.log('%c Resize HEIGHT>> ', 'background:blue;color:white;', $('.main-block').height());
  console.log('%c Resize WIDTH>> ', 'background:orange;color:black;', $('.main-block').width());

});
