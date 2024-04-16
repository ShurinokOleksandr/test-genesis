import { createTheme, Container, Button } from '@mantine/core';
import clsx from 'clsx';

import Container_classes from './styles/Container.module.scss';
import Button_classes from './styles/Button.module.scss';
export const theme = createTheme({
    components: {
        Container: Container.extend({
            classNames: (_, { size }) => ({
                root: clsx({ [Container_classes.responsiveContainer]: size === 'responsive' }),
            }),
        }),
        Button: Button.extend({
            classNames: () => ({
                root: Button_classes.root
            }),
        }),
    },
    fontFamily:'Noto Sans',
});