/*!
* Metal Gear Solid Codec.
* (c) 2013 Chris Tabor <dxdstudio@gmail.com>
* See license for more information
* <3
* https://github.com/christabor/metal-gear-codec/
*/

;(function($){
	$.fn.mgsCodec = function(options) {
		var defaults = {
			interval_speed: 300,
			animation_timeout: 1500,
			transcription: '.transcription p'
		},
		opts = $.extend(defaults, options),
		self = this,
		notes = this.find(opts.transcription),
		current_note = 0,
		volume_indicator = this.find('#svg-volume-indicator-total'),
		max_volume = volume_indicator.height();
		notes.hide();

		this.find('img').hide();

		function triggerClick() {
			// advance dialogue to next note
			notes.eq(current_note).fadeIn(200);

			// hide previous
			notes.eq(current_note).prevAll().hide(100);

			// increment forward
			current_note += 1;
			return;
		}

		function animateCodecBar() {
			// randomize the height of the bar to simulate volume
			volume_indicator.height(Math.random()*max_volume);
			return;
		}

		function init() {
			self.find('img').each(function(k, elem){
				var _elem = $(elem);
				_elem.fadeIn(400);
			});

			// show first note
			notes.eq(0).show();

			self.on('click', triggerClick);

			setTimeout(function(){
				setInterval(animateCodecBar, opts.interval_speed);
			}, opts.animation_timeout);
			return;
		}

		this.hide().slideToggle(200, init);
	};
})(jQuery);
