import Confetti from 'components/Confetti';
import { useMainContext } from 'contexts/MainContextProvider';

import styles from './styles.module.scss';

const WinnerModal = () => {
    const { winner, setShowWinner } = useMainContext();

    const closeModal = () => {
        setShowWinner(false);
    };

    return (
        <>
            <div className={styles.winnerModalBackground}>
                <Confetti />
                <div className={styles.winnerModal}>
                    <img
                        onClick={closeModal}
                        className={styles.close}
                        src={require('assets/images/close.png')}
                        alt="close"
                    />
                    <h1>Наш победитель:</h1>
                    <img
                        className={styles.trophey}
                        src={require('assets/images/trophey.png')}
                        alt="trophey"
                    />
                    <span className={styles[winner?.gender]}>{winner?.playerName}</span>
                </div>
            </div>
        </>
    );
};

export default WinnerModal;
