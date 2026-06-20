import { twMerge } from 'tailwind-merge'
import clsx, { ClassValue } from 'clsx';

export const tailwindMerge = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
}