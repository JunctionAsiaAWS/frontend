import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage, LoginPage, QuizPage } from '@/pages';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_ENV}>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
