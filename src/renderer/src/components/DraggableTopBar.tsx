import { ActionButton } from "@/components";
import { FiMinus, FiSquare, FiX } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';


export const DraggableTopBar = ({className, ...props}) => {
    return (
        <header className={twMerge("flex justify-end absolute inset-0 h-8 bg-transparent space-x-1", className)} {...props}>
            <ActionButton className="border-none" onClick={() => window.context.minimize()}>
                <FiMinus className="text-white"/>
            </ActionButton>
            <ActionButton className="border-none" onClick={() => window.context.maximize()}>
                <FiSquare className="text-white"/>
            </ActionButton>
            <ActionButton className="hover:bg-red-600/50 border-none" style={{ fontSize: '145%' }} onClick={() => window.context.close()}>
                <FiX className="text-white"/>
            </ActionButton>
        </header>
    );
};