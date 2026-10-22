import { IGuideCredit } from "@/Interfaces/IBoss";
import TimingConsole from "./TimingConsole";

interface GuideInfoProps {
  notes: string[];
  timing: string[];
  timingTitle: string;
  credit?: IGuideCredit;
  /** false oculta la columna de Timing (ej. Arena, que es automática). */
  showTiming?: boolean;
}

/** Bloque "Info" de una guía: notas importantes, créditos y timing. */
export default function GuideInfo({ notes, timing, timingTitle, credit, showTiming = true }: GuideInfoProps) {
  return (
    <section className={`panel mt-2 grid grid-cols-1 gap-10 p-6 md:p-8 ${showTiming ? "lg:grid-cols-2" : ""}`}>
      <div>
        <p className="eyebrow">Antes de pelear</p>
        <h2 className="mt-2 text-heading-sm">Notas importantes</h2>
        {notes.length > 0 ? (
          <ul className="mt-4 flex flex-col">
            {notes.map((note, i) => (
              <li
                key={i}
                className="grid grid-cols-[2.5ch_1fr] gap-3 border-t border-phosphor-blue-black py-3 text-[15px] text-sage-60"
              >
                <span className="text-[13px] text-sage-40">{String(i + 1).padStart(2, "0")}</span>
                {note}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-[15px] text-deep-fern">Sin notas para esta guía.</p>
        )}

        {credit && (
          <div className="mt-6 rounded-[14px] border border-phosphor-blue-black p-4">
            <p className="eyebrow">Créditos de la guía</p>
            <p className="mt-1 font-cookie text-[18px] text-phosphor-white">{credit.author}</p>
            {credit.note && <p className="mt-1 text-[14px] text-sage-60">{credit.note}</p>}
            <ul className="mt-3 flex flex-wrap gap-2">
              {credit.contacts?.map((c) => (
                <li key={c.label} className="chip">
                  <span className="text-deep-fern">{c.label}</span>
                  {c.value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {showTiming && (
        <div>
          <p className="eyebrow">Durante la pelea</p>
          <h2 className="mt-2 text-heading-sm">Timing</h2>
          <div className="mt-4">
            {timing.length > 0 ? (
              <TimingConsole title={timingTitle} steps={timing} />
            ) : (
              <p className="text-[15px] text-deep-fern">Aún no hay timing registrado.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
