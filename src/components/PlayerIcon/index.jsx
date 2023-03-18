import styles from './styles.module.scss';

const PlayerIcon = ({ playerIcon, size }) => {
    const iconStyles = {
        width: size || '4vw',
        height: size || '4vw',
    };

    return (
        <div className={styles.playerIcon} style={iconStyles}>
            <img src={playerIcon} alt="player" />
        </div>
    );
};

export default PlayerIcon;
