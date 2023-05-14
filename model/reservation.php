<?php
    class reservation {
        public $id;
        public $dateOfArrival;
        public $numberofDays;
        public $roomId;
        public $userId;
        public function __construct($id = null, $dateOfArrival=null, $numberofDays = null, $roomId = null, $userId = null){
            $this->id = $id;
            $this->dateOfArrival = $dateOfArrival;
            $this->numberofDays = $numberofDays;
            $this->roomId = $roomId;
            $this->userId = $userId;
        }
        public static function getReservations(mysqli $conn){
            $q = "SELECT * FROM hotel.reservations";
            return $conn->query($q)->fetch_assoc();
        }
        
        public static function addReservation(mysqli $conn, $date, $numberOfDays, $roomId, $userId){
            $q = "INSERT INTO hotel.reservations (date, numberOfDays, roomId, userId) VALUES ('$date', $numberOfDays, $roomId, $userId)";
            return $conn->query($q);
        }
        
        public static function removeReservation(mysqli $conn, $reservationId){
            $q = "DELETE FROM hotel.reservations WHERE reservationId = $reservationId";
            return $conn->query($q);
        }
        
        public static function updateReservation(mysqli $conn, $reservationId, $date, $numberOfDays){
            $q = "UPDATE hotel.reservations SET date = '$date', numberOfDays = $numberOfDays WHERE reservationId = $reservationId";
            return $conn->query($q);
        }
        
    }
?>