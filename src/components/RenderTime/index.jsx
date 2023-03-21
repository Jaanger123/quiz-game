import { useRef, useState } from 'react';
import { FORMATS } from 'utils/consts';

import styles from './styles.module.scss';

const RenderTime = ({ remainingTime, format = FORMATS.SECONDS }) => {
    const currentTime = useRef(remainingTime);
    const prevTime = useRef(null);
    const isNewTimeFirstTick = useRef(false);
    const [, setOneLastRerender] = useState(0);

    if (currentTime.current !== remainingTime) {
        isNewTimeFirstTick.current = true;
        prevTime.current = currentTime.current;
        currentTime.current = remainingTime;
    } else {
        isNewTimeFirstTick.current = false;
    }

    if (remainingTime === 0) {
        setTimeout(() => {
            setOneLastRerender(val => val + 1);
        }, 20);
    }

    const isTimeUp = isNewTimeFirstTick.current;

    return (
        <div className={styles.timeWrapper}>
            <div
                key={remainingTime}
                className={`${styles.time} ${isTimeUp ? styles.up : ''}`}
            >
                {remainingTime.toString().length === 1
                    ? `0${remainingTime}`
                    : remainingTime}
            </div>
            {prevTime.current !== null && (
                <div
                    key={prevTime.current}
                    className={`${styles.time} ${!isTimeUp ? styles.down : ''}`}
                >
                    {prevTime.current.toString().length === 1
                        ? `0${prevTime.current}`
                        : prevTime.current}
                </div>
            )}
        </div>
    );
};

export default RenderTime;
