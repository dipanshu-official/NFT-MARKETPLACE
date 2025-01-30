import React from 'react';

// A reusable Button component
const   Btn = ({
    children,
    
    onClick,
    type = 'button',
    color = 'primary', // 'primary', 'secondary', 'danger', etc.
    size = 'md',       // 'sm', 'md', 'lg'
    disabled = false,
    className = '',    // Additional custom classes
}) => {
    // Base button styles
    const baseStyles = 'font-semibold rounded-md focus:outline-none transition duration-200';

    // Conditional styles based on color and size
    const colorStyles = {
        primary: 'btn-bg text-sm text-white ',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        danger: ' btn-bg2 text-white text-sm hover:bg-red-600',
        success: 'bg-green-500 text-white hover:bg-green-600',
    };

    const sizeStyles = {
        sm: ' py-2 text-sm',
        md: 'px-8 py-2 text-base',
        lg: 'text-lg',
    };

    const buttonStyles = `${baseStyles} ${colorStyles[color]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonStyles}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Btn;
