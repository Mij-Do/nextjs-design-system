"use client";

import { ReactNode } from 'react';
import { ThemeProvider as NexThemeProvider } from 'next-themes';


interface IProps {
    children: ReactNode;
}

const ThemeProvider = ({children, ...props}: IProps) => {
    return (
        <NexThemeProvider {...props}>
            {children}
        </NexThemeProvider>
    )
}

export default ThemeProvider;