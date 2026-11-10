import { useCallback, useEffect, useState } from "react";

/**
 * 通知を表示し、最後の通知から3秒後に非表示にします。
 * @returns {{ toast: { message: string } | null, showToast: (message: string) => void }} 通知内容と表示関数
 */
export const useToast = () => {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast({ message });
  }, []);

  useEffect(() => {
    if (!toast) return;

    const timeoutId = window.setTimeout(() => setToast(null), 3000);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  return { toast, showToast };
};
