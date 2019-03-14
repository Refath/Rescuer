$(document).ready(function(){
	
	$(".startingInstruction").hide();
	$(".instructionOne").hide();
	$(".instructionTwo").hide();
	$(".instructionThree").hide();
	$(".instructionFour").hide();
	$(".instructionFive").hide();
	
	$(".locHeader").hide();
	$(".location").hide();
	$("iframe").hide();
	$(".subOne").hide();
	$(".subTwo").hide();
	$(".subThree").hide();
	$(".subFour").hide();
	
$(".mainCircle").bind('click',function(){

	$(".subOne").slideToggle(250);
	$(".subTwo").slideToggle(250);
	$(".subThree").slideToggle(250);
	$(".subFour").slideToggle(250);

	$(".subOne").toggleClass('activeOne');
	$(".subTwo").toggleClass('activeTwo');
  $(".subThree").toggleClass('activeThree');
	$(".subFour").toggleClass('activeFour');

});

$(".subOne").bind('click',function(){	

	$(".subFour").toggle();	
	$(".subTwo").toggle();	
	$(".subThree").toggle();	
	$("iframe").toggle();

	$.get("https://ipinfo.io", function (response) {
    $("#ip").html("IP Address: " + response.ip);
    $("#address").html("<br> Your location: "+response.region);
}, "jsonp");
	
	$(this).toggleClass("dark");
	
	$(".locHeader").toggle();
	$(".location").toggle();
	$(".subThree").toggleClass("newHangUpLocation")
	
	$('.item3').toggleClass('unify');
	$('.item1').toggleClass('unify');
	
	$('.mainCircle').toggleClass('callBackground');
	$('.subTwo').toggleClass('downBackground');
	$('.subThree').toggleClass('hangUpBackground');
 
	$(".subThree").bind('click',function(){
		$(this).toggleClass('subThreeHangUp');
	});
	
	$(".mainCircle").bind('click',function(){
		$(this).toggleClass('mainCircleCall');
		$(this).css('border','2px red solid')
		$(".subOne").show();
		$(".subTwo").show();
		$(".subThree").toggle();
		$(".subFour").toggle();
	});
	
});
	
	$(".subThree").bind('click',function(){
		//$(this).toggle();
		//$(".item1").toggle();
		//$(".item2").toggle();
		//$(".item3").toggle();
		$(".item4").toggle();
		
		$(".startingInstruction").toggle();

  if ( $('.item3').css('visibility') == 'hidden' )
    $('.item3').css('visibility','visible');
  else
    $('.item3').css('visibility','hidden');
		
	if ( $('.item2').css('visibility') == 'hidden' )
    $('.item2').css('visibility','visible');
  else
    $('.item2').css('visibility','hidden');
		
	$ (".mainCircle").bind('click',function(){
				
			$(".item4").toggle();
			
		if ( $('.item3').css('visibility') == 'hidden' )
				$('.item3').css('visibility','visible');
			else
				$('.item3').css('visibility','hidden');

			if ( $('.item2').css('visibility') == 'hidden' )
				$('.item2').css('visibility','visible');
			else
				$('.item2').css('visibility','hidden');

	});
	
		$('.subOne').toggle();
		$('.subTwo').toggle();
		$('.subThree').toggle();
		$('.subFour').toggle();
		
		console.log( "ready!" );
		$begin = $('.startingInstruction').text();
		$one = $('.instructionOne').text();
		$two = $('.instructionTwo').text();
		$three = $('.instructionThree').text();
		$four = $('.instructionFour').text();
		$five = $('.instructionFive').text();
		console.log($begin);
	
		$(".instructionOne").hide();
		$(".instructionTwo").hide();
		$(".instructionThree").hide();
		$(".instructionFour").hide();
		$(".instructionFive").hide();

		if (annyang) {
  var commands = {
    'Begin CPR': function() {
alert("HOLA SENOR");			responsiveVoice.speak($begin,$('#voiceselection').val());
		},
		'Step 1': function() {
		
responsiveVoice.speak($one,$('#voiceselection').val());
					$(".instructionOne").show(300);
					$(".startingInstruction").css('display','none');
			$(".mainCircle").css('background','url("")');

		},
		'Step 2': function() {
				responsiveVoice.speak($two,$('#voiceselection').val());
							$(".instructionTwo").show(300);

		},
		'Step 3': function() {
					if ( $('.item2').css('visibility') == 'hidden' )
    $('.item2').css('visibility','visible');
  else
    $('.item2').css('visibility','hidden');
			responsiveVoice.speak($three,$('#voiceselection').val());
							$(".instructionThree").show(300);
},
		'Step 4': function() {
				if ( $('.item3').css('visibility') == 'hidden' )
				$('.item3').css('visibility','visible');
			else
				$('.item3').css('visibility','hidden');
				responsiveVoice.speak($four,$('#voiceselection').val());
						$(".instructionFour").show(300);

		},
		'Step 5': function() {
					$(".item4").toggle();
				responsiveVoice.speak($five,$('#voiceselection').val());
							$(".instructionFive").show(300);

		}
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
		
	});
});