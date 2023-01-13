$(function () {
  var mixer = mixitup('.ourworks__works');
    $('.ourworks__item-btn').on('click', function () {
      $('.ourworks__item-btn').removeClass('ourworks__item-btn--active')
      $(this).addClass('ourworks__item-btn--active')
    })
  })
