function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US");
    document.getElementById("time").textContent = time;
}

updateTime();
setInterval(updateTime, 1000);