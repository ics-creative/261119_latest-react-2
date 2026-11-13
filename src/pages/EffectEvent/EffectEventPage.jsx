import { CompareGrid } from "../../components/CompareGrid.jsx";
import { NoEffectEvent } from "./NoEffectEvent.jsx";
import { WithEffectEvent } from "./WithEffectEvent.jsx";

/**
 * useEffectEventページ
 */
export const EffectEventPage = () => (
  <CompareGrid>
    <section className="page__section">
      <h2>Only useEffect</h2>
      <NoEffectEvent />
    </section>
    <section className="page__section">
      <h2>With useEffectEvent</h2>
      <WithEffectEvent />
    </section>
  </CompareGrid>
);
