import { BackgroundImage, ActionIcon, Container, Progress, Flex, Text } from '@mantine/core';
import { ReactComponent as BurgerMenuIcon } from 'src/assets/burger.svg';
import { ReactComponent as ArrowIcon } from 'src/assets/arrow.svg';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';

import { stepStore } from '../../render-need-component/model/store.ts';
import cls from './Header.module.scss';

export  const Header = observer(() => {
    console.log(stepStore.step);
    return (
        <BackgroundImage src='src/assets/header_bg.png' >
            <Container className={cls.wrapper} size='responsive'>
                <Container  mb={15} mt={5}>
                    <Container className={cls.navigation}>
                        <ActionIcon
                            className={clsx(cls.button_back,cls.button_reset)}
                            onClick={() => stepStore.prevStep()}
                            disabled={stepStore.step === 1}
                            aria-label='Back'
                            variant='default'
                        >
                            <ArrowIcon opacity={stepStore.step === 1  ?  '10%' : '100%'} />
                        </ActionIcon>
                        <Flex gap={24}>
                            <Text fz={14}>
                                {stepStore.percentage}%
                            </Text>
                            <BurgerMenuIcon   />
                        </Flex>
                    </Container>
                    <Progress classNames={{ section :cls.progress_value }} value={stepStore.percentage} className={cls.progress}/>
                </Container>
            </Container >
        </BackgroundImage>
    );
});

