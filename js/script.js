"use strict";

let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt("How many films have ou already seen?", "");
		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("How many films have ou already seen?", "");
		}
	},
	rememberMyFilms: function() {
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
	},
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("You have watched not enought movies.");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("You are a good viewer.");
        } else if (personalMovieDB.count >= 30) {
            alert("You are a movie buff");
        } else {
            alert("Error occured.");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i <= 2; i++) {
            personalMovieDB.genres[i] = prompt(`Your favourite genre ${i + 1}`);
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
