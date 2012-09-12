<?php
header("Content-Type: text/xml");
print(file_get_contents("http://labs.joshsagermedia.com/dataSamples/index.php?type=xml"));
?>