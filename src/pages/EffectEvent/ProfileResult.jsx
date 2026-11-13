/**
 * プロフィールの取得完了回数・名前・職種を表示する
 * @param {number} count
 * @param {string | undefined} name
 * @param {string | undefined} role
 * @param {string} theme
 */
export const ProfileResult = ({ count, name, role, theme }) => (
  <section className="effect-event__result" data-theme={theme}>
    <p className="effect-event__result-title">API Count: {count}</p>
    {name && (
      <div>
        <p>Name: {name}</p>
        <p>Role: {role}</p>
      </div>
    )}
  </section>
);
