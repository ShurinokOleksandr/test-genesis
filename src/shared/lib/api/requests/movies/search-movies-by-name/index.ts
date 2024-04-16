import { api } from 'src/shared/lib/api/instance';

import { NotFound,Movie } from './types.ts';

export const requestSearchMoviesByName = async (name: string ): Promise<NotFound | Movie> => {
    return api
        .get(`?t=${name}`)
        .json(json => json);
};