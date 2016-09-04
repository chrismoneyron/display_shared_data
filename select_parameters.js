function select_parameters() {
	$("#table_header").html(null);
	$("#data").html(null);
	$("#login_button").remove();
	$("#parameters_form").html(null);
	$("#no_parameters_message").html(null);
	$("#show_data_button").remove();
	$("#login_form").html(null);
	
	var tablename = $("#tablename").val();
	var max_rows = Number($("#max_rows").val());
	if (Number.isInteger(max_rows) == false || max_rows < 0) {
		alert("Please enter a valid number for maximum number of rows.");
		return;
	}
	if (tablename == "bookingpace") {
		//BookingPace parameters
		$("#parameters_form").append("Subscriber Property ID:<br><input id = 'subscriber_prop_id'><br>");
		$("#subscriber_prop_id").focus();
		$("#parameters_form").append("<button type = 'button' id = 'login_button' onclick = 'login()'>Submit</button>");
	}
	else if (tablename == "bookingsummary") {
		//BookingSummary parameters
		$("#parameters_form").append("String of zipcodes (separated by commas):<br><input id = 'zipcodes'><br>");
		$("#parameters_form").append("Date (YYYY-MM-DD):<br><input id = 'date'><br>");
		$("#parameters_form").append("Property ID:<br><input id = 'property_id'><br>");
		$("#zipcodes").focus();
		$("#parameters_form").append("<button type = 'button' id = 'login_button' onclick = 'login()'>Submit</button>");
	}
	else {
		alert("Please select a table.");
		return;
	}
}