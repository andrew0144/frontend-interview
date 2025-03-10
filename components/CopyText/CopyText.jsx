"use client";

import {useState, useCallback} from "react";
import CopySvg from "@/public/icons/copy.svg";
import constructClassName from "@/utilities/constructClassName";
import css from "./CopyText.module.scss";

export const CopyText = ({
  className = "",
  feedbackDuration = 1500,
  text,
}) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("Copied!");
  const handleCopy = useCallback(async() => {
    try {
      await navigator.clipboard.writeText(text);
      setFeedbackText("Copied!");
      setShowFeedback(true);

      const timeoutId = setTimeout(() => {
        setShowFeedback(false);
      }, feedbackDuration);

      return () => clearTimeout(timeoutId);
    } catch (error) {
      console.error("Failed to copy text:", error);
      setFeedbackText("Copy failed!");
      setShowFeedback(true);

      setTimeout(() => {
        setShowFeedback(false);
      }, feedbackDuration);
    }
  }, [text, feedbackDuration]);

  const thisClassName = constructClassName(css, "copyText", className);

  return <span
    className={thisClassName}
    onClick={handleCopy}
    title="Click to copy"
  >
    <span className={`${css.feedbackText} ${showFeedback ? css.visible : ""}`}>
      {feedbackText}
    </span>
    <span className={css.originalText}>
      <CopySvg/>
      {text}
    </span>
  </span>;
};
