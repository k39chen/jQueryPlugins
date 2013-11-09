/**
 * jquery.smartImage.js
 *
 * @author Kevin Chen <k39chen@gmail.com>
 * @copyright 2013, Kevin Chen, All rights reserviced.
 */
$.widget("jQuery.smartImage", {
	options: {
		// ...
	},
	_create: function(){
		var self = this,
			el = self.element;
		
		el.addClass("smartImage");
		
		// ...
	},
	_setOptions: function(){
		this._superApply(arguments);
		this._create();
	},
	_setOption: function(key, value) {
		this._super(key, value);
	},
	_destroy: function() {
		var self = this,
			el = self.element;
			
		el.removeClass("smartImage");
		
		// ...
	}
});