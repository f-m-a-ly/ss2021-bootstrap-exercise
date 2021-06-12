var getUserName = prompt("Hey there! Please enter your name so my website can greet you!");

console.log("The user entered the following: " + getUserName);

if(getUserName === "") {
    alert("You didn't give us a name! Now, I can't greet you :(");
    document.getElementById("username").innerText = ", nameless person >:(";
}
else { // so if getUserName is not empty
    document.getElementById("username").innerText = getUserName;
}
