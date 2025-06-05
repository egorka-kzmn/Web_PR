function Films(commands) {
    const movies = [];

    for (const command of commands) {
        if (command.startsWith('addMovie')) {
            const name = command.slice(9).trim();
            movies.push({ name });

        } else if (command.includes(' directedBy ')) {
            const [name, director] = command.split(' directedBy ').map(part => part.trim());
            const movie = movies.find(m => m.name === name);
            if (movie) {
                movie.director = director;
            }

        } else if (command.includes(' onDate ')) {
            const [name, date] = command.split(' onDate ').map(part => part.trim());
            const movie = movies.find(m => m.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }

    const validMovies = movies.filter(movie => movie.director && movie.date);


    validMovies.forEach(movie => {console.log(JSON.stringify(movie));});
}

const input = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
];

Films(input);
