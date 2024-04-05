import React from 'react';
import styles from './GlobalStyle.module.css';

function GlobalStyle(props) {
    return (
        <div className={styles.globalStyle}>
            {props.children}
        </div>
    );
}

export default GlobalStyle;