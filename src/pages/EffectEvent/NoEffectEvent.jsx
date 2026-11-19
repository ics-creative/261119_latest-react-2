import { useEffect, useState } from "react";
import { AutoSaveResult } from "./AutoSaveResult.jsx";
import { autoSave } from "./autoSave.js";
import { countdown } from "./countdown.js";

/**
 * useEffectEventを使わないデモ
 */
export const NoEffectEvent = () => {
  // 入力値
  const [content, setContent] = useState("");
  // 保存された値
  const [saved, setSaved] = useState("");
  // 保存までのカウントダウン
  const [secondsRemaining, setSecondsRemaining] = useState(5);

  useEffect(() => {
    // 自動保存を開始する
    const stopAutoSave = autoSave(() => setSaved(content));
    // カウントダウンを開始する
    const stopCountdown = countdown(setSecondsRemaining);

    return () => {
      stopAutoSave();
      stopCountdown();
    };
  }, [content]);

  return (
    <div className="effect-event">
      <textarea
        className="effect-event__input"
        rows={3}
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
          setSecondsRemaining(5);
        }}
        placeholder="Write a note..."
      />
      <AutoSaveResult
        savedContent={saved}
        secondsRemaining={secondsRemaining}
      />
    </div>
  );
};
