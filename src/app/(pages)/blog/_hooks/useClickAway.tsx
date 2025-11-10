import { useEffect, RefObject } from "react";

interface UseClickAwayOptions {
  closeOnScroll?: boolean;
  allowedIds?: string[];
}

export function useClickAway(ref: RefObject<HTMLElement>, onClose: () => void, options: UseClickAwayOptions = {}) {
  const { closeOnScroll = false, allowedIds = [] } = options;
  useEffect(() => {
    function handleClick(event: MouseEvent | TouchEvent | FocusEvent) {
      const targetId = (event?.target as HTMLElement)?.id;
      const isAllowed = allowedIds.map((id) => id.replace("#", "")).includes(targetId);
      const childOfAllowed = allowedIds.some((id) => {
        const allowedId = id.startsWith("#") ? id : `#${id}`;
        return !!(event?.target as HTMLElement)?.querySelector(allowedId);
      });
      if (isAllowed || childOfAllowed) return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleScroll(e: Event) {
      if (options.closeOnScroll && ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    document.addEventListener("focusin", handleClick);

    if (options.closeOnScroll) {
      window.addEventListener("scroll", handleScroll, true); // use capture phase
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
      document.removeEventListener("focusin", handleClick);

      if (options.closeOnScroll) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, [ref, onClose, options]);
}
