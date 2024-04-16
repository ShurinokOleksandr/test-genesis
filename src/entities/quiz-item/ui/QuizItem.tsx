import { CheckIcon, Container, Radio, Flex, Text, Box } from '@mantine/core';
import { useRef } from 'react';

import cls from './QuizItem.module.scss';

type QuizItem = {
    setCheckedGenre:(genre:string) => void
    checkedGenre:string
    genre:Genre
}
type Genre = {
    icon:string
    name:string
}
export const QuizItem = ({ setCheckedGenre,checkedGenre,genre }:QuizItem) => {
    const radioRef = useRef<HTMLInputElement>(null);

    const onCheckGenre = () => {
        setCheckedGenre(genre.name);
        radioRef?.current?.click();
    };
    return (
        <Container
            data-checked={checkedGenre === genre.name} onClick={onCheckGenre}

            className={cls.box}
            size='responsive'
            component='label'
            key={genre.name}
        >
            <Flex>
                <Box component='span' mr={16}>
                    {genre.icon}
                </Box>
                <Text className={cls.genre}>{genre.name}</Text>
            </Flex>
            <Radio
                checked={checkedGenre === genre.name}
                value={genre.name}
                icon={CheckIcon}
                color='#40BCA3'
                ref={radioRef}
                radius='xl'
                size='xs'
            />
        </Container>
        
    );
};

