import React from 'react';

type ModalWindowType = {
    title:string
}

export const ModalWindow:React.FC<ModalWindowType> = ({title,children}) => {
    // const {title,children}=props
    return (
        <div>
            <h1>{title}</h1>
            <input type="text"/>
            <input type="text"/>
            {children}
            <div>
                <button>Yes</button>
                <button>No</button>
            </div>
            
        </div>
    );
}