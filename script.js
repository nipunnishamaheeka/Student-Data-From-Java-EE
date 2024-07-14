$(document).ready(function () {
    $("#studentForm").on("submit", function (event) {
        event.preventDefault();

        // Get Values from the form input
        var name = $("#name").val();
        var email = $("#email").val();
        var city = $("#city").val();
        var level = $("#level").val();
        var studentData = {
            name: name,
            email: email,
            city: city,
            level: level
        };

        console.log(studentData);
            
        // Create Json

        const studentJSON = JSON.stringify(studentData);
        console.log(studentJSON);

        // Introduce AJAX
        const http = new XMLHttpRequest()
        http.onreadystatechange = () => {
            if (http.readyState == 4) {
                if (http.status == 200) {
                    var responseTextJSON = JSON.stringify(http.responseText);
                    console.log(responseTextJSON);
                    
                } else {
                    console.error("Error Occured");
                    console.error("Status" + http.status);
                    console.error("Ready State" + http.readyState);
                }
                 
            } else {
                console.error("Ready State" + http.readyState);
                
             }
        
        }
        http.open("POST", "http://localhost:8080/app/student");
        http.setRequestHeader("Content-Type", "app/json")
        http.send(studentData);
    })
});
