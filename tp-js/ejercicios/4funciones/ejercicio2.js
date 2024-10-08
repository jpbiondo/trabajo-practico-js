function convertirCelsiusAFahrenheit(gradosCelcius) {
    return gradosCelcius*1.8 + 32;
}

let gradosCelcius = 30;
console.log( `${gradosCelcius}°C son equivalentes a ${convertirCelsiusAFahrenheit(gradosCelcius)}°F`);