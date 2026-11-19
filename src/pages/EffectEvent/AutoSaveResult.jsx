/**
 * 保存内容・次の保存までの秒数を表示します。
 * @param {string | null} savedContent
 * @param {number} secondsRemaining
 */
export const AutoSaveResult = ({ savedContent, secondsRemaining }) => (
  <div className="effect-event__result">
    <p>
      Next Save:{" "}
      <span className="effect-event__second">{secondsRemaining}s</span>
    </p>
    <div className="effect-event__saved-wrapper">
      <p className="effect-event__saved-title">Saved</p>
      <p className="effect-event__saved-content">{savedContent ?? ""}</p>
    </div>
  </div>
);
