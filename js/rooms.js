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
            alert("ERROR" + xhr);
        }
     });
}

window.onload = function getAllRooms(){
    $.ajax({
        url: 'handler/getRooms.php',
        type: 'get',
        data: { 
        },
        success: function(response){
            if(response == "") {
                console.log(localStorage.getItem("id")+"aa");
                return 'a';
            }
            const data = JSON.parse(response);
            for (let i = 0; i < data.length; i++) {
                const id = data[i].id;
                const numberOfBeds = data[i].numberOfBeds;
                const pricePerDay = data[i].pricePerDay;
                displayRoom(id, numberOfBeds, pricePerDay);
            }
        },
        error: function(xhr){
            alert("ERROR" + xhr.status);
        }
     });
}

function displayRoom(id, numberOfBeds, pricePerDay){
    const roomContainer = document.createElement('div');
    roomContainer.classList.add('room');
    
    const beds = document.createElement('p');
    beds.textContent = "Beds: " + numberOfBeds;
    
    const price = document.createElement('p');
    price.textContent = "Price per day: " + pricePerDay;

    const date = document.createElement('input');
    date.type = 'date';
    date.id = 'date';
    const days = document.createElement('input');
    days.type = 'number';
    days.id = 'numberOfDays';

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Make reservation';
    addBtn.classList.add('btn');
    addBtn.setAttribute('onclick', `createReservation(${id})`);
    
    roomContainer.appendChild(beds);
    roomContainer.appendChild(price);
    roomContainer.appendChild(date);
    roomContainer.appendChild(days);
    roomContainer.appendChild(addBtn);
    
    const page = document.querySelector('.page');
    page.appendChild(roomContainer);
}