import { useEffect, useRef, useState } from 'react';

/**
 * Cycles through an array of strings with a typewriter effect.
 * @param words   - Array of strings to cycle through
 * @param typeSpeed  - ms per character when typing (default 80)
 * @param deleteSpeed - ms per character when deleting (default 40)
 * @param pause   - ms to hold on completed word (default 2000)
 */
export function useTypewriter(
  words: string[],
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 2000
): string {
  const [displayed, setDisplayed] = useState('');
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const tick = () => {
      const current = words[wordIndex.current];

      if (!isDeleting.current) {
        // Typing forward
        setDisplayed(current.slice(0, charIndex.current + 1));
        charIndex.current++;
        if (charIndex.current === current.length) {
          // Finished typing — pause then start deleting
          isDeleting.current = true;
          timeout.current = setTimeout(tick, pause);
          return;
        }
      } else {
        // Deleting
        setDisplayed(current.slice(0, charIndex.current - 1));
        charIndex.current--;
        if (charIndex.current === 0) {
          isDeleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
        }
      }

      timeout.current = setTimeout(tick, isDeleting.current ? deleteSpeed : typeSpeed);
    };

    timeout.current = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timeout.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return displayed;
}
