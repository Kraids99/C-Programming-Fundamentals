const greet = document.getElementById("greet");
const hour = new Date().getHours();

if (hour < 12) greet.textContent = "Good Morning";
else if (hour < 18) greet.textContent = "Good Afternoon";
else greet.textContent = "Good Night";