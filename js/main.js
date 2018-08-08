// loosely based on https://bootsnipp.com/snippets/featured/bootstrap-pricing-slider-mobile-touch-ui

$(function () {
  // set up sliders
  $('div#slider').slider({
    min: 1,
    max: 8,
    value: 1,
    slide: function (event, ui) {
      update(1, ui.value);
    }
  });

  $('div#slider2').slider({
    min: 1,
    max: 7,
    value: 1,
    slide: function (event, ui) {
      update(2, ui.value);
    }
  });

  // set initial values
  $("#hours").text(1);
  $("#days").text(1);

  update();
});

function update(slider, val) {
  var $hours = slider == 1 ? val : $("#hours").text();
  var $days = slider == 2 ? val : $("#days").text();

  // calculate the mastery years
  $total = Math.round((10000 / (($hours * $days) * 52)) * 10) / 10;

  // update the slider text
  $('#hours').text($hours);
  $('#days').text($days);
  $('#total').text($total + ' years');

  // make sure to use the proper terms
  if ($hours > 1) {
    $('span#hourText').text('hours');
  } else {
    $('span#hourText').text('hour');
  }
  if ($days > 1) {
    $('span#dayText').text('days');
  } else {
    $('span#dayText').text('day');
  }

  $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $hours + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
  $('#slider2 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $days + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}