function login() {
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username + password);
    $.ajax({
        url: 'handler/login.php',
        type: 'get',
        data: { 
            "username": username, 
            "password": password
        },
        success: function(response){
            if(response == "null"){
                alert("Wrong username or password");
            }
            else {
                location.href="rooms.html";
            }
        },
        error: function(xhr){
            alert("ERROR" + xhr.status);
        }
     });
}

function register(){
    $.ajax({
        url: 'handler/register.php',
        type: 'post',
        data: { 
            "username": document.getElementById("username").value,
            "password": document.getElementById("password").value
        },
        success: function(response){
            
        },
        error: function(xhr){
            alert("ERROR" + xhr);
        }
     });
  }