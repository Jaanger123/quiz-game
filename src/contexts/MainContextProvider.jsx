import { createContext, useContext, useEffect, useReducer } from 'react';
import { MAIN_CONTEXT_ACTIONS } from 'utils/consts';
import { questions } from 'utils/questions';

const players = [
    {
        playerIcon: require('assets/images/male_1.png'),
        playerName: 'Jaanger',
        playerPoints: 0,
        gender: 'male',
    },
    {
        playerIcon: require('assets/images/female_1.png'),
        playerName: 'Ayana',
        playerPoints: 0,
        gender: 'female',
    },
    {
        playerIcon: require('assets/images/male_4.png'),
        playerName: 'Yzak',
        playerPoints: 0,
        gender: 'male',
    },
    {
        playerIcon: require('assets/images/female_3.png'),
        playerName: 'mina',
        playerPoints: 0,
        gender: 'female',
    },
    {
        playerIcon: require('assets/images/male_1.png'),
        playerName: 'Jaanger',
        playerPoints: 0,
        gender: 'male',
    },
    {
        playerIcon: require('assets/images/female_1.png'),
        playerName: 'Ayana',
        playerPoints: 0,
        gender: 'female',
    },
    {
        playerIcon: require('assets/images/male_2.png'),
        playerName: 'Rena',
        playerPoints: 0,
        gender: 'male',
    },
    {
        playerIcon: require('assets/images/female_2.png'),
        playerName: 'mina',
        playerPoints: 0,
        gender: 'female',
    },
    {
        playerIcon: require('assets/images/male_1.png'),
        playerName: 'Jaanger',
        playerPoints: 0,
        gender: 'male',
    },
    {
        playerIcon: require('assets/images/female_1.png'),
        playerName: 'Ayana',
        playerPoints: 0,
        gender: 'female',
    },
    {
        playerIcon: require('assets/images/male_2.png'),
        playerName: 'Rena',
        playerPoints: 0,
        gender: 'male',
    },
    {
        playerIcon: require('assets/images/female_2.png'),
        playerName: 'mina',
        playerPoints: 0,
        gender: 'female',
    },
    {
        playerIcon: require('assets/images/male_1.png'),
        playerName: 'Jaanger',
        playerPoints: 0,
        gender: 'male',
    },
    {
        playerIcon: require('assets/images/female_1.png'),
        playerName: 'Ayana',
        playerPoints: 0,
        gender: 'female',
    },
    {
        playerIcon: require('assets/images/male_2.png'),
        playerName: 'Rena',
        playerPoints: 0,
        gender: 'male',
    },
    {
        playerIcon: require('assets/images/female_2.png'),
        playerName: 'mina',
        playerPoints: 0,
        gender: 'female',
    },
];

export const MainContext = createContext();

export const useMainContext = () => useContext(MainContext);

const INIT_STATE = {
    players: [],
    questions: null,
    currentPlayer: null,
    currentQuestion: null,
    questionAnswered: false,
    isTimerPlaying: false,
    timerKey: 0,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case MAIN_CONTEXT_ACTIONS.SET_PLAYERS:
            return { ...state, players: action.payload };
        case MAIN_CONTEXT_ACTIONS.SET_PLAYER:
            return { ...state, currentPlayer: action.payload };
        case MAIN_CONTEXT_ACTIONS.SET_QUESTIONS:
            return { ...state, questions: action.payload };
        case MAIN_CONTEXT_ACTIONS.SET_QUESTION:
            return { ...state, currentQuestion: action.payload };
        case MAIN_CONTEXT_ACTIONS.RESET_QUESTION:
            return { ...state, currentQuestion: null };
        case MAIN_CONTEXT_ACTIONS.START_COUNTDOWN:
            return { ...state, isTimerPlaying: action.payload };
        case MAIN_CONTEXT_ACTIONS.STOP_COUNTDOWN:
            return { ...state, isTimerPlaying: action.payload };
        case MAIN_CONTEXT_ACTIONS.RESET_TIMER:
            return { ...state, timerKey: action.payload };
        case MAIN_CONTEXT_ACTIONS.SET_QUESTION_ANSWERED:
            return { ...state, questionAnswered: action.payload };

        default:
            return state;
    }
};

