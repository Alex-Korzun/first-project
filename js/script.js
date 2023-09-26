'use strict'

let numberOfFilms;

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);
writeYourGenres();

function start() {
    numberOfFilms = +prompt("How many films have ou already seen?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have ou already seen?", "");
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const movieName = prompt("One of the last movies you watched?", ""),
            movieRate = prompt("How would you rate it?", "");
    
        if (movieName == null || movieRate == null ||
            movieName == "" || movieRate == "" || 
            movieName.length > 50) {
            i--;
        } else {
            personalMovieDB.movies[movieName] = movieRate;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("You have watched not enought movies.");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("You are a good viewer.");
    } else if (personalMovieDB.count >= 30) {
        alert("You are a movie buff");
    } else {
        alert("Error occured.")
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        personalMovieDB.genres[i] = prompt(`Your favourite genre ${i + 1}`);
    }
}
