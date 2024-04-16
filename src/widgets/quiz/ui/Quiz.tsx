import { RadioGroup, Container, Radio, Text, Flex, Box } from '@mantine/core';
import { QuizItem } from 'src/entities';
import { useState } from 'react';

import cls from './Quiz.module.scss';

const genres = [
    {
        name:'Drama',
        icon:'🎭',
    },
    {
        name:'Comedy',
        icon:'🤹',
    },
    {
        name:'Action',
        icon:'🥷',
    },
    {
        name:'Thriller',
        icon:'🧟',
    },
    {
        name:'Science fiction',
        icon:'👨‍🔬',
    },
];
export const Quiz = () => {
    const [checkedGenre,setCheckedGenre] = useState('');
    return (
        <Box w='100%' mt={161}>
            <Text className={cls.title}>
                Your favorite movie genre?
            </Text>

            <Container className={cls.quiz_items}  size='responsive'>
                <RadioGroup required>
                    {
                        genres.map(genre =>
                            <>
                                <Container onClick={() => setCheckedGenre(genre.name)} className={cls.box}  size='responsive'>
                                    <Flex>
                                        <Box component='span' mr={16}>
                                            {genre.icon}
                                        </Box>
                                        <Text className={cls.genre}>
                                            {genre.name}
                                        </Text>
                                    </Flex>
                                    <Radio value={genre.name} color='#40BCA3' radius='xl' size='xs'>React</Radio>
                                </Container>
                            </>
                            // <QuizItem
                            //     setCheckedGenre={setCheckedGenre}
                            //     checkedGenre={checkedGenre}
                            //     key={g.name}
                            //     genre={g}
                            // />
                        )
                    }


                </RadioGroup>



            </Container>

        </Box>
    );
};

