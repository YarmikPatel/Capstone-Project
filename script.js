function getWeather() {
    let city = document.getElementById("cityInput").value;

    if(city.trim() === ""){
        alert("Please enter a city");
        return;
    }

    let url = `https://wttr.in/${city}?format=%C+%t`;

    fetch(url)
    .then(response => response.text())
    .then(data => {
        document.getElementById("result").innerText = 
            `Weather in ${city}: ${data}`;
    })
    .catch(error => {
        document.getElementById("result").innerText = 
            "Couldn't fetch weather!";
    });
}
