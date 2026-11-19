/**
 * 5秒ごとの自動保存を行います。
 * @param {() => void} onSave 保存時に呼び出す処理
 */
export const autoSave = (onSave) => {
  const intervalId = window.setInterval(onSave, 5000);

  return () => window.clearInterval(intervalId);
};
