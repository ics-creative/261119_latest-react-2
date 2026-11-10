import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import { EffectEventPage } from "./pages/EffectEvent/EffectEventPage.jsx";
import { Home } from "./pages/Home.jsx";
import { ViewTransitionPage } from "./pages/ViewTransition/ViewTransitionPage.jsx";
import "./styles/base.css";
import "./styles/app.css";

const siteTitle = "React - Improve UX";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <title>{siteTitle}</title>
        <Home />
      </>
    ),
  },
  {
    path: "/view-transition",
    element: (
      <>
        <title>{`${siteTitle} | ViewTransition`}</title>
        <ViewTransitionPage />
      </>
    ),
  },
  {
    path: "/effect-event",
    element: <EffectEventPage />,
  },
  {
    path: "*",
    element: <Navigate replace to="/" />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="main-content">
      <RouterProvider router={router} />
    </main>
  </StrictMode>,
);
