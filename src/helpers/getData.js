

export const getData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eea73271e59b202222b27878af61f65c&lang=es&units=metric`

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const nameCity = data.name
    const icon = data.weather[0].icon
    const description = data.weather[0].description
    const temperatura = data.main.temp
    const humidity = data.main.humidity
    const country = data.sys.country

    return {
        nameCity,
        icon,
        description,
        temperatura,
        humidity,
        country
    }
};