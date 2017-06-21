

// Navigation position function

//var triggerheight = $(window).height() * 0.1;
var triggerheight = 50;
var $nav = $(".navbar");
var mobileheight = 250;
var $mlogo = $(".mobile-logo");

$(window).scroll(function() {
  if (this.scrollY > triggerheight) {
    $nav.addClass("fixed-nav");
  } else {
    $nav.removeClass("fixed-nav");
  }
});

$(window).scroll(function() {
  if (this.scrollY > mobileheight) {
    $mlogo.addClass("logo-active");
  } else {
    $mlogo.removeClass("logo-active");
  }
});


// Smooth scrolling function
$("nav a").click(function(){
	var href = $.attr(this, 'href');
	$('html, body').animate({
    	scrollTop: $($.attr(this, "href")).offset().top
	}, 500);
	return false;
});

$("a.button").click(function(){
	var href = $.attr(this, 'href');
	$('html, body').animate({
    	scrollTop: $($.attr(this, "href")).offset().top
	}, 500);
	return false;
});
//end



$(".nav-toggle").click(function(){
	$(this).toggleClass('open');
	$(".main-navigation").toggleClass('open');
});

$(".nav-link").click(function(){
	$(".nav-toggle").removeClass('open');
	$(".main-navigation").removeClass('open');
});

