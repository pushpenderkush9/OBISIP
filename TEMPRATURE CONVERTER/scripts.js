function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;

    let celsius, fahrenheit, kelvin;

    if (inputUnit === 'celsius') {
        celsius = inputValue;
        fahrenheit = (inputValue * 9/5) + 32;
        kelvin = inputValue + 273.15;
    } else if (inputUnit === 'fahrenheit') {
        celsius = (inputValue - 32) * 5/9;
        fahrenheit = inputValue;
        kelvin = celsius + 273.15;
    } else if (inputUnit === 'kelvin') {
        celsius = inputValue - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = inputValue;
    }

    document.getElementById('resultCelsius').textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('resultFahrenheit').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('resultKelvin').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
}
