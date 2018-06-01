<?php


  //Connect to my database
  $host = 'localhost'; //my local host
  $id = 'ai2662';  // my username
  $pwd = 'vEbXRtkY'; //my password
  $db = 'ai2662_db'; //my database name

  function connect_db($host, $id, $pwd, $db) {
    $connection = @mysql_connect($host, $id, $pwd)
      or die('connection problem:' . mysql_error());
    mysql_select_db($db)
      or die('db selection problem: ' . mysql_error());
    return $connection;
  }
  $conn = connect_db($host, $id, $pwd, $db);

?>