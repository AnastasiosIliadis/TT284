<!doctype html>
<head>
</head>
<body>
<h1>Success !</h1> 
</body>
</html>
<?php
  include('sql_lib.php');

	//get all values from post.
	$includeAgeGrade = $_POST["IncludeAgeGrade"];
	$sortBy = $_POST["SortBy"];
	$sortIn = $_POST["SortIn"];

  //Creation of SQL query to be sent to the database.
  $myQuery = $mySqlQuery = "select * from Results order by " . $sortBy . " " . $sortIn;

  $result = mysql_query( $myQuery, $conn);

  $output = "<table border=1> <tr> <th> RunnerID </th> <th> EventID </th> <th> Date </th> <th> FinishTime </th> <th> Position </th> <th> CategoryID </th>"; 
  if ($includeAgeGrade) {
  	$output =  $output . "<th> AgeGrade </th>";
  }

  $output =  $output . "<th> PB </th>";

  echo $output;
  while ( $row = mysql_fetch_array($result) ) {
		echo "<tr><td>";
		echo $row['RunnerID'];
		echo "</td><td>";
		echo $row['EventID'];
		echo "</td><td>";
		echo $row['Date'];
		echo "</td><td>";
		echo $row['FinishTime'];
		echo "</td><td>";
		echo $row['Position'];
		echo "</td><td>";
		echo $row['CategoryID'];
		echo "</td><td>";

		if ($includeAgeGrade) {
			echo $row['AgeGrade'];
			echo "</td><td>";
		}

		echo $row['PB'];
		echo "</td></tr>";
	}
	echo "</table>";

?>
