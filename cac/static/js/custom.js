/*
	Easy plugin to get element index position
	Author: Peerapong Pulpipatnan
	http://themeforest.net/user/peerapong
*/

$.fn.getIndex = function(){
	var $p=$(this).parent().children();
    return $p.index(this);
}

/*
	Portfolio plugin to setup initial effects for portfolio page
*/
$.fn.portfolioInit = function(){
	$(this).each(function(){ 
		$(this).hover(function(){  
 			$(this).find('.hover_content:first').fadeIn();
 		}  
  		, function(){  
  		
  			$(this).find('.hover_content:first').fadeOut();
  		}  
  		
		);
	});
	
	$(this).click(function(){
 		$(this).find('a:first').click();
 		return false;
 	});
 	
 	// Setup vimeo video modal window for portfolio
	$('.portfolio_vimeo').fancybox({ 
		padding: 10,
		overlayColor: '#000000', 
		overlayOpacity: .7
	});
	
	$('.portfolio_youtube').fancybox({ 
		padding: 10,
		overlayColor: '#000000', 
		overlayOpacity: .7
	}); 
	
	$('.portfolio_image').fancybox({ 
		padding: 0,
		overlayColor: '#000000', 
		overlayOpacity: .7
	});
}

$(function(){ 
	
	// Setup main navigation menu
	$('.nav li a').each(function(){ 
		$(this).click(function(){
			
			$('.nav li a').removeClass('selected');
			$('.popup').css('display', 'none');
				
			$(this).addClass('selected');
				
			var popup = $(this).parent().find('.popup');
				
			//if has submenu
			if(popup.length > 0)
			{
				//get the position of the placeholder element
  				var pos = $(this).parent().offset();
  				var width = $(this).parent().width();
  				var popupPos = pos.left-80+(width/2)+1;

  				//show the menu directly over the placeholder
  				popup.css( { "left": popupPos + "px", "top":pos.top + 45 + "px" } );
  				popup.show();
  					
  				return false;
			}
		});
	});
	$(document).click(function(){
		$('.popup').css('display', 'none');
		$('.popup').parent().find('a').removeClass('selected');
	});
	
	// Setup testimonials content
	$('.testimonials_owner li a').each(function(){
		$(this).click(function(){
			var currentPos = $(this).parent().getIndex();
						
			$('#testimonials_triangle').animate({ 
    	    	backgroundPosition: (currentPos*95)+45 + "px 0"
    	  	}, 300 );
		
			$('.testimonials p').hide();
			$($(this).attr('href')).fadeIn();
			
			return false;
		});
	});
	
	// Setup image slider
	$('#img_slider').nivoSlider({ directionNav:true, pauseTime: 2000, captionOpacity: 0.5 });
	
	// Setup portfolio annimation
	var $preferences = {
    	duration: 800,
    	adjustHeight: false,
    	easing: 'easeInOutQuad',
    	useScaling: false
  	};					
				
	// clone applications to get a second collection
	var $data = $(".portfolio_container ul.portfolio_photos").clone();
				
	$('ul.portfolio_tab li').click(function(e) {
		$('ul.portfolio_tab li').removeClass('active');

		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
					
		if (filterClass == 'all') {
			var $filteredData = $data.find('li');
		} else {
			var $filteredData = $data.find('li[data-type=' + filterClass + ']');
		}
					
		$(".portfolio_container ul.portfolio_photos").quicksand($filteredData, $preferences, function(){
						
			$('ul.portfolio_photos li .wrapper').portfolioInit();
							
		});
					
		$(this).addClass('active');
						
		return false;
	});
	
	// Setup portfolio image preview link
	$('.portfolio_one_column .image').hover(function(){  
 			$(this).parent().find('.hover_content').fadeIn();
 			
 			$(this).click(function(){
 				$(this).find('a').click();
 			});
 		}  
  		, function(){  
  		
  			$(this).parent().find('.hover_content').fadeOut();
  		}  
  		
	);

});

$(document).ready(function(){ 

	$('ul.portfolio_photos li .wrapper').portfolioInit();
	
	// Setup skin switcher
	$('#nav_skin li a').click(function(){
		var skin = $(this).attr('href').substr(1);
		$.cookie("skin", skin);
		location.href = location.href;
		
		return false;
	});
	
	// Setup content slider
	//$('#content_slider').children('div').css('display', 'none');
	
	var it = setInterval(function(){
     	
     	if($('#slide_nav a.active').next().length > 0)
     	{
     		
     		var nextSlide = $('#slide_nav a.active').next();
     		var slideTarget = $('#slide_nav a.active').next().attr('href');
		
			// Remove all active slide
			$('#content_slider').children('div').removeClass('active_slide');
			$('#content_slider').children('div').css('display', 'none');
		
			$('#content_slider').children('div'+slideTarget).addClass('active_slide');
			$('#content_slider').children('div'+slideTarget).fadeIn();
			
			$('#slide_nav a').removeClass('active');
			nextSlide.addClass('active');
     		
     	}
     	else
     	{
     	
     		var slideTarget = $('#slide_nav a:first-child').attr('href');
		
			// Remove all active slide
			$('#content_slider').children('div').removeClass('active_slide');
			$('#content_slider').children('div').css('display', 'none');
		
			$('#content_slider').children('div'+slideTarget).addClass('active_slide');
			$('#content_slider').children('div'+slideTarget).fadeIn();
			
			$('#slide_nav a').removeClass('active');
			$('#slide_nav a:first-child').addClass('active');

     	}
     	 
    }, 7000);
	$('#slide_nav a').click(function(){
		var slideTarget = $(this).attr('href');
		
		// Remove all active slide
		$('#content_slider').children('div').removeClass('active_slide');
		$('#content_slider').children('div').css('display', 'none');
		
		$('#content_slider').children('div'+slideTarget).addClass('active_slide');
		$('#content_slider').children('div'+slideTarget).fadeIn();
		
		$('#slide_nav a').removeClass('active');
		$(this).addClass('active');
		
		clearInterval(it);
		
		return false;
	});
	
	
	// Preload images
	$.preloadCssImages();
	
	// Setup contact form
	$.validator.setDefaults({
		submitHandler: function() { 
		    var actionUrl = $('#contact_form').attr('action');
		    
		    $.ajax({
  		    	type: 'POST',
  		    	url: actionUrl,
  		    	data: $('#contact_form').serialize(),
  		    	success: function(msg){
  		    		$('#contact_form').hide();
  		    		$('#reponse_msg').html(msg);
  		    	}
		    });
		    
		    return false;
		}
	});
		    
		
	$('#contact_form').validate({
		rules: {
		    your_name: "required",
		    email: {
		    	required: true,
		    	email: true
		    },
		    message: "required"
		},
		messages: {
		    your_name: "Please enter your name",
		    email: "Please enter a valid email address",
		    agree: "Please enter some message"
		}
	});	
	

});
