/* jshint devel:true */
console.log('TEST');


/* full width slider */
$(document).foundation('section').foundation('orbit', {
	animation: 'fade',
	timer_speed: 3000,
	animation_speed: 400,
	stack_on_small: false,
	navigation_arrows: false,
	slide_number: false,
	timer_progress_class:false,
	pause_on_hover: false,
	resume_on_mouseout: false,
	bullets: false,
	timer: true,
	variable_height: false
});

/* text rotator */
$(document).ready(function(){
	$(".textIntro").fadeIn('slow').delay(3450).fadeOut('slow');
	$(".showLogo").delay(4000).fadeIn('slow');

	$("#nav-toggle").click(function(){
		$(".navigation").css('height','65%');
		$(".navigation").toggleClass("topNavigation", 300);
		$("#menuInfo").slideToggle();
	});
});	

document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });


  