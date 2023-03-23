import { useMainContext } from 'contexts/MainContextProvider';
import { BUTTON_SIZE, BUTTON_VARIANT } from 'utils/consts';
import Button from 'components/Button';

import styles from './styles.module.scss';

const ControlPanel = () => {
    const {
        resetQuestions,
        resetPlayersPoints,
        removeCurrentPlayer,
        defineWinner,
        setShowWinner,
    } = useMainContext();

    const onResetPlayerPoints = () => {
        resetPlayersPoints();
        removeCurrentPlayer();
    };

    const revealWinner = () => {
        defineWinner();
        setShowWinner(true);
    };

    return (
        <div className={styles.controlPanel}>
            <div className={styles.resetButtons}>
                <Button onClick={onResetPlayerPoints} size={BUTTON_SIZE.SMALL}>
                    Сбросить очки
                </Button>
                <Button
                    onClick={resetQuestions}
                    size={BUTTON_SIZE.SMALL}
                    variant={BUTTON_VARIANT.PINK}
                >
                    Восстановить вопросы
                </Button>
            </div>
            <Button
                onClick={revealWinner}
                size={BUTTON_SIZE.SMALL}
                variant={BUTTON_VARIANT.BLUE}
            >
                Выявить победителя
            </Button>
        </div>
    );
};

export default ControlPanel;
