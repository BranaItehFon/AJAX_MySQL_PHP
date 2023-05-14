function createReservation(){
    let date = document.getElementById("date").value;
    let numberOfDays = document.getElementById("numberOfDays").value;
    $.ajax({
        url: 'handler/addReservation.php',
        type: 'post',
        data: {
            "date": date,
            "numberOfDays": numberOfDays
        },
        success: function(response){
            alert("Sacuvano" + response);

        },
        error: function(xhr){
            alert("GRESKA" + xhr);
        }
     });
}

function deleteReservation(id){
    $.ajax({
        url: 'handler/deleteReservation.php',
        type: 'delete',
        data: { 
            "id": id
        },
        success: function(response){
            alert("Sacuvano" + response);
        },
        error: function(xhr){
            alert("GRESKA" + xhr);
        }
     });
}

function update(numberOfDays, date){
    $.ajax({
        url: 'handler/updateReservation.php',
        type: 'put',
        data: { 
            "numberOfDays": numberOfDays,
            "date": date
            // "grade": 4
        },
        success: function(response){
            alert("Saved: " + response);
        },
        error: function(xhr){
            alert("Error: " + xhr);
        }
    });
}

window.onload = function getAllReservations(){
    $.ajax({
        url: 'handler/getReservations.php',
        type: 'get',
        data: { 
            // "userID": localStorage.getItem("id"),
            // "userID": $_COOKIE
        },
        success: function(response){
            if(response == "") {
                console.log(localStorage.getItem("id")+"aa");
                return 'a';
            }
            console.log(response)
            const data = JSON.parse(response);
            for (let i = 0; i < data.length; i++) {
                const id = data[i].id;
                const date = data[i].date;
                const numberOfDays = data[i].numberOfDays;
                // insertPostContainer(id, title, content, grade);
            }
        },
        error: function(xhr){
            alert("GRESKA" + xhr.status);
        }
     });
}

function getAllRooms(){
    $.ajax({
        url: 'handler/getRooms.php',
        type: 'get',
        data: { 
            // "userID": localStorage.getItem("id"),
            // "userID": $_COOKIE
        },
        success: function(response){
            if(response == "") {
                console.log(localStorage.getItem("id")+"aa");
                return 'a';
            }
            console.log(response)
            const data = JSON.parse(response);
            for (let i = 0; i < data.length; i++) {
                const id = data[i].id;
                const numberOfBeds = data[i].numberOfBeds;
                const pricePerDay = data[i].pricePerDay;
                // insertPostContainer(id, title, content, grade);
            }
        },
        error: function(xhr){
            alert("GRESKA" + xhr.status);
        }
     });
}