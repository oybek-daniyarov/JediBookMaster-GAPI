import { useEffect } from "react";

const useKeyboardEvent = (keyboardKey: string, callback: () => void) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === keyboardKey && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        callback();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [callback, keyboardKey]);
};

export { useKeyboardEvent };
