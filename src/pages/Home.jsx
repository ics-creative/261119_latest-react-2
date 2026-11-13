import { NavLink } from "react-router-dom";

const pages = [
  { path: "/view-transition", label: "ViewTransition" },
  { path: "/effect-event", label: "useEffectEvent" },
  { path: "/transition", label: "useTransition" },
];

/**
 * 各ページへのリンク一覧を表示します。
 */
export const Home = () => (
  <ul className="home">
    {pages.map((page) => (
      <li key={page.path}>
        <NavLink to={page.path}>{page.label}</NavLink>
      </li>
    ))}
  </ul>
);
