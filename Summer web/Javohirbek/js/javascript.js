 
     /**
 * Create canvas element, get context, set sizes
 * and append to main container.
 */
PrismSlider.prototype.addCanvas_ = function() {

    this.canvas = document.createElement('canvas');
  
    this.context = this.canvas.getContext('2d');
  
    this.canvas.width = this.settings.container.sizes.w;
    this.canvas.height = this.settings.container.sizes.h;
  
    this.container.appendChild(this.canvas);
  };


  $('#ca-container').contentcarousel({
	// speed for the sliding animation
	sliderSpeed		: 500,
	// easing for the sliding animation
	sliderEasing	: 'easeOutExpo',
	// speed for the item animation (open / close)
	itemSpeed		: 500,
	// easing for the item animation (open / close)
	itemEasing		: 'easeOutExpo',
	// number of items to scroll at a time
	scroll			: 1	
});