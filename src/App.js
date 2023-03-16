import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'components/AppRouter';
import React from 'react';

import './index.scss';
import MainContextProvider from 'contexts/MainContextProvider';

const App = () => {
    return (
        <BrowserRouter>
            <MainContextProvider>
                <AppRouter />
            </MainContextProvider>
        </BrowserRouter>
    );
};

export default App;
