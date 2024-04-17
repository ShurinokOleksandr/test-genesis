import { RenderNeedComponent } from 'src/widgets/render-need-component';
import { Container, Center, Box } from '@mantine/core';

import cls from './App.module.scss';
import { Header } from './widgets';



function App() {
    return (
        <Box>
            <Container style={{ zIndex: 22 }} size='responsive'>
                <Center className={cls.center}>
                    <Header />
                    <RenderNeedComponent />
                </Center>
            </Container>
        </Box>

    );
}

export default App;
