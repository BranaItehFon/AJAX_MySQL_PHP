<?php
    require  "../model/room.php";

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

        $res = room::getRooms($conn);

        $results = array();

        while($data = $res->fetch_assoc()){
            $id = $data['id'];
            $numberOfBeds = $data['numberOfBeds'];
            $pricePerDay = $data['pricePerDay'];
            $results[] = array('id' => $id, 'numberOfBeds' => $numberOfBeds, 'pricePerDay' => $pricePerDay);
        }

        echo json_encode($results);

        
    } catch(Exception $e){
        echo $e->getMessage() . "<br/>";
            while($e = $e->getPrevious()) {
                echo 'Previous exception: '.$e->getMessage() . "<br/>";
            }
    }
?>