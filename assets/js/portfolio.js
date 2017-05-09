$(document).ready(function () {
  var playlistId = 'PLLr5-AjGTuWnM5naw-PzbtvXHb85gsnne'
  var apiKey = 'AIzaSyBYTL6FQWLRjamxGKf6LtOFpwwnSQIkz3g'
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + playlistId + "&key=" + apiKey,
    success: function (data) {
      $(data.items).each(function (i) {
        $("#portfolio").append('<div class="modalButton" data-toggle="modal" data-src="https://www.youtube.com/embed/'+data.items[i].snippet.resourceId.videoId+'?autoplay=1" data-width="960" data-height="541" data-target="#modalVideo">' +
          '<img src="'+data.items[i].snippet.thumbnails.high.url+'" alt="'+data.items[i].snippet.title+'">'+
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
            items: 2
          },
          600: {
            items: 3
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
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
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
			$contactForm.append('<div class="alert alert-error">Ops, there was an error.</div>');
		}
	});
});

  


