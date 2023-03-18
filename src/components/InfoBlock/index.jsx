import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useMainContext } from 'contexts/MainContextProvider';
import PlayerIcon from 'components/PlayerIcon';
import { useEffect } from 'react';

import styles from './styles.module.scss';

const InfoBlock = () => {
    const { currentPlayer, getPlayer } = useMainContext();

    useEffect(() => {
        getPlayer();
    });

    return (
        <div className={styles.infoBlock}>
            <h2>Текущий игрок:</h2>
            <div className={styles.playerInfo}>
                <PlayerIcon playerIcon={currentPlayer?.playerIcon} size={'6vw'} />
                <span className={styles[currentPlayer?.gender]}>
                    {currentPlayer?.playerName}
                </span>
                <span className={styles.playerPoints}>{currentPlayer?.playerPoints}</span>
            </div>
            <div className={styles.timer}>
                <CountdownCircleTimer
                    isPlaying
                    duration={7}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>
        </div>
    );
};

export default InfoBlock;
