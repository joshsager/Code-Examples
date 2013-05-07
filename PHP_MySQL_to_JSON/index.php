<?php


$link =mysql_connect("localhost","jsager2_student","student") or die( "not connected".mysql_error());
$db = mysql_select_db("jsager2_superbowl") or die("no database selected".mysql_error());


if(isset($_GET['type'])){
   $result = mysql_query("SELECT * from superbowl");
   $name = "superbowl";

   if($_GET['type']=="json"){
   	header("Content-Type: application/json");
   	$output = mysqlToJSON($result,$name);
     	echo "var json=".$output;
   }else if($_GET['type']=="xml"){
	header("Content-Type: application/xml");
	echo sqlToXml($result, "superbowls", "superbowl");
   }
}else{
     outputText();
   }


function mysqlToJSON($query,$name) {
	$obj = array($name => array());
	while ($row = mysql_fetch_assoc($query)){
	   $obj[$name][] = $row;
	}
	return json_encode($obj);
}

/* THANKS TO http://code.activestate.com/recipes/576499-converting-mysql-queries-to-xml/ 
For this conversion of MySQL to XML
*/

function sqlToXml($queryResult, $rootElementName, $childElementName)
{ 
    $xmlData = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?>\n"; 
    $xmlData .= "<" . $rootElementName . ">";
 
    while($record = mysql_fetch_object($queryResult))
    { 
        /* Create the first child element */
        $xmlData .= "<" . $childElementName . ">";
 
        for ($i = 0; $i < mysql_num_fields($queryResult); $i++)
        { 
            $fieldName = mysql_field_name($queryResult, $i); 
 
            /* The child will take the name of the table column */
            $xmlData .= "<" . $fieldName . ">";
 
            /* We set empty columns with NULL, or you could set 
                it to '0' or a blank. */
            if(!empty($record->$fieldName))
                $xmlData .= $record->$fieldName; 
            else
                $xmlData .= "null"; 
 
            $xmlData .= "</" . $fieldName . ">"; 
        } 
        $xmlData .= "</" . $childElementName . ">"; 
    } 
    $xmlData .= "</" . $rootElementName . ">"; 
 
    return $xmlData; 
}


/* T E X T */
function outputText(){
  $query = "select * from superbowl";
  $result = mysql_query($query);
  while ($row=mysql_fetch_array($result, MYSQL_ASSOC)){
    foreach($row as $key=>$value){
      print "<strong>$key:</strong> $value<br/>";
    }
    print "<br/>";
  }
}


?>