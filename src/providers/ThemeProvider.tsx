"use client";

import { ReactNode } from 'react';
import { ThemeProvider as NexThemeProvider, type ThemeProviderProps } from 'next-themes';



const ThemeProvider = ({children, ...props}: ThemeProviderProps) => {
    return (
        <NexThemeProvider {...props}>
            {children}
        </NexThemeProvider>
    )
}

export default ThemeProvider;