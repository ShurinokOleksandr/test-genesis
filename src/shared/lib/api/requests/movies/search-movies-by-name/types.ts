export type Movie = {
    Ratings: { Source: string; Value: string }[];
    imdbRating: string;
    Production: string;
    Metascore: string;
    imdbVotes: string;
    BoxOffice: string;
    Released: string;
    Director: string;
    Language: string;
    Response: string;
    Runtime: string;
    Country: string;
    Website: string;
    Writer: string;
    Actors: string;
    Awards: string;
    Poster: string;
    imdbID: string;
    Title: string;
    Rated: string;
    Genre: string;
    Year: string;
    Plot: string;
    Type: string;
    DVD: string;
};
export type NotFound = {
    Response: string;
    Error: string;
}
