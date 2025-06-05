function Table(data) {
    return data.map(row => {
        const [town, latStr, lonStr] = row.split('|').map(item => item.trim());

        const latitude = parseFloat(latStr);
        const longitude = parseFloat(lonStr);

        const fLat = latitude.toFixed(2);
        const fLon = longitude.toFixed(2);

        return {
            town: town,
            latitude: fLat,
            longitude: fLon
        };
    });
}

const a = [
    'Moscow | 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'
];

Table(a).forEach(t => console.log(t));
