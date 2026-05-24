// 🔑 STEP 1: API KEY (IMPORTANT)
const apiKey = "5e852f9b92071d2fa1560a52bf4da815";
// 👉 Replace with real OpenWeather API key

// 🌍 STEP 2: MAIN FUNCTION
async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();
    const result = document.getElementById("result");

    // ❗ Empty input check
    if (!city) {
        result.innerHTML = "⚠ Please enter a city name";
        return;
    }

    try {

        // 🌐 STEP 3: FETCH API
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        // ❌ STEP 4: HANDLE API ERRORS
        if (!response.ok) {
            throw new Error("City not found or Invalid API key");
        }

        // 📦 STEP 5: JSON PARSE
        const data = await response.json();

        // 🖥️ STEP 6: DISPLAY DATA
        result.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
        `;

    } catch (error) {

        // ❌ STEP 7: ERROR DISPLAY
        result.innerHTML = "Error: " + error.message;
    }
}