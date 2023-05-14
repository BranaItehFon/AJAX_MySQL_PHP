function createReservation(id){
    let date = document.getElementById("date").value;
    let numberOfDays = document.getElementById("numberOfDays").value;
    $.ajax({
        url: 'handler/addReservation.php',
        type: 'post',
        data: {
            "date": date,
            "numberOfDays": numberOfDays,
            "roomId": id
        },
        success: function(response){
            
        },
        error: function(xhr){
            alert("GRESKA" + xhr);
        }
     });
}

function deleteReservation(id){
    $.ajax({
        url: 'handler/removeReservation.php',
        type: 'delete',
        data: { 
            "id": id
        },
        success: function(response){
            // alert("Sacuvano" + response);
            window.location.reload();
        },
        error: function(xhr){
            alert("GRESKA" + xhr);
        }
     });
}

function updateReservation(numberOfDays, id){
    $.ajax({
        url: 'handler/updateReservation.php',
        type: 'put',
        data: { 
            "numberOfDays": numberOfDays,
            "id": id
        },
        success: function(response){
            // alert("Saved: " + response);
            window.location.reload();
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
                displayReservation(id, date, numberOfDays);
                // insertPostContainer(id, title, content, grade);
                // console.log();
            }
        },
        error: function(xhr){
            alert("GRESKA" + xhr.status);
        }
     });
}

function displayReservation(id, date, numberOfDays){
    const roomContainer = document.createElement('div');
    roomContainer.classList.add('room');
    
    // const beds = document.createElement('p');
    // beds.textContent = "Beds: " + numberOfBeds;
    
    // const price = document.createElement('p');
    // price.textContent = "Price per day: " + pricePerDay;

    const days = document.createElement('input');
    days.id = 'days'+id;
    days.type = 'number';
    days.value = numberOfDays;

    const dateArrival = document.createElement('p');
    dateArrival.textContent = "Date: " + date;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete reservation';
    deleteButton.classList.add('btn');
    deleteButton.setAttribute('onclick', `deleteReservation(${id})`);


    // const newDays = document.getElementById('days'+id);

    // const updateButton = document.createElement('button');
    // updateButton.textContent = 'Update reservation';
    // updateButton.classList.add('btn');
    // updateButton.setAttribute('onclick', `updateReservation(${id})`);
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update reservation';
    updateButton.classList.add('btn');
    updateButton.addEventListener('click', function() {
    const newDays = document.getElementById('days' + id).value;
    updateReservation(newDays, id);
});
    
    // const likeButton = document.createElement('button');
    // likeButton.textContent = 'Like';
    // likeButton.classList.add('btn');
    // likeButton.setAttribute('onclick', `like(${id})`);
    // const date = document.createElement('input');
    // date.type = 'date';
    // date.id = 'date';
    // const days = document.createElement('input');
    // days.type = 'number';
    // days.id = 'numberOfDays';

    // const addBtn = document.createElement('button');
    // addBtn.textContent = 'Delete reservation';
    // addBtn.classList.add('btn');
    // addBtn.setAttribute('onclick', `deleteReservation(${id})`);
    
    // roomContainer.appendChild(beds);
    // roomContainer.appendChild(price);
    roomContainer.appendChild(days);
    roomContainer.appendChild(dateArrival);
    roomContainer.appendChild(updateButton);
    roomContainer.appendChild(deleteButton);
    
    const page = document.querySelector('.page');
    page.appendChild(roomContainer);
}