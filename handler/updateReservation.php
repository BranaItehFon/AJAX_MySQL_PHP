<?php
    require  "../model/reservation.php";

    session_start();
    $host = "localhost";
    $db = "hotel";
    $username = "root";
    $password = "";
    try {
        $conn = new mysqli($host, $username, $password, $db);
        
        if ($conn->connect_errno) {
            exit("Konekcija neuspesna: " . $conn->connect_errno);
        }
        
        if ($_SERVER["REQUEST_METHOD"] === "PUT") {
            parse_str(file_get_contents("php://input"), $put_vars);
            $id = $put_vars["id"];
            $numberOfDays = $put_vars["numberOfDays"];
            $res = reservation::updateReservation($conn, $id, $numberOfDays);
        }
    } catch(Exception $e) {
        echo $e->getMessage() . "<br/>";
        while ($e = $e->getPrevious()) {
            echo 'Previous exception: '.$e->getMessage() . "<br/>";
        }
    }
?>