import { useEffect, useState } from "react";

export default function useResize(width) {
  const [matches, setMatches] = useState(
    window.matchMedia(`(min-width: ${width}px)`).matches
  );

  const handleMatches = (e) => {
    setMatches(e.matches);
  };

  useEffect(() => {
    window
      .matchMedia(`(min-width: ${width}px)`)
      .addEventListener("change", handleMatches);
    return () => {
      window.removeEventListener("change", handleMatches);
    };
  }, [width]);

  return matches;
}
