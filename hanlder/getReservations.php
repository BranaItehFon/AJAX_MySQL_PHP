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

        $userID = $_COOKIE['user_id'];
        // $userID = 1;

        $res = reservation::getReservations($conn);

        $results = array();

        while($data = $res->fetch_assoc()){
            $id = $data['id'];
            $date = $data['date'];
            $numberOfDays = $data['numberOfDays'];
            $results[] = array('id' => $id, 'date' => $date, 'numberOfDays' => $numberOfDays);
            // $results[] = array('id' => $userID);
        }

        echo json_encode($results);
        // echo $userID;

        
    } catch(Exception $e){
        echo $e->getMessage() . "<br/>";
            while($e = $e->getPrevious()) {
                echo 'Previous exception: '.$e->getMessage() . "<br/>";
            }
    }
?>