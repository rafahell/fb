/* jshint devel:true */
//console.log('TEST');

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

$(document).ready(function(){

	$(".textIntro").click(function(){
    $(this).fadeOut('slow');
	$(".showLogo").fadeIn('slow');
	});

	$(".showLogo").click(function(){
    $(this).fadeOut('slow');
	$(".textIntro").fadeIn('slow');
	});

	$(".textIntro").fadeIn('slow').delay(6450).fadeOut('slow');
	$(".showLogo").delay(7000).fadeIn('slow');

	$('#nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('.navigation').toggleClass('open');

    });
});	

/*custom buttom - modal*/
//$(document).foundation();
//$('a.custom-close').click(function(){
//  $('#food-menu').foundation('reveal', 'close');
//});