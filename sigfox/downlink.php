<?php
   $_id = $_GET["id"];
   $_time = $_GET["time"];
   $_ack = $_GET["ack"];
   $_data = $_GET["data"];

   if ( $_ack == "true" ) {
     echo "{";
     echo "\"". $_id ."\" : { \"downlinkData\" : \"0102030405160708\" }";
     echo "}";
   } 
   ?>
