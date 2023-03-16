import { useMainContext } from 'contexts/MainContextProvider';
import PlayerCard from 'components/PlayerCard';
import React from 'react';

import styles from './styles.module.scss';

const PlayersListTopBar = () => {
    const { players } = useMainContext();

    return (
        <div className={styles.playerListWrapper}>
            <div className={styles.playerList}>
                {players.map((player, index) => (
                    <PlayerCard key={index} player={player} />
                ))}
            </div>
        </div>
    );
};

export default PlayersListTopBar;
