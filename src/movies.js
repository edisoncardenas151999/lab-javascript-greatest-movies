// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    //   const unique = [];
  
    const directors = movies.map(movie => movie.director);
    //   .forEach(el => {
    //     if(!unique.includes(el)){
    //       unique.push(el)
    //     }
    //   })
    //   return unique;
    return directors;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(someMovies) {
    return someMovies.filter(
      movie =>
        movie.director === 'Steven Spielberg' &&
        movie.genre.includes('Drama')
    ).length;
  }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(lotsOfMovies) {
    //  return !lotsOfMovies.length ? 0 : Number((lotsOfMovies.reduce((a,b) => b.score? a + b.score : a, 0)/lotsOfMovies.length).toFixed(2));
    // this is the one line version
  
    if (!lotsOfMovies.length) {
      return 0;
    }
  
    let total = lotsOfMovies.reduce((total, current) => {
      if (current.score) {
        return total + current.score;
      } else {
        return total;
      }
    }, 0);
  
    // you can use Number() or parseFloat()
    return Number((total / lotsOfMovies.length).toFixed(2));
  }
    
    


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(someMovies) {
    let dramaMovies = someMovies.filter(movie =>
      movie.genre.includes('Drama')
    );
    return scoresAverage(dramaMovies);
  }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(sortedByYear) {
  
    };
   


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(sortByTittle) {
return sortByTittle.sort()
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


