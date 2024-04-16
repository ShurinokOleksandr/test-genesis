import { AspectRatio, Text, Flex, Box } from '@mantine/core';
import { observer } from 'mobx-react-lite';

import cls from './NotFound.module.scss';

export const NotFound = observer(() => {
    
    return (
        <Flex  className={cls.box} w='100%'>
            <Box>
                <AspectRatio ratio={1}  maw={100} mx='auto' mb={20} mt={60}>
                    <img
                        src='src/assets/not-found.png'
                        className={ cls.poster }
                        alt='Not found'
                    />
                </AspectRatio>
                <Text className={cls.title} mb={10}>
                    Oops, no movie found
                </Text>
            </Box>


        </Flex>
    );
});

