import { BUTTON_VARIANT, BUTTON_SIZE, FORMATS, GENDERS } from 'utils/consts';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useMainContext } from 'contexts/MainContextProvider';
import RenderTime from 'components/RenderTime';
import PlayerIcon from 'components/PlayerIcon';
import Button from 'components/Button';

import styles from './styles.module.scss';

const InfoBlock = () => {
    const {
        currentPlayer,
        isTimerPlaying,
        stopCountdown,
        startCountdown,
        currentQuestion,
        questionAnswered,
        answerQuestion,
        timerKey,
    } = useMainContext();

    const unknownPlayer = require('assets/images/unknown-player.png');

    const formatTime = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        return (
            <>
                <RenderTime remainingTime={minutes} format={FORMATS.MINUTES} />:
                <RenderTime remainingTime={seconds} format={FORMATS.SECONDS} />
            </>
        );
    };

    const getButtonColor = () => {
        if (currentPlayer?.gender === GENDERS.MALE) return BUTTON_VARIANT.PURPLE;
        if (currentPlayer?.gender === GENDERS.FEMALE) return BUTTON_VARIANT.PINK;
        if (currentPlayer?.gender === GENDERS.OTHER) return BUTTON_VARIANT.BLUE;
        return '';
    };

    const stopOrContinueTimer = () => {
        if (isTimerPlaying) return stopCountdown();
        else return startCountdown();
    };

    return (
        <div className={styles.infoBlock}>
            <h2>Текущий игрок:</h2>
            <div className={styles.playerInfo}>
                <PlayerIcon
                    unknownPlayer={true}
                    playerIcon={currentPlayer ? currentPlayer.playerIcon : unknownPlayer}
                    size={'6vw'}
                />
                <span className={styles[currentPlayer?.gender]}>
                    {currentPlayer ? currentPlayer.playerName : 'Выберите игрока'}
                </span>
                <span className={styles.playerPoints}>{currentPlayer?.playerPoints}</span>
            </div>
            <div className={styles.timer}>
                <CountdownCircleTimer
                    isPlaying={isTimerPlaying}
                    duration={5}
                    colors={['#36DE00', '#FFFB00', '#F80000']}
                    colorsTime={[45, 20, 0]}
                    key={timerKey}
                    onComplete={() => {
                        answerQuestion();
                    }}
                >
                    {formatTime}
                </CountdownCircleTimer>
            </div>
            <Button
                onClick={stopOrContinueTimer}
                variant={getButtonColor()}
                size={BUTTON_SIZE.SMALL}
                disabled={!currentQuestion || questionAnswered}
            >
                {isTimerPlaying ? 'Стоп' : 'Продолжить'}
            </Button>
        </div>
    );
};

export default InfoBlock;
