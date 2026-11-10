/**
 * トースト
 * @param {string | undefined} message
 */
export const Toast = ({ message }) =>
  message ? <p className="toast">{message}</p> : null;
