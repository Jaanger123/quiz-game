import { useMainContext } from 'contexts/MainContextProvider';
import QuestionCard from 'components/QuestionCard';
import ShowQuestion from 'components/ShowQuestion';

import styles from './styles.module.scss';

const QuestionsBoard = () => {
    const { questions } = useMainContext();

    return (
        <div className={styles.questionsBoard}>
            <ShowQuestion />
            <h2>Таблица вопросов:</h2>
            <div className={styles.questions}>
                <div
                    className={`${styles.easyQuestionsColumn} ${styles.questionsColumn}`}
                >
                    <span>EASY</span>
                    <div className={styles.easyQuestions}>
                        {questions?.easyQuestions.map((question, index) => (
                            <QuestionCard key={index} question={question} />
                        ))}
                    </div>
                </div>
                <div
                    className={`${styles.mediumQuestionsColumn} ${styles.questionsColumn}`}
                >
                    <span>MEDIUM</span>
                    <div className={styles.mediumQuestions}>
                        {questions?.mediumQuestions.map((question, index) => (
                            <QuestionCard key={index} question={question} />
                        ))}
                    </div>
                </div>
                <div
                    className={`${styles.hardQuestionsColumn} ${styles.questionsColumn}`}
                >
                    <span>HARD</span>
                    <div className={styles.hardQuestions}>
                        {questions?.hardQuestions.map((question, index) => (
                            <QuestionCard key={index} question={question} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionsBoard;
