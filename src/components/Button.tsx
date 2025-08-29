import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Link } from "react-router";


type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'overlay';
  fullWidth?: boolean;
  disabled?: boolean;
  // Link specific
  to?: string;
  // Button specifik
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}


export const Button = ({
  children,
  className = '',
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  to,
  onClick,
  type = 'button',
  ...props // För att kunna sätta t.ex. id eller aria-label
}: ButtonProps) => {

  const baseClasses = `btn btn--${variant} ${fullWidth ? 'btn--full-width' : ''}`;
  const outputClasses = `${baseClasses} ${className}`.trim();

  // Motion variablar
  const hoverAnimation = {
    scaleX: fullWidth ? 1 : 1.05,
    scaleY: 1.03
  };

  const tapAnimation = {
    scaleX: 0.97,
    scaleY: 0.95
  };

  // Länk om "to" är satt
  if (to) {
    return (
      <motion.div
        whileHover={hoverAnimation} 
        whileTap={tapAnimation}
      >
        <Link 
          to={to} 
          className={`${outputClasses} ${disabled ? 'btn--disabled' : ''}`}
          {...props} // Övriga props som id och aria-attribut följer med
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  // Annars en knapp
  return (
    <motion.div
      whileHover={hoverAnimation} 
      whileTap={tapAnimation}
    >
      <button
        type={type}
        className={outputClasses}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
};