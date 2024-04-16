import { stepStore } from 'src/widgets/render-need-component';
import { TextInput, Button, Text, Box } from '@mantine/core';
import { observer } from 'mobx-react-lite';

import { moviesStore } from '../model/store.ts';
import cls from './SearchMovies.module.scss';


export const SearchMovies = observer(() => {
   
    return (
        <Box w='100%'>
            <Text className={cls.title}>
                Your favorite movie genre?
            </Text>
            <TextInput
                onChange={(e) => moviesStore.setSearchValue(e.target.value)}
                classNames={{ error:cls.error,input:cls.input }}
                value={moviesStore.searchValue}
                error={moviesStore.inputError}
                placeholder='Movie title here'
                size='xl'
            />
            <Button
                onClick={() => {
                    moviesStore.loadMovies();
                    if(!moviesStore.inputError) {
                        stepStore.nextStep();
                    }
                }}
                disabled={!moviesStore.searchValue}
                variant='green'
                size='full'
                mt={216}
            >
                    Continue
            </Button>
        </Box>
    );
});

