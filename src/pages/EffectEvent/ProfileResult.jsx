/**
 * プロフィールの取得完了回数・名前・職種を表示する
 */
export const ProfileResult = ({ result, theme }) => (
  <section className="effect-event__result" data-theme={theme}>
    <p>API Count: {result.count}</p>
    {result.profile && (
      <div>
        <p>Name: {result.profile.name}</p>
        <p>Role: {result.profile.role}</p>
      </div>
    )}
  </section>
);
