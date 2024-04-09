import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  const defaultClasses = "mt-4 w-full bg-card shadow rounded-lg";

  const cardClasses = className ? `${defaultClasses} ${className}` : defaultClasses;

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
