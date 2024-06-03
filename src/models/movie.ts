export interface IMovie {
    id: string | number;
    name: string;
    alternativeName?: string;
    year: number;
    poster: {
        url: string;
        previewUrl: string;
    };
    description: string;
    ageRating: number | null;
    genres: [
        {
            name: string;
        }
    ];
}

export type IMovieFetch = {
    docs: IMovie[];
    total: number;
    limit: number;
    page: number;
    pages: number;
};