const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    useEffect(() => {
        getQuestions();
        getPlayers();
        getPlayer();
    }, []);

    const setPlayers = players => {
        sessionStorage.setItem('players', JSON.stringify(players));

        dispatch({
            type: MAIN_CONTEXT_ACTIONS.SET_PLAYERS,
            payload: players,
        });
    };

    const getPlayers = () => {
        const players = sessionStorage.getItem('players') || [];

        if (!players.length) {
            sessionStorage.setItem('players', JSON.stringify(players));
        }
        dispatch({
            type: MAIN_CONTEXT_ACTIONS.SET_PLAYERS,
            payload: JSON.parse(players),
        });
    };

    const setPlayer = player => {
        sessionStorage.setItem('player', JSON.stringify(player));

        dispatch({
            type: MAIN_CONTEXT_ACTIONS.SET_PLAYER,
            payload: player,
        });
    };

    const getPlayer = () => {
        const player = sessionStorage.getItem('player');

        if (!player) return;

        dispatch({
            type: MAIN_CONTEXT_ACTIONS.SET_PLAYER,
            payload: JSON.parse(player),
        });
    };

    const removeCurrentPlayer = () => {
        sessionStorage.removeItem('player');

        dispatch({ type: MAIN_CONTEXT_ACTIONS.SET_PLAYER, payload: null });
    };

    const setQuestions = questions => {
        sessionStorage.setItem('questions', JSON.stringify(questions));

        dispatch({
            type: MAIN_CONTEXT_ACTIONS.SET_QUESTIONS,
            payload: questions,
        });
    };

    const getQuestions = () => {
        let questionsObj = sessionStorage.getItem('questions');

        if (!questions) {
            setQuestions(questions);
            questionsObj = sessionStorage.getItem('questions');
        }

        dispatch({
            type: MAIN_CONTEXT_ACTIONS.SET_QUESTIONS,
            payload: JSON.parse(questionsObj),
        });
    };

    const setQuestion = question => {
        sessionStorage.setItem('question', JSON.stringify(question));

        dispatch({
            type: MAIN_CONTEXT_ACTIONS.SET_QUESTION,
            payload: question,
        });
    };

    const resetQuestion = () => {
        sessionStorage.removeItem('question');

        dispatch({
            type: MAIN_CONTEXT_ACTIONS.RESET_QUESTION,
        });
        dispatch({
            type: MAIN_CONTEXT_ACTIONS.SET_QUESTION_ANSWERED,
            payload: false,
        });
    };

    const startCountdown = () => {
        dispatch({ type: MAIN_CONTEXT_ACTIONS.START_COUNTDOWN, payload: true });
    };

    const stopCountdown = () => {
        dispatch({ type: MAIN_CONTEXT_ACTIONS.STOP_COUNTDOWN, payload: false });
    };

    const resetTimer = () => {
        dispatch({ type: MAIN_CONTEXT_ACTIONS.RESET_TIMER, payload: state.timerKey + 1 });
    };

    const updateCurrentPlayerPoints = () => {
        const currentPlayer = { ...state.currentPlayer };
        const players = [...state.players];
        currentPlayer.playerPoints += state.currentQuestion.answerPoints;

        for (let player of players) {
            if (player.playerName === currentPlayer.playerName) {
                player.playerPoints = currentPlayer.playerPoints;
                break;
            }
        }

        setPlayer(currentPlayer);
        setPlayers(players);
    };

    const updateQuestionStatus = () => {
        const currentQuestion = { ...state.currentQuestion };
        const questions = JSON.parse(JSON.stringify(state.questions));
        currentQuestion.answered = true;

        for (let questionsKey in questions) {
            for (let question of questions[questionsKey]) {
                if (question.id === currentQuestion.id) {
                    question.answered = true;
                    break;
                }
            }
        }

        setQuestion(currentQuestion);
        setQuestions(questions);
    };

    const answerQuestion = () => {
        updateQuestionStatus();
        dispatch({ type: MAIN_CONTEXT_ACTIONS.SET_QUESTION_ANSWERED, payload: true });
    };

    const correctAnswer = () => {
        updateCurrentPlayerPoints();
        resetQuestion();
        stopCountdown();
    };

    const incorrectAnswer = () => {
        resetQuestion();
        stopCountdown();
    };

    const resetData = () => {
        resetQuestion();
        stopCountdown();
        resetTimer();
    };

    const getWinner = () => {
        const winners = [];

        for (let player of state.players) {
            if (!winners.length) {
                winners.push(player);
            } else {
                if (player.playerPoints > winners[winners.length - 1].playerPoints) {
                    winners[winners.length - 1] = player;
                } else if (
                    player.playerPoints === winners[winners.length - 1].playerPoints
                ) {
                    winners.push(player);
                }
            }
        }

        return winners;
    };

    const resetQuestions = () => {
        const questions = JSON.parse(JSON.stringify(state.questions));

        for (let questionsKey in questions) {
            for (let question of questions[questionsKey]) {
                question.answered = false;
            }
        }

        setQuestions(questions);
    };

    const resetPlayersPoints = () => {
        const players = JSON.parse(JSON.stringify(state.players));

        for (let player of players) {
            player.playerPoints = 0;
        }

        setPlayers(players);
    };
    console.log(getWinner());

    const values = {
        players: state.players,
        questions: state.questions,
        currentPlayer: state.currentPlayer,
        currentQuestion: state.currentQuestion,
        questionAnswered: state.questionAnswered,
        isTimerPlaying: state.isTimerPlaying,
        timerKey: state.timerKey,
        setPlayer,
        setQuestion,
        startCountdown,
        stopCountdown,
        resetTimer,
        answerQuestion,
        correctAnswer,
        incorrectAnswer,
        resetData,
        getWinner,
        resetQuestions,
        resetPlayersPoints,
        removeCurrentPlayer,
    };

    return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default MainContextProvider;
