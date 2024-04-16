import { createTheme, Container } from '@mantine/core';
import clsx from 'clsx';

import cls from './custom-styles/Container.module.scss';
export const theme = createTheme({
    components: {
        Container: Container.extend({
            classNames: (_, { size }) => ({
                root: clsx({ [cls.responsiveContainer]: size === 'responsive' }),
            }),
        }),
    },
    fontFamily:'Noto Sans',
});