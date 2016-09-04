function show_data() {
	$("#table_header").html(null);
	$("#data").html(null);
	$("#loader").show();
	var url_path, tablename;
	[url_path, tablename] = create_path();
	var max_rows = Number($("#max_rows").val());
	if (max_rows == 0) {
		max_rows = Number.MAX_SAFE_INTEGER;
	}
	var username = $("#username").val();
	var password = $("#password").val();
	$.ajax({
		type: "GET",
	    headers: {
	        'Authorization': 'Basic ' + btoa(username + ':' + password)
	    },
	    timeout: 60000,
	    url: "https://shareddata.rmginfrastructure.net/" + url_path
	}).done(function(data) {
		if (tablename == "bookingpace") {
			if (data.booking_pace.length != 0) {
				var table_header = "Table: Booking Pace"
				var table = "<tr><th>Subscriber Prop ID</th><th>Stay Date</th><th>Transient Rooms Sold</th>" + 
							"<th>Group Rooms Sold</th><th>Total Rooms Sold</th><th>Total Capacity</th>" +
							"<th>Comp Transient Rooms Sold</th><th>Comp Group Rooms Sold</th><th>Comp Total Rooms Sold</th>" +
							"<th>Comp Capacity</th><th>Transient Rooms Sold LY</th><th>Group Rooms Sold LY</th>" +
							"<th>Total Rooms Sold LY</th><th>Total Capacity LY</th><th>Comp Transient Rooms Sold LY" +
							"<th>Comp Group Rooms Sold LY</th><th>Comp Total Rooms Sold LY</th><th>Occupancy %</th>" +
							"<th>Comp Occupancy %</th><th>Occupancy Index</th><th>Occupancy Index Change LY</th>" +
							"<th>Group Occupancy %</th><th>Comp Group Occupancy %</th><th>Group Occupancy % Change</th>" +
							"<th>Comp Group Occupancy % Change</th><th>Transient Occupancy %</th><th>Comp Transient Occupancy %</th>" +
							"<th>Transient Occupancy Index Change LY</th><th>Group Rooms Blocked</th><th>Comp Group Rooms Blocked</th>" +
							"<th>Group Rooms Blocked LY</th><th>Comp Group Rooms Blocked LY</th><th>Occupancy Index LY</th>" +
							"<th>Occupancy % Change</th><th>Comp Occupancy % Change</th><th>Transient Occupancy % Change</th>" +
							"<th>Comp Transient Occupancy % Change</th></tr>";
				$.each(data.booking_pace, function(index) {
					if (index < max_rows) {
						table += "<tr><td id = 'id'>" + data.booking_pace[index].property_id + "</td><td>" +
									data.booking_pace[index].stay_date + "</td><td>" + 
									data.booking_pace[index].transient_rooms_sold + "</td><td>" +
									data.booking_pace[index].group_rooms_sold + "</td><td>" +
									data.booking_pace[index].total_rooms_sold + "</td><td>" + 
									data.booking_pace[index].total_capacity + "</td><td>" +
									data.booking_pace[index].comp_transient_rooms_sold + "</td><td>" +
									data.booking_pace[index].comp_group_rooms_sold + "</td><td>" +
									data.booking_pace[index].comp_total_rooms_sold + "</td><td>" + 
									data.booking_pace[index].comp_capacity + "</td><td>" +
									data.booking_pace[index].transient_rooms_sold_ly + "</td><td>" +
									data.booking_pace[index].group_rooms_sold_ly + "</td><td>" +
									data.booking_pace[index].total_rooms_sold_ly + "</td><td>" +
									data.booking_pace[index].total_capacity_ly + "</td><td>" +
									data.booking_pace[index].comp_transient_rooms_sold_ly + "</td><td>" +
									data.booking_pace[index].comp_group_rooms_sold_ly + "</td><td>" +
									data.booking_pace[index].comp_total_rooms_sold_ly + "</td><td>" +
									data.booking_pace[index].occupancy_pct + "</td><td>" +
									data.booking_pace[index].comp_occupancy_pct + "</td><td>" +
									data.booking_pace[index].occupancy_index + "</td><td>" +
									data.booking_pace[index].occupancy_index_chg_ly + "</td><td>" +
									data.booking_pace[index].group_occupancy_pct + "</td><td>" +
									data.booking_pace[index].comp_group_occupancy_pct + "</td><td>" +
									data.booking_pace[index].group_occupancy_pct_chg + "</td><td>" +
									data.booking_pace[index].comp_group_occupancy_pct_chg + "</td><td>" +
									data.booking_pace[index].transient_occupancy_pct + "</td><td>" + 
									data.booking_pace[index].comp_transient_occupancy_pct + "</td><td>" +
									data.booking_pace[index].transient_occupancy_index_chg_ly + "</td><td>" +
									data.booking_pace[index].group_rooms_blocked + "</td><td>" +
									data.booking_pace[index].comp_group_rooms_blocked + "</td><td>" +
									data.booking_pace[index].group_rooms_blocked_ly + "</td><td>" +
									data.booking_pace[index].comp_group_rooms_blocked_ly + "</td><td>" +
									data.booking_pace[index].occupancy_index_ly + "</td><td>" +
									data.booking_pace[index].occupancy_pct_chg + "</td><td>" +
									data.booking_pace[index].comp_occupancy_pct_chg + "</td><td>" +
									data.booking_pace[index].transient_occupancy_pct_chg + "</td><td>" +
									data.booking_pace[index].comp_transient_occupancy_pct_chg + "</td></tr>";
						index++;
					}
					else {
						return;
					}
				});
			}
			else {
				$("#loader").hide();
				$("#show_data_button").remove();
				$("#login_form").html(null);
				alert("Arguments do not match any data in the table.");
				return;
			}
		}
		else if (tablename == "bookingsummary") {
			if (data.property_rates.length != 0) {
				var table_header = "Table: Booking Summary"
				var table = "<tr><th>Property ID</th><th>Rate</th></tr>";
				$.each(data.property_rates, function(index) {
					if (index < max_rows) {
						table += "<tr><td id = 'id'>" + data.property_rates[index].property_id + "</td><td class = 'price'>$" + 
							data.property_rates[index].rate + "</td></tr>";
					}
					else {
						return;
					}
				});
			}
			else {
				$("#loader").hide();
				$("#show_data_button").remove();
				$("#login_form").html(null);
				alert("Arguments do not match any data in the table.");
				return;
			}
		}

		$("#loader").hide();
		$("#table_header").html(table_header);
		$("#data").html(table);

	}).fail(function() {
		$("#loader").hide();
		alert("Timeout occurred. Make sure arguments match data in the table.");
	});
}