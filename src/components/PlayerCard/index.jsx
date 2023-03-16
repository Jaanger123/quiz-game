import styles from './styles.module.scss';

const PlayerCard = ({ player }) => {
    return (
        <div className={styles.playerCard}>
            <div className={styles.playerIcon}>
                <img src={player.playerIcon} alt="player" />
            </div>
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
