<?php
    class room {
        public $id;
        public $numberOfBeds;
        public $pricePerDay;
        
        public function __construct($id = null, $numberOfBeds = null, $pricePerDay = null){
            $this->id = $id;
            $this->numberOfBeds = $numberOfBeds;
            $this->pricePerDay = $pricePerDay;
        }
        
        public static function getRooms(mysqli $conn){
            $q = "SELECT * FROM hotel.room";
            return $conn->query($q);
        }
    }
?>