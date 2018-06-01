<?php
  include('sql_lib.php');
	//Obtain all values from post.
	$runnerID = $_POST["RunnerID"];
	$eventID = $_POST["EventID"];
	$date = $_POST["Date"];
	$finishTime = $_POST["FinishTime"];
	$position = $_POST["Position"];
	$categoryID = $_POST["CategoryID"];
	$ageGrade = $_POST["AgeGrade"];
	$pb = $_POST["PB"];


  //sent the input data to the database
  $queryStart = "insert into Results (RunnerID, EventID, Date, FinishTime, Position, CategoryID, AgeGrade, PB) values ('";
  $queryEnd = "')";
  $myQuery = $queryStart . $runnerID . "', '" . $eventID . "', '" .  $date . "', '" .  $finishTime . "', '" .  $position . "', '" .  $categoryID . "', '" .  $ageGrade . "', '" . $pb . $queryEnd;

  //check the database if storaged data was success or failure
  $answer = mysql_query( $myQuery, $conn);

  if ($answer) {
  	echo "<h1>Success! Saving data:</h1>";
  }
  else {
  	echo "<h1>Failure. Could not save the following data:</h1>";
  }
  echo "<p>RunnerID = " . $runnerID . "</p>";
  echo "<p>EventID = " . $eventID . "</p>";
  echo "<p>Date = " . $date . "</p>";
  echo "<p>FinishTime = " . $finishTime . "</p>";
  echo "<p>Position = " . $position . "</p>";
  echo "<p>CategoryID = " . $categoryID . "</p>";
  echo "<p>AgeGrade = " . $ageGrade . "</p>";
  echo "<p>PB = " . $pb . "</p>";

?>