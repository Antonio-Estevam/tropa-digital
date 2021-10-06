import { ButtonHTMLAttributes } from 'react';

import './style.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isActive ?: boolean
};

export function Button({isActive = false, ...props }: ButtonProps) {
    return(
        <button 
         className={`button ${isActive ? 'active' : ''}`}
         {...props} />
    )
}