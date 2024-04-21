async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
        return null;
    }
}

function getCountries(data) {
    if (!data || !data.data) {
        console.error('Invalid data format');
        return [];
    }
    const countries = data.data.map(entry => entry.country);
    return Array.from(countries);
}

function getCities(data) {
    if (!data || !data.data) {
        console.error('Invalid data format');
        return [];
    }
    const cities = data.data.map(entry => entry.city);
    return Array.from(cities);
}
