import { useMainContext } from 'contexts/MainContextProvider';
import styles from './styles.module.scss';

const ShowQuestion = () => {
    const { currentQuestion } = useMainContext();

    return (
        <div
            className={`${styles.showQuestion} ${
                currentQuestion ? styles.fullBoard : ''
            }`}
        >
            <h2>{currentQuestion?.question}</h2>
        </div>
    );
};

export default ShowQuestion;
