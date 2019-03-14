$().ready(function(){
  $('.slick-carousel').slick({
    arrows: true,
    centerPadding: "0px",
		"fadeIn": 300,
  	"fadeOut": 10000,
    slidesToShow: 1,
    infinite: true
  });
	
	$('.profileImage').hide();
	
	var cw = $('.profileImage').width();
$('.profileImage').css({'height':cw+'px'});
	
});


function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
	
		toastr.info('Welcome, '+ profile.getName()+'!');
	
	$('.profileImage').css('background-image','url('+profile.getImageUrl()+')');
		
	$('.profileImage').show(500);

      }