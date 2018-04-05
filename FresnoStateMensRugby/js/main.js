/* ==========================================================================
   TABLE OF CONTENTS
    
	01. SIDR Close Menu on Resize
	02. SIDR Menu
	03. Tabs
	04. Parallax
	05. Fit Vids
	06. Fancybox
	07. Scroll Up
	08. HTML Media
	09. Mosaic Styles
	10. Owl Carousel
	11. Isotope Gallery
	12. Toggle
	13. Accordion
	14. Smooth Scroll
	15. Tool Tips
	16. Countdowns

   ========================================================================== */


/* 
01. SIDR CLOSE MENU ON RESIZE ______________________________________________ */
jQuery(window).resize(function() {
       jQuery.sidr('close', 'sidr-main');
});



$(document).ready(function() {


/* 
02. SIDR MENU ______________________________________________________________ */
$('#responsive-menu-button').sidr({
    name: 'sidr-main',
    source: '#navigation'
});
$('#sidr-id-closebtn').click(function() {
    $.sidr('close', 'sidr-main');
});




/* 
03. TABS ___________________________________________________________________ */
$("#tab-container1").cleanTabs({
	"speed": 400
});
$("#tab-container2").cleanTabs({
	"speed": 400
});




/* 
04. PARALLAX ________________________________________________________________ */
$(window).stellar()




/* 
05. FIT VIDS ________________________________________________________________ */
$(".body-wrapper").fitVids();




/* 
06. FANCYBOX ________________________________________________________________ */
$('.fancybox').fancybox(); 




/* 
07. SCROLL UP ________________________________________________________________ */
$.scrollUp({
    scrollName: 'scrollUp', 
    topDistance: '300',
    topSpeed: 300, 
    animation: 'fade',
    animationInSpeed: 200, 
    animationOutSpeed: 200,
    scrollText: '', 
    activeOverlay: false, 
 });  




/* 
09. MOSAIC STYLES _____________________________________________________________ */
$('.circle').mosaic({
	opacity		:	0.8			//Opacity for overlay (0-1)
});

$('.fade').mosaic();

$('.bar').mosaic({
	animation	:	'slide'		//fade or slide
});

$('.bar2').mosaic({
	animation	:	'slide'		//fade or slide
});

$('.bar3').mosaic({
	animation	:	'slide',	//fade or slide
	anchor_y	:	'top'		//Vertical anchor position
});

$('.cover').mosaic({
	animation	:	'slide',	//fade or slide
	hover_x		:	'400px'		//Horizontal position on hover
});

$('.cover2').mosaic({
	animation	:	'slide',	//fade or slide
	anchor_y	:	'top',		//Vertical anchor position
	hover_y		:	'80px'		//Vertical position on hover
});

$('.cover3').mosaic({
	animation	:	'slide',	//fade or slide
	hover_x		:	'400px',	//Horizontal position on hover
	hover_y		:	'300px'		//Vertical position on hover
});





/* 
10. OWL CAROUSEL ____________________________________________________________ */
var owl = $("#carousel-1");
 
 owl.owlCarousel({
     
 items : 4,
 itemsCustom : false,
 itemsDesktop : [1199,3],
 itemsDesktopSmall : [980,3],
 itemsTablet: [768,2],
 itemsTabletSmall: false,
 itemsMobile : [479,1],
 singleItem : false,
 itemsScaleUp : false,

 //Basic Speeds
 slideSpeed : 200,
 paginationSpeed : 800,
 rewindSpeed : 1000,

 //Autoplay
 autoPlay : false,
 stopOnHover : false,

 // Navigation
 navigation : true,
 navigationText : ["prev","next"],
 rewindNav : true,
 scrollPerPage : false,

 //Pagination
 pagination : true,
 paginationNumbers: false,

 // Responsive 
 responsive: true,
 responsiveRefreshRate : 200,
 responsiveBaseWidth: window,
     
 
});


$(".next").click(function(){
  owl.trigger('owl.next');
})
$(".prev").click(function(){
  owl.trigger('owl.prev');
})
$(".play").click(function(){
  owl.trigger('owl.play',1000);
})
$(".stop").click(function(){
  owl.trigger('owl.stop');
})





/* CAROUSEL */
var owl = $("#carousel-single");

  owl.owlCarousel({
     
     items : 1,
     pagination : false,
     singleItem : true,
     itemsScaleUp : false,
     slideSpeed : 300,
     paginationSpeed : 400,
     autoHeight:true,
 
  });
  




/* 
11. ISOTOPE GALLERY ________________________________________________________________ */ 
var $container = $('#thumb-gallery');
  
    $container.isotope({
      masonry: {
        columnWidth: 1 //was 26
      },
      sortBy: 'number',
      getSortData: {
        number: function( $elem ) {
          var number = $elem.hasClass('element') ? 
            $elem.find('.number').text() :
            $elem.attr('data-number');
          return parseInt( number, 10 );
        },
        alphabetical: function( $elem ) {
          var name = $elem.find('.name'),
              itemText = name.length ? name : $elem;
          return itemText.text();
        }
      }
    });
     
       
var $optionSets = $('.option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });
      
      
  // initialize Isotope after all images have loaded
  var $container = $('#thumb-gallery').imagesLoaded( function() {
    $container.isotope({
      // options
    });
  }); 
  
  
  
 
 
/* 
12. TOGGLE ________________________________________________________________ */	  
$('.toggle-btn').click(function(e){
e.preventDefault();
$(this).closest('li').find('.toggle-content').not(':animated').slideToggle();
});

// Add Class for Toggle
$(".toggle-btn").click(function () {
$(this).toggleClass("active");
});







/* 
13. ACCORDION ________________________________________________________________ */	  
$('.accordion-btn').click(function(e){
	e.preventDefault();
	$this = $(this);
	$thisAccordionContent = $this.closest('li').find('.accordion-content');
	var currentStatus = "";
	if ($this.attr('class').indexOf('active') != -1) {
		currentStatus = "active";
	}
	//first close all and remove active class
	$this.closest('.accordion').find('li').each(function(index) {
		$thisLi = $(this);
		$thisLi.find('.accordion-btn').removeClass('active');
		$thisLi.find('.accordion-content').slideUp('400', function() {
			$(this).removeClass('active');
		});
	});
	if (currentStatus != "active") {
		$thisAccordionContent.not(':animated').slideDown();
		$this.addClass('active');
		$thisAccordionContent.addClass('active');
	}
});
 	
 	 
  



/* 
14. SMOOTH SCROLL ________________________________________________________________ */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
  
  
  
  
  
  
/* 
15. TOOL TIPS ________________________________________________________________ */
$('.tooltip').tooltipster({
	contentAsHTML: true,
	animation: 'fade', /* fade, grow, swing, slide, fall */
	delay: 150,
	touchDevices: true,
	trigger: 'hover',
	position: 'top', /*right, left, top, top-right, top-left, bottom, bottom-right, bottom-left */
});






/* 
16. COUNTDOWNS ________________________________________________________________ */

var matchDates = [
      "September 9, 2017 13:00:00",
      "October 7, 2017 13:00:00",
      "October 14, 2017 13:00:00",
      "October 21, 2017 13:00:00",
      "October 28, 2017 13:00:00",
      "November 4, 2017 13:00:00",
      "December 2, 2017 13:00:00",
      "December 9, 2017 13:00:00",
      "January 20, 2018 13:00:00",
      "January 27, 2018 13:00:00",
      "February 3, 2018 13:00:00",
      "February 10, 2018 13:00:00",
      "February 17, 2018 13:00:00",
      "March 3, 2018 13:00:00",
      "March 10, 2018 13:00:00",
      "March 17, 2018 13:00:00",
      "March 31, 2018 13:00:00", 
      "October 15, 2018 13:00:00"
      ];

var today = new Date();
var i = 0;
for (; today > new Date(matchDates[i]); i++);
var endDate = matchDates[i];

$('.countdown.simple').countdown({ date: endDate });

$('.countdown.styled').countdown({
  date: endDate,
  render: function(data) {
    $(this.el).html("<div class='cd-years'>" + this.leadingZeros(data.years, 1) + " <span>years</span></div><div class='cd-days'>" + this.leadingZeros(data.days, 1) + " <span>days</span></div><div class='cd-hours'>" + this.leadingZeros(data.hours, 1) + " <span>hrs</span></div><div class='cd-mins'>" + this.leadingZeros(data.min, 1) + " <span>min</span></div><div class='cd-secs'>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
  }
});
        
                      

/* 
17. COUNTDOWNS ________________________________________________________________ */
$("#page-sticky").sticky({ topSpacing: 0 });			
     
// End Call	 
});



