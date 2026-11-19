/**
 * 5秒のカウントダウンを行います
 * @param {(secondsRemaining: number) => void} onTick 1秒ごとに実行するコールバック
 */
export const countdown = (onTick) => {
  let secondsRemaining = 5;
  const intervalId = window.setInterval(() => {
    secondsRemaining = secondsRemaining === 1 ? 5 : secondsRemaining - 1;
    onTick(secondsRemaining);
  }, 1000);

  return () => window.clearInterval(intervalId);
};
