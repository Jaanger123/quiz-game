import { useMainContext } from 'contexts/MainContextProvider';

import styles from './styles.module.scss';

const QuestionCard = ({ question }) => {
    const { setQuestion, startCountdown, currentPlayer } = useMainContext();

    const onChooseCard = () => {
        if (currentPlayer) {
            setQuestion(question);
            startCountdown();
        }
    };

    return (
        <div
            onClick={onChooseCard}
            className={`${styles.questionCard} ${styles[question.difficulty]} ${
                question.answered ? styles.answered : ''
            }`}
        >
            {question.answerPoints}
        </div>
    );
};

export default QuestionCard;
