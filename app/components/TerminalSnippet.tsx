"use client";

import { useEffect, useState, useCallback } from "react";

const lines = [
  { text: "const ", highlight: "primary" },
  { text: "dev = {", highlight: "none" },
  { text: '  name: "Vomesh"', highlight: "string" },
  { text: '  role: "SDE"', highlight: "string" },
  { text: "  coffee: true", highlight: "bool" },
  { text: "};", highlight: "none" },
];

const TYPING_SPEED = 60;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 500;

type Phase = "typing" | "pausing" | "deleting" | "waiting";

export function TerminalSnippet() {
  const [visibleChars, setVisibleChars] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  const totalChars = lines.reduce((sum, line) => sum + line.text.length, 0);

  const tick = useCallback(() => {
    switch (phase) {
      case "typing":
        if (visibleChars < totalChars) {
          setVisibleChars((prev) => prev + 1);
        } else {
          setPhase("pausing");
        }
        break;
      case "pausing":
        setPhase("deleting");
        break;
      case "deleting":
        if (visibleChars > 12) {
          setVisibleChars((prev) => prev - 1);
        } else {
          setPhase("waiting");
        }
        break;
      case "waiting":
        setPhase("typing");
        break;
    }
  }, [phase, visibleChars, totalChars]);

  useEffect(() => {
    let delay: number;
    switch (phase) {
      case "typing":
        delay = TYPING_SPEED;
        break;
      case "pausing":
        delay = PAUSE_AFTER_TYPE;
        break;
      case "deleting":
        delay = DELETING_SPEED;
        break;
      case "waiting":
        delay = PAUSE_AFTER_DELETE;
        break;
    }
    const timeout = setTimeout(tick, delay);
    return () => clearTimeout(timeout);
  }, [tick, phase]);

  let charCount = 0;

  return (
    <div className="rounded-2xl bg-card border border-border p-5 font-mono text-sm glow min-w-[200px] shadow-sm">
      <div className="flex items-center gap-1.5 mb-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div className="space-y-1.5 text-muted-foreground min-h-[120px]">
        {lines.map((line, idx) => {
          const lineStart = charCount;
          charCount += line.text.length;
          const visibleLen = Math.max(0, Math.min(line.text.length, visibleChars - lineStart));
          const visibleText = line.text.slice(0, visibleLen);
          const isActiveLine = visibleChars >= lineStart && visibleChars < lineStart + line.text.length;

          if (visibleLen === 0 && !isActiveLine) return null;

          return (
            <p key={idx} className={idx > 0 && idx < 5 ? "pl-4" : ""}>
              {line.highlight === "primary" && visibleText.includes("const") ? (
                <>
                  <span className="text-primary font-medium">
                    {visibleText.slice(0, Math.min(visibleLen, 6))}
                  </span>
                  <span>{visibleText.slice(6)}</span>
                </>
              ) : line.highlight === "string" ? (
                <span>
                  {visibleText.split('"').map((part, i) =>
                    i % 2 === 1 ? (
                      <span key={i} className="text-emerald-600">&quot;{part}&quot;</span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </span>
              ) : line.highlight === "bool" ? (
                <span>
                  {visibleText.includes("true") ? (
                    <>
                      {visibleText.replace("true", "")}
                      <span className="text-primary font-medium">true</span>
                    </>
                  ) : (
                    visibleText
                  )}
                </span>
              ) : (
                <span>{visibleText}</span>
              )}
              {isActiveLine && (
                <span className="inline-block w-2 h-4 bg-primary/80 ml-0.5 animate-pulse align-middle" />
              )}
            </p>
          );
        })}
        {visibleChars >= totalChars && phase === "pausing" && (
          <span className="inline-block w-2 h-4 bg-primary/80 ml-0.5 animate-pulse align-middle" />
        )}
        {visibleChars === 0 && (phase === "waiting" || phase === "typing") && (
          <span className="inline-block w-2 h-4 bg-primary/80 ml-0.5 animate-pulse align-middle" />
        )}
      </div>
    </div>
  );
}
