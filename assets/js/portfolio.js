$(document).ready(function () {
  var playlistId = 'PLLr5-AjGTuWnM5naw-PzbtvXHb85gsnne'
  var apiKey = 'AIzaSyBYTL6FQWLRjamxGKf6LtOFpwwnSQIkz3g'
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + playlistId + "&key=" + apiKey,
    success: function (data) {
      $(data.items).each(function (i) {
        $("#portfolio").append('<div class="modalButton view view-first" data-toggle="modal" data-src="https://www.youtube.com/embed/'+data.items[i].snippet.resourceId.videoId+'?autoplay=1" data-width="960" data-height="541" data-target="#modalVideo">' +
          '<img src="'+data.items[i].snippet.thumbnails.high.url+'" alt="'+data.items[i].snippet.title+'">'+
					'<div class="mask"><h2>'+data.items[i].snippet.title+'</h2><svg version="1.1" id="playyoutube" style="margin-top:40px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="100px" width="100px" viewbox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"> <path class="stroke-solid" fill="none" stroke="white" d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"></path><path class="stroke-dotted" fill="none" stroke="white" d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"></path><path class="icon" fill="white" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"></path></svg></div>'+
        '</div>');
      });
 
      iframeModalOpen();
      
      $('#portfolio').owlCarousel({
        autoplay: true,
        loop: true, 
        margin: 0,
        responsiveClass: true,
        nav: true,
        autoplayHoverPause: true, 
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          568: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 3
          }
        }
      });



      $('#price-cards').owlCarousel({
        loop:false,
        margin:35,
        dots: true,
        navigation:true,
        responsive:{ 
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
      })

      $('#client').owlCarousel({
        autoplay: true,
        loop:true,
        margin:35,
        dots: false,
        navigation:false,
        autoplayHoverPause: true, 
        responsive:{ 
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
      })
  
        $('#avis').owlCarousel({
        autoplay: true,
        loop:true,
				nav: true,
        animateOut: 'fadeOut',
        autoHeight:true,
        dots: false,
        navigation:false,
        autoplayHoverPause: true, 
        responsive:{ 
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
      })

        
        $('#infoo').owlCarousel({
        autoplay: true,
        loop:true,
        animateOut: 'fadeOut',
        autoHeight:true,
        dots: true,
        navigation:false,
        autoplayHoverPause: true, 
        responsive:{ 
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
      })

    }
  });
});


function iframeModalOpen(){
		$('.modalButton').on('click', function(e) {
			var src = $(this).attr('data-src');
      
			var width = $(this).attr('data-width') || 640; 
			var height = $(this).attr('data-height') || 360;

			var allowfullscreen = $(this).attr('data-video-fullscreen'); 
			
			$("#modalVideo iframe").attr({
				'src': src,
				'height': height,
				'width': width,
				'allowfullscreen':''
			});
		});

		$('#modalVideo').on('hidden.bs.modal', function(){
			$(this).find('iframe').html("");
			$(this).find('iframe').attr("src", "");
		});
	}



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href^="#stacked"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      console.log(target.offset())
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 1000, function() {

        });
      }
    }
  });



var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/info@mandalavideo.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert-success" role="alert">Sending message…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert-success" role="alert">Message sent !</div>');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		}
	});
});




jQuery(document).ready(function($){
	var latitude = 42.6886591,
		longitude = 2.8948331999999937,
		map_zoom = 6;
	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var marker_url = ( is_internetExplorer11 ) ? 'http://gdurl.com/Uibp' : 'http://gdurl.com/kVn2';
	var	main_color = '#0085a1', 
		saturation_value= -20,
		brightness_value= 5;
	var style= [ 
		{
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},  
	    {
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "off"}
	        ]
	    }, 
		{
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"} 
			] 
		},
		{
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"}
			] 
		},
		{
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		},
		{ 
			featureType: "transit", 
			elementType: "geometry.fill", 
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
			
		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}
	];
	var map_options = {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: true,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
    }
	var map = new google.maps.Map(document.getElementById('map'), map_options);		

	var perpignan = new google.maps.Marker({
	  	position: new google.maps.LatLng(latitude, longitude),
	    map: map,
	    visible: true
	});
	var area=new google.maps.Circle({
					map: map,
					center: map.getCenter(),
					clickable:false,
					radius: 165000,
					fillColor:'#cdd226',
					strokeWeight: 0,
					fillOpacity:0.5
		});		
});
 
  


