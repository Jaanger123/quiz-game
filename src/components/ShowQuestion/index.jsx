import { useMainContext } from 'contexts/MainContextProvider';
import { BUTTON_VARIANT } from 'utils/consts';
import Button from 'components/Button';
import { useState } from 'react';

import styles from './styles.module.scss';

const ShowQuestion = () => {
    const {
        currentQuestion,
        isTimerPlaying,
        resetTimer,
        answerQuestion,
        stopCountdown,
        questionAnswered,
        correctAnswer,
        incorrectAnswer,
    } = useMainContext();
    const [answered, setAnswered] = useState(false);

    const questionMarkClasses = [
        'questionMarkOne',
        'questionMarkTwo',
        'questionMarkThree',
        'questionMarkFour',
    ];

    const onCorrectAnswer = () => {
        correctAnswer();
        setAnswered(false);
    };

    const onIncorrectAnswer = () => {
        incorrectAnswer();
        setAnswered(false);
    };

    return (
        <div
            className={`${styles.showQuestionWrapper} ${
                currentQuestion ? styles.fullBoard : ''
            }`}
        >
            <div className={styles.showQuestion}>
                {questionMarkClasses.map((cssClass, index) => (
                    <img
                        key={index}
                        src={require('assets/images/question-mark.png')}
                        alt="question-mark"
                        className={styles.questionMarks}
                        id={styles[cssClass]}
                    />
                ))}

                {/* <p>{answered ? currentQuestion?.answer : currentQuestion?.question}</p> */}
                <p className={!answered ? styles.showParagraph : ''}>
                    {currentQuestion?.question}
                </p>
                <p className={answered ? styles.showParagraph : ''}>
                    {currentQuestion?.answer}
                </p>
                <div className={styles.questionButtons}>
                    <Button
                        onClick={onCorrectAnswer}
                        className={answered && styles.showButton}
                        variant={BUTTON_VARIANT.PINK}
                    >
                        Правильно
                    </Button>
                    <Button
                        onClick={onIncorrectAnswer}
                        className={answered && styles.showButton}
                    >
                        Неправильно
                    </Button>
                    <Button
                        onClick={() => {
                            resetTimer();
                            stopCountdown();
                            answerQuestion();
                            setAnswered(true);
                        }}
                        className={!answered && styles.showButton}
                        disabled={isTimerPlaying && !questionAnswered}
                    >
                        Посмотреть ответ
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ShowQuestion;
