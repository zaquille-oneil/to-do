$(function() {
	//upload your database to users.

	$(".music-filter").on("click", "button", function() {
		console.log("music clicked");
		// if ($("embed").css("src") == "audio.mp3"){
		// 	$("embed").css("src", "");
		// }
		// else {
		// 	$("embed").css("src","audio.mp3");
		// }
	})

	var imgId = 0;
	var currImage;
	$(".shuffler").on("click", "button", function() {
		console.log("shuffle clicked");
		if (imgId == 2) {
			imgId = 0;
		}
		else {
			imgId++;
		}
		switch(imgId) {
			case 0: currImage = "url('http://i.imgur.com/bDnPcxV.gif')";
				break;

			case 1: currImage = "url('https://media.giphy.com/media/oUFCO55rDr2Fi/giphy.gif')";
				break;

			case 2: currImage = "url('https://media.giphy.com/media/scCdwqIpwnnLq/giphy.gif')"
				break;
		}
		$("body").css("background-image", currImage);
	})

	var noteForm = $("#noteform");
	// var johnClass = $(".john-baek");
	$("#newnotebutton").on("click", function() {
		//all in the click event
		// confirm("jb is g");						//for a message to screen
		console.log("clicked");
		// if (noteForm.css("display") == "block") { 
		// 	noteForm.css("display", "none");
		// } 
		// else {
		// 	noteForm.css("display", "block");
		// }
		noteForm.slideToggle();
	});

	$("form").on("submit", function(e) {
		// .val() works for input boxes and text areas
		var titleValue = $("#notetitle").val();
		var bodyValue = $("#notebody").val();

		if (titleValue != '' && bodyValue != ''){
			console.log(titleValue,bodyValue);
			$("#notetitle").val('');
			$("#notebody").val('');

			//var x = prompt("test");					//prompt user for info
			var date = new Date();
			var month = date.getMonth()+1;
			var day = date.getDate();

			var meridiem = "am";
			if (date.getHours() >= 12) {
				meridiem = "pm";
			}

			var hours = date.getHours();
			if (date.getHours() > 12) {
				hours -= 12;
			}
			else if (date.getHours() == 0) {
				hours = 12;
			}

			var min = (date.getMinutes()<10 ? '0' : '') + date.getMinutes();

			var newDate =  hours + ":" + min + meridiem + '   ' + (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + date.getFullYear();
			$("#notewall").prepend("<h1 class='time-stamp'>"+ newDate + ' - ' + titleValue + "</h1>" + bodyValue);
			e.preventDefault();
			//noteForm.css("display", "none");
			noteForm.slideToggle();
		}
		else {
			if (titleValue == '' && bodyValue == ''){
				confirm("cant have a blank note.");
			}
			else if (titleValue == '') {
				confirm("u need a title.");
			}
			else {
				confirm("u need a body.");
			}
			e.preventDefault();
		}
		//put this note into the database.
	})
});