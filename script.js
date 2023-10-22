function updateWaterConsumption() {
    const waterConsumptionElement = document.getElementById("waterConsumption");

    // Make a GET request to ThingSpeak API
    const apiKey = 'LAFUEZRAICUDWSTN';
    const channelId = '2066678';
    const field = '1'; // Replace with the field number you're using

    fetch(`https://api.thingspeak.com/channels/2066678/fields/1.json?api_key=LAFUEZRAICUDWSTN&results=1`)
        .then(response => response.json())
        .then(data => {
            const latestData = data.feeds[0];
            waterConsumptionElement.innerHTML = `Water Consumption: ${latestData.field1} liters`;
        })
        .catch(error => {
            console.error(error);
        });
}

// Update data every 5 seconds (or as needed)
setInterval(updateWaterConsumption, 5000);

// Initial data load
updateWaterConsumption();
