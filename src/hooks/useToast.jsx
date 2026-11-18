import { useCallback, useEffect, useState } from "react";
import { SimpleToast } from "../components/SimpleToast";

/**
 * 通知を表示し、最後の通知から3秒後に非表示にします。
 * @returns {{ toast: { message: string } | null, showToast: (message: string) => void }} 通知内容と表示関数
 */
export const useToast = () => {
  const [toastContent, setToastContent] = useState(null);

  const showToast = useCallback((message, theme) => {
    setToastContent({ message, theme });
  }, []);

  useEffect(() => {
    if (!toastContent) return;

    const timeoutId = window.setTimeout(() => setToastContent(null), 3000);
    return () => window.clearTimeout(timeoutId);
  }, [toastContent]);

  // トーストコンポーネント
  const toast = toastContent && (
    <SimpleToast message={toastContent.message} theme={toastContent.theme} />
  );

  return { toast, showToast };
};
