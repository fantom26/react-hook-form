import { Navigate, Route, Routes } from "react-router-dom";

import MainPage from "pages/mainPage/mainPage";

import { IndexLayout } from "layout";

export const Router = () => (
  <Routes>
    <Route element={<IndexLayout />}>
      <Route path="/" element={<MainPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
