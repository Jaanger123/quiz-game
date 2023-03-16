import styles from './styles.module.scss';

const questions = [
    {
        difficulty: 'easy',
        answerPoints: 100,
        question: 'Что такое "Предпринимательское право"?',
        answer: 'Это слишком сложный вопрос, я не знаю ответа ;(',
    },
];

const QuestionsBoard = () => {
    return <div className={styles.questionsBoard}></div>;
};

export default QuestionsBoard;
