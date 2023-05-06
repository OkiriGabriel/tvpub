import React from 'react';

const Button = ({ children, onClick, type, className }) => {
  return (
    <button  className={` speed-button ${className}`}
     onClick={onClick}
      type={type}>
      {children}
    </button>
  );
};

export default Button;