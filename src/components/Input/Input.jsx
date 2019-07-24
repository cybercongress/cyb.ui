import * as React from 'react';

const styles = require('./Input.less');

export const Input = ({ inputRef, errorMessage, ...props }) => (
    <div className={ styles.inutText }>
        <input
          { ...props }
          ref={ inputRef }
          className={ errorMessage ? styles.InputError : styles.Input }
        />
        <span className={ errorMessage ? styles.textError : styles.textErrorDisplayNone }>
            {errorMessage}
        </span>
    </div>
);

export const Select = ({ children, inputRef, ...props }) => (
    <select { ...props } ref={ inputRef } className={ styles.Input }>
        {children}
    </select>
);
