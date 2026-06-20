import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { tailwindMerge } from "@/app/utils";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: ReactNode;
}

const buttonVariants = cva("rounded-lg font-semibold duration-200", {
    variants: {
        intent: {
            primary: "bg-black text-white dark:bg-white dark:text-black",
            outline: "bg-transparent text-black border border-gray-300 dark:text-white",
            destructive: "bg-red-600 text-white dark:bg-red-800 dark:text-white",
            secondary: "bg-gray-600 text-white dark:bg-gray-800 dark:text-white",
            ghost: "bg-gray-300 text-white dark:bg-white dark:text-black",
            link: "bg-transparent text-black hover:border-b hover:border-gray-500 dark:text-white ",
        },
        size: {
            xs: "px-2 text-xs",
            sm: "px-4 text-sm",
            md: "px-6 text-md",
            lg: "px-8 text-lg",
            xl: "px-10 text-xl"
        }
    },
    defaultVariants: {
        intent: "primary",
        size: "md",
    }
});

const Button = ({children, intent, size, ...rest}: IProps) => {
    return (
        <button className={`${tailwindMerge(buttonVariants({intent, size}))}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;