import type { ReactNode } from "react";

export interface ModalProps {
    title: string;
    children: ReactNode;
    open: boolean;
}

export const Modal = ({ title, children }: ModalProps) => {
    return (
        <div className="w-full h-full fixed flex items-center justify-center bg-black/50">
            <div>
                <h3>Modal: {title}</h3>
                <button>close</button>
                <button>add</button>
            </div>
            {children}
        </div>
    );
};
