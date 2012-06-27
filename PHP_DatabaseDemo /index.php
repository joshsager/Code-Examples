<?php

function showDB(){
	$link = mysql_connect("localhost","root") or die("connection failed".mysql_error());
	$db =mysql_select_db("officeDB") or die("no db selected".mysql_error());
	$query ="SELECT * FROM employees";
	$result = mysql_query($query);
	
	while($row=mysql_fetch_array($result)){
		$fName = $row['fName'];
		$lName = $row['lName'];
		$position = $row['position'];
		
		echo "<p>";
		echo $fName."<br />";
		echo $lName."<br />";
		echo $position."<br />";
		echo "</p>";
	}
	
	mysql_close($link);
}
?>