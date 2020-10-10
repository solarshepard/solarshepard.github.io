const preloader = document.querySelector('.preloader');
jQuery(function(){ //Add class to parent element to margin properly
	jQuery(".hb-lg").parent().addClass("hb-lg-margin");
	jQuery(".hb-md").parent().addClass("hb-md-margin");
	jQuery(".hb-sm").parent().addClass("hb-sm-margin");
	jQuery(".hb-xs").parent().addClass("hb-xs-margin");
})

jQuery(function(){ //Hover color accordingly as icon
	//Facebook
	jQuery( ".hb .fa-facebook,.hb .fa-facebook-square").parent().addClass("hb-facebook");
	jQuery( ".hb.inv .fa-facebook,.hb.inv .fa-facebook-square").parent().addClass("hb-facebook-inv").removeClass("hb-facebook");
})

