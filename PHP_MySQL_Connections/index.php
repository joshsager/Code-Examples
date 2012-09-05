<?php
	// CONNECTS TO THE DATABASE
	$link = mysql_connect("localhost","root"/*, "password goes here" */) or die("connection failed".mysql_error());
	
	$db =mysql_select_db("officeDB") or die("no db selected".mysql_error());
	// ----------------------^ name of your database

	$query ="SELECT * FROM employees"; // Query: Use MySQL language and syntax
	$result = mysql_query($query);
	
	// THIS LOOPS THROUGH ALL MATCHES TO THE QUERY
	while($row=mysql_fetch_array($result)){
		$fName = $row['fName'];
		$lName = $row['lName'];
		$position = $row['position'];
		
		// Print out results
		echo "<p>";
		echo $fName."<br />";
		echo $lName."<br />";
		echo $position."<br />";
		echo "</p>";
	}
	
	mysql_close($link);
?>