'use strict'

const numberOfFilms = +prompt("How many films have ou already seen?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movieName;
let movieRate;

for (let i = 0; i < 2; i++) {
    movieName = prompt("One of the last movies you watched?", "");
    movieRate = prompt("How would you rate it?", "");

    if (movieName == null || movieRate == null ||
        movieName == "" || movieRate == "" || 
        movieName.length > 50) {
        i--;
    } else {
        personalMovieDB.movies[movieName] = movieRate;
    }
}

if (personalMovieDB.count < 10) {
    alert("You have watched not enought movies.");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("You are a good viewer.");
} else if (personalMovieDB.count >= 30) {
    alert("You are a movie buff");
} else {
    alert("Error occured.")
}

console.log(personalMovieDB);
