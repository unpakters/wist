$('#click_test').click(function() {
	$(this).text('clicked');
});

$('#wait_test').click(function() {
	var $this = $(this);

	setTimeout(function(){
		$this.text('clicked');
	}, 1000);
});

$('#enable_tweet_button').click(function() {
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="http://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
});

$('#alert_test').click(function() {
	alert('alert');
});

$('#test_wait_til_element_visible').click(function() {
  var $this = $(this);
  $this.hide();

  setTimeout(function() {
    $this.show();
  }, 1000);
});

$('#test_set_value_and_trigger_evts').change(function () {
  $(this).val('changed');
});

$('#test_set_input_and_press_enter').keydown(function (e) {
  if (e.which === 13) alert('enter pressed');
});

$('#finder_with_wait').click(function () {
  var $this = $(this);

  setTimeout(function () {
    $this.addClass('done');
  }, 1000);
});

$('#click_by_text').click(function () {
  $(this).text('clicked');
});