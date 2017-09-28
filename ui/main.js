//counter code
var button=document.getElementById('counter');

button.onClick = function () {
    //create request
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
    if (request.readystate === XMLHttpRequest.DONE ) {
        // Take some action.
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            console.log("things went perfect");
            console.log(span.innerHTML);
        }
    }
    // Not done yet

};
   // make the request 
   request.open('GET', 'http://lasyasam.imad.hasura-app.io/counter', true);
    request.send(null);
   
    
};