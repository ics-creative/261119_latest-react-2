import { useEffect, useEffectEvent, useState } from "react";
import { AutoSaveResult } from "./AutoSaveResult.jsx";
import { autoSave } from "./autoSave.js";
import { countdown } from "./countdown.js";

/**
 * useEffectEventを使ったデモ
 */
export const WithEffectEvent = () => {
  // 入力値
  const [content, setContent] = useState("");
  // 保存された値
  const [saved, setSaved] = useState("");
  // 保存までのカウントダウン
  const [secondsRemaining, setSecondsRemaining] = useState(5);

  const saveDraft = useEffectEvent(() => {
    setSaved(content);
  });

  useEffect(() => {
    // 自動保存を開始する
    const stopAutoSave = autoSave(() => saveDraft());
    // カウントダウンを開始する
    const stopCountdown = countdown(setSecondsRemaining);

    return () => {
      stopAutoSave();
      stopCountdown();
    };
  }, []);

  return (
    <div className="effect-event">
      <textarea
        className="effect-event__input"
        placeholder="Write a note..."
        rows={3}
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <AutoSaveResult
        savedContent={saved}
        secondsRemaining={secondsRemaining}
      />
    </div>
  );
};
