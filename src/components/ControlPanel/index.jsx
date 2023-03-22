import { useMainContext } from 'contexts/MainContextProvider';
import { BUTTON_SIZE, BUTTON_VARIANT } from 'utils/consts';
import Button from 'components/Button';

import styles from './styles.module.scss';

const ControlPanel = () => {
    const { resetQuestions, resetPlayersPoints, removeCurrentPlayer } = useMainContext();

    const onResetPlayerPoints = () => {
        resetPlayersPoints();
        removeCurrentPlayer();
    };

    return (
        <div className={styles.controlPanel}>
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
            {/* <Button>Сбросить очки</Button> */}
        </div>
    );
};

export default ControlPanel;
