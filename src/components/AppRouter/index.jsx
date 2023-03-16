import { Route, Routes } from 'react-router-dom';
import QuizPage from 'pages/QuizPage';
import { ROUTES } from 'utils/consts';

const AppRouter = () => (
    <Routes>
        <Route path={ROUTES.MAIN_ROUTE} element={<QuizPage />} />
        <Route path="*" element={<QuizPage />} />
    </Routes>
);

export default AppRouter;
