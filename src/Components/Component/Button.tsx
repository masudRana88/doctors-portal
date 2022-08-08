import React from 'react';
const Button = ({children}:props) => {
    return (
        <button className='px-4 py-2.5 rounded-md font-semibold text-white bg-gradient-to-bl from-bgGreenR to-bgGreenL'>{children}</button>
    );
};
type props ={
    children: string
}
export default Button;