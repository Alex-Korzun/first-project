const numberOfFilms = +prompt("How many films have ou already seen?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstMovieName = prompt("One of the last movies you watched?", "");
const rateFirst = prompt("How would you rate it?", "");
const secondMovieName = prompt("One of the last movies you watched?", "");
const rateSecond = prompt("How would you rate it?", "");

personalMovieDB.movies[firstMovieName] = rateFirst;
personalMovieDB.movies[secondMovieName] = rateSecond;

console.log(personalMovieDB);
