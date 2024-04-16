import { stepStore } from 'src/widgets/render-need-component';
import { Container, Button, Text, Box } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { observer } from 'mobx-react-lite';
import { QuizItem } from 'src/entities';
import { genres } from 'src/shared';
import { useState } from 'react';

import cls from './Quiz.module.scss';

export const Quiz = observer( ( ) => {
    const [checkedGenre,setCheckedGenre] = useState('');
    const [, setLocalStoreGenre] = useLocalStorage({
        defaultValue: '',
        key: 'genre',
    });
    const moveNextStep = () => {
        stepStore.nextStep();
        setLocalStoreGenre(checkedGenre);
    };
    return (
        <Box w='100%' mt={80}>
            <Text className={cls.title}>
                Your favorite movie genre?
            </Text>
            <Container className={cls.quiz_items} size='responsive'  >
                {
                    genres.map(genre =>
                        <QuizItem
                            setCheckedGenre={setCheckedGenre}
                            checkedGenre={checkedGenre}
                            key={genre.name}
                            genre={genre}
                        />
                    )
                }
            </Container>
            <Button
                disabled={!checkedGenre}
                onClick={moveNextStep}
                variant='green'
                size='full'
            >
                Continue
            </Button>
        </Box>
    );
});

