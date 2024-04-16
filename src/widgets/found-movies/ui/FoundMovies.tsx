import { AspectRatio, Button, Text, Box } from '@mantine/core';
import { NotFound } from 'src/entities/not-found';
import { observer } from 'mobx-react-lite';

import { moviesStore } from '../../search-movies/model/store.ts';
import cls from './FoundMovies.module.scss';
export const FoundMovies = observer(() => {
    if(moviesStore.isLoading){
        return <>Loading...</>;
    }
    if(moviesStore.isFoundMovie){
        return <NotFound/>;
    }
    return (
        <Box  w='100%'>
            <AspectRatio ratio={1 / 1.5}  maw={300} mx='auto' mb={20} mt={60}>
                <img
                    src={moviesStore.movie?.Poster}
                    className={ cls.poster }
                    alt='Poster'
                />
            </AspectRatio>
            <Text className={cls.title} mb={10}>
                Your favorite movie genre?
            </Text>
            <Text className={cls.year}>
                {moviesStore.movie?.Year}
            </Text>
            <Button
                variant='green'
                size='full'
                mt={20}
            >
                Complete
            </Button>
        </Box>
    );
});

