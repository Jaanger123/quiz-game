import { BUTTON_VARIANT, BUTTON_SIZE } from 'utils/consts';

import styles from './styles.module.scss';

const Button = ({ children, className, onClick, disabled, variant = 'purple', size }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${styles.button} ${
                variant === BUTTON_VARIANT.PINK ? styles[BUTTON_VARIANT.PINK] : ''
            } ${variant === BUTTON_VARIANT.BLUE ? styles[BUTTON_VARIANT.BLUE] : ''} ${
                size === BUTTON_SIZE.SMALL ? styles[BUTTON_SIZE.SMALL] : ''
            } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
