import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { tailwindMerge } from "@/app/utils";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: ReactNode;
}

const buttonVariants = cva("rounded-lg font-semibold px-3 py-3 duration-200", {
    variants: {
        intent: {
            primary: "bg-black text-white dark:bg-white dark:text-black",
            outline: "bg-transparent text-black border border-gray-300 dark:text-white",
            destructive: "bg-red-600 text-white dark:bg-red-800 dark:text-white",
            secondary: "bg-gray-600 text-white dark:bg-gray-800 dark:text-white",
            ghost: "bg-gray-300 text-white dark:bg-white dark:text-black",
            link: "bg-transparent text-black hover:border-b hover:border-gray-500 dark:text-white ",
        }
    },
    defaultVariants: {
        intent: "primary",
    }
});

const Button = ({children, intent, ...rest}: IProps) => {
    return (
        <button className={`${tailwindMerge(buttonVariants({intent}))}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;