const preloader = document.querySelector('.preloader');

const fadeEffect = setInterval(() => {
  // if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
  } else {
    clearInterval(fadeEffect);
  }
}, 200);

window.addEventListener('load', fadeEffect);
  
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
}