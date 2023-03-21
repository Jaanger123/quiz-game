import QuestionCard from 'components/QuestionCard';
import ShowQuestion from 'components/ShowQuestion';
import styles from './styles.module.scss';

const easyQuestions = [
    {
        difficulty: 'easy',
        answerPoints: 100,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
    {
        difficulty: 'easy',
        answerPoints: 100,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
    {
        difficulty: 'easy',
        answerPoints: 100,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
    {
        difficulty: 'easy',
        answerPoints: 100,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
    {
        difficulty: 'easy',
        answerPoints: 100,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
    {
        difficulty: 'easy',
        answerPoints: 100,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
    {
        difficulty: 'easy',
        answerPoints: 100,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
    {
        difficulty: 'easy',
        answerPoints: 100,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
];

const mediumQuestions = [
    {
        difficulty: 'medium',
        answerPoints: 250,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
    {
        difficulty: 'medium',
        answerPoints: 250,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
    {
        difficulty: 'medium',
        answerPoints: 250,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
    {
        difficulty: 'medium',
        answerPoints: 250,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
];

const hardQuestions = [
    {
        difficulty: 'hard',
        answerPoints: 500,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
    {
        difficulty: 'hard',
        answerPoints: 500,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
    {
        difficulty: 'hard',
        answerPoints: 500,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
    {
        difficulty: 'hard',
        answerPoints: 500,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
];

const QuestionsBoard = () => {
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
                        {easyQuestions.map((question, index) => (
                            <QuestionCard key={index} question={question} />
                        ))}
                    </div>
                </div>
                <div
                    className={`${styles.mediumQuestionsColumn} ${styles.questionsColumn}`}
                >
                    <span>MEDIUM</span>
                    <div className={styles.mediumQuestions}>
                        {mediumQuestions.map((question, index) => (
                            <QuestionCard key={index} question={question} />
                        ))}
                    </div>
                </div>
                <div
                    className={`${styles.hardQuestionsColumn} ${styles.questionsColumn}`}
                >
                    <span>HARD</span>
                    <div className={styles.hardQuestions}>
                        {hardQuestions.map((question, index) => (
                            <QuestionCard key={index} question={question} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionsBoard;
