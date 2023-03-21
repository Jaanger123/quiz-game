import { useMainContext } from 'contexts/MainContextProvider';
import styles from './styles.module.scss';

const QuestionCard = ({ question }) => {
    const { setQuestion } = useMainContext();

    const onChooseCard = () => {
        setQuestion(question);
    };

    return (
        <div
            onClick={onChooseCard}
            className={`${styles.questionCard} ${styles[question.difficulty]}`}
        >
            {question.answerPoints}
        </div>
    );
};

export default QuestionCard;
