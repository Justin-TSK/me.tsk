"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  eraseSpeed?: number;
  pauseAfterTyping?: number;
  pauseAfterErasing?: number;
}

export default function TypewriterText({
  text,
  className,
  speed = 80,
  eraseSpeed = 40,
  pauseAfterTyping = 1500,
  pauseAfterErasing = 500,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeLoop = () => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i < text.length) {
        timeoutId = setTimeout(typeLoop, speed);
      } else {
        timeoutId = setTimeout(eraseLoop, pauseAfterTyping);
      }
    };

    const eraseLoop = () => {
      i -= 1;
      setDisplayed(text.slice(0, i));
      if (i > 0) {
        timeoutId = setTimeout(eraseLoop, eraseSpeed);
      } else {
        timeoutId = setTimeout(typeLoop, pauseAfterErasing);
      }
    };

    timeoutId = setTimeout(typeLoop, speed);

    return () => clearTimeout(timeoutId);
  }, [text, speed, eraseSpeed, pauseAfterTyping, pauseAfterErasing]);

  return (
    <span className={className}>
      {displayed}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-current align-middle" />
    </span>
  );
}