import { Navigate, Route, Routes } from "react-router-dom";
import { ViewTransitionPage } from "./pages/ViewTransition/ViewTransitionPage.jsx";

/**
 * アプリケーションのルート定義を描画します。
 */
export const App = () => (
  <main className="main-content">
    <title>React - Improve UX | ViewTransition</title>
    <Routes>
      <Route element={<ViewTransitionPage />} path="/" />
      <Route element={<ViewTransitionPage />} path="/view-transition" />
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  </main>
);
