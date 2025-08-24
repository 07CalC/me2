
import React, { useState, useEffect } from "react";

const words = ["Vinayak", "CalC"];
const TYPING_SPEED = 80;
const PAUSE = 1000;

export default function AnimatedHeader() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && text === words[wordIndex]) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }, PAUSE);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => {
          const fullWord = words[wordIndex];
          return isDeleting
            ? fullWord.substring(0, prev.length - 1)
            : fullWord.substring(0, prev.length + 1);
        });
      }, TYPING_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <h1 className="text-3xl min-w-[150px] text-center font-bold text-purple-700 dark:text-purple-500">
      {text}
    </h1>
  );
}
