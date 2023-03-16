import { createContext, useContext, useEffect, useReducer } from 'react';
import { MAIN_CONTEXT_ACTIONS } from 'utils/consts';

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
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case MAIN_CONTEXT_ACTIONS.SET_PLAYERS:
            return { ...state, players: action.payload };

        default:
            return state;
    }
};

const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    useEffect(() => {
        getPlayers();
    }, []);

    const getPlayers = () => {
        try {
            // const players = sessionStorage.getItem('players') || [];

            if (!players.length) {
                sessionStorage.setItem('players', JSON.stringify(players));
            }
            dispatch({
                type: MAIN_CONTEXT_ACTIONS.SET_PLAYERS,
                payload: players,
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    const values = {
        players: state.players,
    };

    return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default MainContextProvider;