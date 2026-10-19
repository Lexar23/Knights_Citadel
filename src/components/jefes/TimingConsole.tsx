import React from "react";

interface TimingConsoleProps {
  title: string;
  steps: string[];
}

// Marca los segundos (ej. 58.500, 2.563, 28s) y las flechas de secuencia.
const TOKEN = /(\d{1,2}\.\d{3}|\b\d{1,2}s\b|→)/;

function highlight(text: string) {
  return text.split(TOKEN).map((part, i) => {
    if (part === "→") {
      return (
        <span key={i} className="text-deep-fern">
          →
        </span>
      );
    }
    // Las partes impares del split son los tokens capturados (segundos).
    if (i % 2 === 1) {
      return (
        <span key={i} className="text-lime-pulse">
          {part}
        </span>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

/** Ventana de "terminal" para los timings de la partida. */
export default function TimingConsole({ title, steps }: TimingConsoleProps) {
  return (
    <div className="overflow-hidden rounded-[18px] border-2 border-pine-15 bg-ground-iron shadow-[0_4px_0_#0f0b29]">
      <div className="flex items-center gap-2 border-b border-phosphor-blue-black bg-carbon-veil px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-candy-pink" />
        <span className="h-2 w-2 rounded-full bg-lime-pulse" />
        <span className="h-2 w-2 rounded-full bg-candy-blue" />
        <span className="ml-auto text-[12px] font-medium text-moss-70">{title}</span>
      </div>
      <ol className="flex flex-col gap-4 p-6 font-mono text-[14px] leading-[1.6] text-mint-frost/85">
        {steps.map((step, i) => (
          <li key={i} className="grid grid-cols-[2.5ch_1fr] gap-3">
            <span className="select-none text-sage-40">{String(i + 1).padStart(2, "0")}</span>
            <span>{highlight(step)}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
