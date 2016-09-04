function create_path() {
	var tablename = $("#tablename").val();
	var airdna_base_path = "airdna/v1/";
	var d360_base_path = "d360/v1/";
	var path;
	if (tablename == "bookingpace") {
		path = d360_base_path + "booking_pace/?subscriber_prop_id=" + $("#subscriber_prop_id").val();
	}
	else if (tablename == "bookingsummary") {
		var zipcodes = $("#zipcodes").val().replace(/ /g, "");
		path = airdna_base_path + "booking_summary/?zipcode=" + zipcodes + "&date=" + $("#date").val(); /* + "&propertyId=" + $("#propertyId").val(); */
	}

	return [path, tablename];
}