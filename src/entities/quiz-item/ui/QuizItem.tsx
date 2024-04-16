import { Container, Checkbox, Radio, Text, Flex, Box } from '@mantine/core';

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
    return (
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
    );
};

