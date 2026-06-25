import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    handleClick: () => void;
    diabled: boolean;
    classes: string;
}

export const Button = ({
    children,
    handleClick,
    disabled,
    classes,
    ...props
}: Props) => {
    return (
        <button
            className={`px-4 py-2 rounded ${classes ?? ""}`}
            disabled={disabled}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    );
};
