import styles from './styles.module.scss';

const PlayerIcon = ({ playerIcon, size, unknownPlayer }) => {
    const iconStyles = {
        width: size || '4vw',
        height: size || '4vw',
        backgroundColor: unknownPlayer ? '#c0c0c0' : 'transparent',
    };

    return (
        <div className={styles.playerIcon} style={iconStyles}>
            <img src={playerIcon} alt="player" />
        </div>
    );
};

export default PlayerIcon;
