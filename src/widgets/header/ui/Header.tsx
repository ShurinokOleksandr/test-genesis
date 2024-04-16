import { BackgroundImage, Container, Progress, Flex, Text } from '@mantine/core';
import { ReactComponent as BurgerMenuIcon } from 'src/assets/burger.svg';
import { ReactComponent as ArrowIcon } from 'src/assets/arrow.svg';

import cls from './Header.module.scss';

export  const Header = () => {
    return (
        <BackgroundImage src='src/assets/header_bg.png' >
            <Container className={cls.wrapper} size='responsive'>
                <Container  mb={15} mt={5}>
                    <Container className={cls.navigation}>
                        <ArrowIcon opacity='10%' />
                        {/*<ActionIcon className={clsx(cls.button_back,cls.button_reset)} aria-label='Back' variant='default'>*/}
                        {/*  */}
                        {/*</ActionIcon>*/}
                        <Flex gap={24}>
                            <Text fz={14}>
                                0%
                            </Text>
                            <BurgerMenuIcon   />
                            {/*<ActionIcon className={clsx(cls.button_reset,cls.button_burger)} aria-label='Menu'  variant='default'>*/}
                            {/*  */}
                            {/*</ActionIcon>*/}
                        </Flex>
                    </Container>
                    <Progress classNames={{ section :cls.progress_value }} className={cls.progress} value={30}/>
                </Container>
            </Container >
        </BackgroundImage>
    );
};

