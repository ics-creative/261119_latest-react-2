/**
 * トースト
 * @param {{ message: string | undefined }} props
 */
export const Toast = ({ message }) =>
  message ? <p className="toast">{message}</p> : null;
