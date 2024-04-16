import { Container, Center, Stack, Box } from '@mantine/core';
import { useState } from 'react';

import { Header, Quiz } from './widgets';
import cls from './App.module.scss';



const questions = [
    {
        items:['Drama','Comedy','Action','Thriller','Science fiction'],
        type:'movie-genre', 
        stepOrder:1,
        id:1
    },
    {
        type:'movie-search',
        stepOrder: 2,
        id:2,
    },
    {
        type:'movie-result',
        stepOrder: 3,
        id:3,
    }
];
const RenderNeedComponent = ({ setStep,step }:{setStep:() => void,step:number}) => {
    const component = {
        1:<Componment1/>,
        2:<Componment2/>,
        3:<Componment3/>,

    };
    return (
        <>
            {component[step]}
        </>
    );
};
const Componment1  = () => {
    return (
        <div>
            comp 1
        </div>
    );
};
const Componment2  = () => {
    return (
        <div>
            comp 2
        </div>
    );
};
const Componment3  = () => {
    return (
        <div>
            comp 3
        </div>
    );
};
function App() {
    const [step, setStep] = useState(1);

    return (
        <Box pos='relative'>
            <Container style={{ zIndex:22 }} size='responsive'     >
                <Center className={cls.center}>
                    <Header/>

                    <Quiz/>
                    

                </Center>
            </Container>
        </Box>

    );
}

export default App;
