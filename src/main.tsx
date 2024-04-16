import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import React from 'react';

import { theme } from './shared/lib';
import App from './App.tsx';
 
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <App />
        </MantineProvider>
    </React.StrictMode>,
);
