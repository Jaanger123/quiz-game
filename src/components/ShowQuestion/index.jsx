import { useMainContext } from 'contexts/MainContextProvider';
import styles from './styles.module.scss';

const ShowQuestion = () => {
    const { currentQuestion } = useMainContext();

    return (
        <div
            className={`${styles.showQuestionWrapper} ${
                currentQuestion ? styles.fullBoard : ''
            }`}
        >
            <div className={styles.showQuestion}>
                <h2>{currentQuestion?.question}</h2>
                <div className={styles.questionButtons}>
                    <button>Посмотреть ответ</button>
                </div>
            </div>
        </div>
    );
};

export default ShowQuestion;
