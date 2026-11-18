/**
 * トースト
 * @param {string | undefined} message
 * @param {"white" | "black"} theme
 */
export const SimpleToast = ({ message, theme }) =>
  message ? <p className={["toast", `${theme}`].join(" ")}>{message}</p> : null;
