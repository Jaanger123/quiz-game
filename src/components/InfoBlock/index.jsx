import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useMainContext } from 'contexts/MainContextProvider';
import RenderTime from 'components/RenderTime';
import PlayerIcon from 'components/PlayerIcon';

import styles from './styles.module.scss';
import { FORMATS } from 'utils/consts';

const InfoBlock = () => {
    const { currentPlayer } = useMainContext();

    const formatTime = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        // return `${minutes}:${seconds}`;
        return (
            <>
                <RenderTime remainingTime={minutes} format={FORMATS.MINUTES} />:
                <RenderTime remainingTime={seconds} format={FORMATS.SECONDS} />
            </>
        );
    };

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
                    duration={90}
                    colors={['#36DE00', '#FFFB00', '#F80000']}
                    colorsTime={[30, 15, 0]}
                >
                    {formatTime}
                </CountdownCircleTimer>
            </div>
        </div>
    );
};

export default InfoBlock;
