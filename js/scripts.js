$('.filters a').on('click', function() {
  $('.filters li').removeClass('active');
  $(this).parent('li').addClass('active');

  var cat = $(this).attr('data-filter');

  if (cat == 'all') {
    $('.products li').show();
  } else {
    $('.products li').hide();
    $('.products li[data-filter="' + cat + '"]').show();
  }
});