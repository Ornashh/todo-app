import { useEffect, useState } from "react";

export default function useResize(width) {
  const [matches, setMatches] = useState(
    window.matchMedia(`(min-width: ${width}px)`).matches
  );

  useEffect(() => {
    window
      .matchMedia(`(min-width: ${width}px)`)
      .addEventListener("change", (e) => setMatches(e.matches));
    return () => {
      setMatches(null);
    };
  }, [width]);

  return matches;
}
