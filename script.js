function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result = 0;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (inputTemp * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            result = inputTemp + 273.15;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (inputTemp - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            result = (inputTemp - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = inputTemp - 273.15;
        } else if (toUnit === "fahrenheit") {
            result = (inputTemp - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}
