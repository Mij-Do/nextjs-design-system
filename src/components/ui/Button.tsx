import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva } from "class-variance-authority";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    width?: "w-full" | "w-fit";
}

const buttonVariants = cva("rounded-lg font-semibold", {
    variants: {
        intent: {
            primary: "bg-black text-white dark:bg-white dark:text-black",
            outline: "bg-transparent text-black border border-gray-300 dark:text-white"
        }
    },
    defaultVariants: {
        intent: "primary",
    }
});

const Button = ({children, className, width = "w-full", ...rest}: IProps) => {
    return (
        <button className={`${className} ${width} rounded-lg text-white px-3 py-3 duration-200 font-medium border border-indigo-300`} {...rest}>
            {children}
        </button>
    )
}

export default Button;