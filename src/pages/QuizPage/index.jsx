import { useMainContext } from 'contexts/MainContextProvider';
import PlayersListTopBar from 'components/PlayersListTopBar';
import QuestionsBoard from 'components/QuestionsBoard';
import ControlPanel from 'components/ControlPanel';
import WinnerModal from 'components/WinnerModal';
import InfoBlock from 'components/InfoBlock';
import React from 'react';

import styles from './styles.module.scss';

const QuizPage = () => {
    const { showWinner } = useMainContext();

    return (
        <>
            {showWinner && <WinnerModal />}
            <div className={styles.quizPage}>
                <div className={styles.container}>
                    <PlayersListTopBar />
                    <div className={styles.infoBlockQuestionBoard}>
                        <InfoBlock />
                        <QuestionsBoard />
                    </div>
                    <ControlPanel />
                </div>
            </div>
        </>
    );
};

export default QuizPage;
