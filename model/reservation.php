<?php
    class reservation {
        public $id;
        public $dateOfArrival;
        public $numberOfDays;
        public $roomId;
        public $userId;
        
        public function __construct($id = null, $dateOfArrival = null, $numberOfDays = null, $roomId = null, $userId = null){
            $this->id = $id;
            $this->dateOfArrival = $dateOfArrival;
            $this->numberOfDays = $numberOfDays;
            $this->roomId = $roomId;
            $this->userId = $userId;
        }
        
        public static function getReservations(mysqli $conn) {
            $q = "SELECT r.id, r.date, r.numberOfDays, r.roomId, r.userId, u.username, ro.pricePerDay 
                  FROM hotel.reservation AS r
                  INNER JOIN hotel.user AS u ON r.userId = u.id
                  INNER JOIN hotel.room AS ro ON r.roomId = ro.id";
            return $conn->query($q);
        }
        
        // public static function addReservation(mysqli $conn, $date, $numberOfDays, $roomId, $userId){
        //     $q = "INSERT INTO hotel.reservation (date, numberOfDays, roomId, userId) 
        //           VALUES ('$date', $numberOfDays, $roomId, $userId)";
        //     return $conn->query($q);
        // }
        public static function addReservation(mysqli $conn, $date, $numberOfDays, $roomId, $userId){
            $q = "INSERT INTO `hotel`.`reservation` (`date`, `numberOfDays`, `roomId`, `userId`) VALUES ('$date', '$numberOfDays', '$roomId', '$userId')";
            return $conn->query($q);
        }
        
        
        public static function removeReservation(mysqli $conn, $reservationId){
            $q = "DELETE FROM hotel.reservation WHERE id = $reservationId";
            return $conn->query($q);
        }
        
        public static function updateReservation(mysqli $conn, $reservationId, $numberOfDays){
            $q = "UPDATE hotel.reservation SET numberOfDays = $numberOfDays WHERE id = $reservationId";
            return $conn->query($q);
        }
    }
?>