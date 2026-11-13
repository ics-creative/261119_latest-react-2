import { CompareGrid } from "../../components/CompareGrid.jsx";
import { NoTransition } from "./NoTransition.jsx";
import { Transition } from "./Transition.jsx";

export const TransitionPage = () => (
  <CompareGrid>
    <section className="page__section">
      <h2>No Transition</h2>
      <NoTransition />
    </section>
    <section className="page__section">
      <h2>Transition</h2>
      <Transition />
    </section>
  </CompareGrid>
);
