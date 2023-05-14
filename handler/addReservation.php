<?php
    require  "../model/reservation.php";
    
    session_start();
    $host = "localhost";
    $db = "hotel";
    $username = "root";
    $password = "";
    try{
    $conn = new mysqli($host, $username, $password, $db);
        
        if ($conn->connect_errno) {
            exit("Konekcija neuspesna: " . $conn->connect_errno);
        }
        $date = $_POST["date"];
        $numberOfDays = $_POST["numberOfDays"];
        $roomId = $_POST["roomId"];
        $userID = $_COOKIE['user_id'];

        reservation::addReservation($conn, $date, $numberOfDays, $roomId, $userID);
    } catch(Exception $e){
        echo $e->getMessage() . "<br/>";
            while($e = $e->getPrevious()) {
                echo 'Previous exception: '.$e->getMessage() . "<br/>";
            }
    }
?>