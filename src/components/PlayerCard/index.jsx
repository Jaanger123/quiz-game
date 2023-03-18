import PlayerIcon from 'components/PlayerIcon';
import { useMainContext } from 'contexts/MainContextProvider';

import styles from './styles.module.scss';

const PlayerCard = ({ player }) => {
    const { setPlayer } = useMainContext();

    const chooseCurrentPlayer = () => {
        setPlayer(player);
    };

    return (
        <div className={styles.playerCard} onClick={chooseCurrentPlayer}>
            <PlayerIcon playerIcon={player.playerIcon} />
            <div className={styles.playerInfo}>
                <p>
                    Игрок:{' '}
                    <span className={styles[player.gender]}>{player.playerName}</span>
                </p>
                <p>
                    Кол-во очков: <span>{player.playerPoints}</span>
                </p>
            </div>
        </div>
    );
};

export default PlayerCard;
