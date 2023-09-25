import React, { useEffect } from 'react';
import styles from '../styles/SnowfallAnimation.module.css';

const SnowfallAnimation = () => {
    const snowflakes = [];
    for (let i = 0; i < 50; i++) {
        const size = Math.random() * 1 + 0.2; // Random size between 0.2vw to 1.2vw
        const left = Math.random() * 100; // Random left position between 0 to 100vw
        const animationDuration = Math.random() * 10 + 5; // Random animation duration between 5s to 15s
        const animationDelay = Math.random() * -10; // Random animation delay between 0s to -10s
        const isBlurred = i % 6 === 0;

        const snowflakeStyle = {
            width: `${size}vw`,
            height: `${size}vw`,
            left: `${left}vw`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`
        };

        snowflakes.push(
            <div key={i} className={`${styles.snowflake} ${isBlurred ? styles.snowflakeBlur : ''}`} style={snowflakeStyle} />
        );
    }

    return (
        <div className={styles.container}>
            {snowflakes}
        </div>
    );
};

export default SnowfallAnimation;
