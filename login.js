function login() {
	$("#show_data_button").remove();
	$("#login_form").html(null);
	$("#table_header").html(null);
	$("#data").html(null);

	var tablename = $("#tablename").val();

	if (tablename == "bookingpace") {
		var subscriber_prop_id = Number($("#subscriber_prop_id").val());

		if (subscriber_prop_id == '') {
			alert("Subscriber Property ID field is blank.");
			return;
		}
		if (Number.isInteger(subscriber_prop_id) == false || subscriber_prop_id < 0) {
			alert("Please enter a valid subscriber property id.");
			return;
		}
	}
	else if (tablename == "bookingsummary") {
		var zipcodes = $("#zipcodes").val();
		zipcodes = zipcodes.replace(/ /g, "");
		var date = $("#date").val();
		var property_id = Number($("#property_id").val());

		if (zipcodes == '') {
			alert("Zipcode field is blank.");
			return;
		}
		if (date == '') {
			alert("Date field is blank.");
			return;
		}
		for (i = 5; i < zipcodes.length; i+=6) {
			if (zipcodes[i] != ',') {
				alert("Please enter correct format for zipcodes string.");
				return;
			}
		}
		if (date.length != 10 || !(date[4] == '-' && date[7] == '-')) {
			alert("Please enter correct format for date.");
			return;
		}
		if (Number.isInteger(property_id) == false || property_id < 0) {
			alert("Please enter a valid property id.");
			return;
		}
	}

	$("#login_form").append("Username:<br><input id = 'username'><br>");
	$("#login_form").append("Password:<br><input type = 'password' id = 'password'><br>");
	$("#username").focus();
	$("#login_form").append("<button type = 'button' id = 'show_data_button' onclick = 'show_data()'>Show Data</button>");
}