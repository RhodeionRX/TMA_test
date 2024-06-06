import { MouseEvent } from 'react';

export const Button = ({title, onClick}: {
    title: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}) => {
    return (
        <button type="button" className="btn btn-primary" onClick={onClick}>
            {title}
        </button>
    );
}