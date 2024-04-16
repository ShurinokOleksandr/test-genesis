import { SearchMovies } from 'src/widgets/search-movies';
import { FoundMovies } from 'src/widgets/found-movies';
import { observer } from 'mobx-react-lite';
import { Quiz } from 'src/widgets/quiz';
import { ReactNode } from 'react';

import { stepStore } from '../model';

export const RenderNeedComponent = observer(() => {
    const component: {[key: number]: ReactNode} = {
        2: <SearchMovies/>,
        3: <FoundMovies/>,
        1: <Quiz />,
    };
    return (
        <>
            {component[stepStore.step]}
        </>
    );
});
