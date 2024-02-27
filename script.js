const mcuShows = [
`Loki`,
`Moon Knight`
]

const starWarsShows = [
    `The Mandalorian`,
    `The Book of Boba Fett`
]

const disneyPlusShows = [...mcuShows, ...starWarsShows, `The Beatles: Get Back`]
console.log(disneyPlusShows);

const netflixMovies = {
    action: `Extraction`,
    crime: `The Irishman`
}

const amazonPrimeMovies = {
    action: `The Tomorrow War`,
    drama: `One Night In Miam`,
}

const streamingMovies = {...amazonPrimeMovies, 
    ...disneyPlusShows, 
    musical: `Hamilton`
}
console.log(streamingMovies);

const disneyJunior = [
    `Mickey Mouse Clubhouse`,
    `Spidey and His Amazing Friends`
]

const [Mickey, Spidey] = disneyJunior
console.log(Mickey, Spidey);

const avengers = {
    warMachine: `James Rhodes`,
    theHulk: `Bruce Banner`
}

const {warmachine, theHulk} = avengers
console.log(avengers);

const moreAvengers = {
    blackWidow: `Natasha Romanoff`,
    hawkeye:    `Clint Barton`,
    ironMan: `Tony Stark`
}

const {nat, ...others} = moreAvengers
console.log(nat, ...others);