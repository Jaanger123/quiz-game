import InfoBlock from 'components/InfoBlock';
import PlayersListTopBar from 'components/PlayersListTopBar';
import QuestionsBoard from 'components/QuestionsBoard';
import React from 'react';

import styles from './styles.module.scss';

const QuizPage = () => {
    return (
        <div className={styles.quizPage}>
            <div className={styles.container}>
                <PlayersListTopBar />
                <div className={styles.infoBlockQuestionBoard}>
                    <InfoBlock />
                    <QuestionsBoard />
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
