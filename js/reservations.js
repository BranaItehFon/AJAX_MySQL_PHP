// function createReservation(id){
//     let date = document.getElementById("date").value;
//     let numberOfDays = document.getElementById("numberOfDays").value;
//     $.ajax({
//         url: 'handler/addReservation.php',
//         type: 'post',
//         data: {
//             "date": date,
//             "numberOfDays": numberOfDays,
//             "roomId": id
//         },
//         success: function(response){

//         },
//         error: function(xhr){
//             alert("GRESKA" + xhr);
//         }
//      });
// }

function deleteReservation(id) {
  $.ajax({
    url: "handler/removeReservation.php",
    type: "delete",
    data: {
      id: id,
    },
    success: function (response) {
      // alert("Sacuvano" + response);
      window.location.reload();
    },
    error: function (xhr) {
      alert("GRESKA" + xhr);
    },
  });
}

function updateReservation(numberOfDays, id) {
  $.ajax({
    url: "handler/updateReservation.php",
    type: "put",
    data: {
      numberOfDays: numberOfDays,
      id: id,
    },
    success: function (response) {
      // alert("Saved: " + response);
      window.location.reload();
    },
    error: function (xhr) {
      alert("Error: " + xhr);
    },
  });
}

window.onload = function getAllReservations() {
  $.ajax({
    url: "handler/getReservations.php",
    type: "get",
    data: {
    },
    success: function (response) {
      if (response == "") {
        console.log(localStorage.getItem("id"));
        return "a";
      }
      console.log(response);
      const data = JSON.parse(response);
      for (let i = 0; i < data.length; i++) {
        const id = data[i].id;
        const date = data[i].date;
        const numberOfDays = data[i].numberOfDays;
        const pricePerDay = data[i].pricePerDay;
        const username = data[i].username;
        displayReservation(
          id,
          date,
          numberOfDays,
          username,
          pricePerDay * numberOfDays
        );
      }
    },
    error: function (xhr) {
      alert("ERROR" + xhr.status);
    },
  });
};

function displayReservation(id, date, numberOfDays, username, price) {
  const roomContainer = document.createElement("div");
  roomContainer.classList.add("room");

  const days = document.createElement("input");
  days.id = "days" + id;
  days.type = "number";
  days.value = numberOfDays;

  const dateArrival = document.createElement("p");
  dateArrival.textContent = "Date: " + date;

  const guestName = document.createElement("p");
  guestName.textContent = "Guest: " + username;

  const priceSum = document.createElement("p");
  priceSum.textContent = "Price: " + price;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete reservation";
  deleteButton.classList.add("btn");
  deleteButton.setAttribute("onclick", `deleteReservation(${id})`);

  const updateButton = document.createElement("button");
  updateButton.textContent = "Update reservation";
  updateButton.classList.add("btn");
  updateButton.addEventListener("click", function () {
    const newDays = document.getElementById("days" + id).value;
    updateReservation(newDays, id);
  });
  roomContainer.appendChild(days);
  roomContainer.appendChild(dateArrival);
  roomContainer.appendChild(priceSum);
  roomContainer.appendChild(guestName);
  roomContainer.appendChild(updateButton);
  roomContainer.appendChild(deleteButton);

  const page = document.querySelector(".page");
  page.appendChild(roomContainer);
}
