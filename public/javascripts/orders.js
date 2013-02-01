$(function () {
  $('#neworderform').on('submit', function () {
    $.post("/order/create", $('#neworderform').serialize());
    $('#success').show();
    return false;
  })

  $('.destroyOrder').on('submit', function () {
    $.post("/orders/destroy", $(this).serialize());
    $(this).remove();
    return false;
  })
})