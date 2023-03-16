import PlayersListTopBar from 'components/PlayersListTopBar';
import React from 'react';

import styles from './styles.module.scss';

const QuizPage = () => {
    return (
        <div className={styles.quizPage}>
            <div className={styles.container}>
                <PlayersListTopBar />
            </div>
        </div>
    );
};

export default QuizPage;
