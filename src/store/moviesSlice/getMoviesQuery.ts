export const getMoviesQuery = (genresName: string) =>
    `/movie?page=1&limit=10&selectFields=name&selectFields=poster&selectFields=year&selectFields=type&selectFields=rating&selectFields=genres&selectFields=id&notNullFields=name&notNullFields=id&notNullFields=poster.url&year=2012&rating.imdb=7-10&genres.name=${genresName}`;
