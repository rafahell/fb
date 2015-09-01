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
	pause_on_hover: false,
	resume_on_mouseout: false,
	bullets: false,
	timer: true,
	variable_height: false,
});

/* text rotator */
$(document).ready(function(){
	$(".demo1 .rotate").textrotator({
	  animation: "fade",
	  speed: 2500
	});
	$(".demo2 .rotate").textrotator({
	  animation: "flip",
	  speed: 1250
	});
	$(".demo3 .rotate").textrotator({
	  animation: "flipCube",
	  speed: 1500
	});

	$("#nav-toggle").click(function(){
		$("#menuInfo").slideToggle();
	});
});	

document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });