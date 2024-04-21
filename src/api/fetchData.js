export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
        return null;
    }
}

export function getCountries(data) {
    if (!data || !data.data) {
        console.error('Invalid data format');
        return [];
    }
    const countries = data.data.map(entry => entry.country);
    return Array.from(new Set(countries));
}

export function getCitiesWithCountries(data) {
    if (!data || !data.data) {
        console.error('Invalid data format');
        return [];
    }

    const citiesWithCountries = data.data.map(entry => ({
        city: entry.city,
        country: entry.country
    }));
    return Array.from(citiesWithCountries);
}