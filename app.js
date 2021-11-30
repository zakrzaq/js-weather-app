window.addEventListener('load', () => {
  let long;
  let lat;

  // const temperatureDescription = document.querySelector('.temperature-description');
  const temperatureDegree = document.querySelector('.temperature-degree');
  // const locationTimezone = document.querySelector('.location-timezone');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
  
      long = position.coords.longitude;
      lat = position.coords.latitude;
      
      console.log(temperatureDegree.textContent)

      const api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`

      fetch(api)
        .then(res => { return res.json()})
        .then(data => {
          console.log(data);
          const temperature = data.hourly.temperature_2m[0];

          // Set dom elelemnts form API
          
          temperatureDegree.textContent = temperature;

        })            
    });
  }
});