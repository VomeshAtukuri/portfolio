import Image from "next/image";

export function Experience({ data }: { data: any }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 card-hover">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <div className="flex items-center gap-4">
          <div className={`h-11 w-11 rounded-lg flex items-center justify-center shrink-0 overflow-hidden ${data.logoBg || "bg-primary/10 border border-primary/20"}`}>
            {data.logoSrc ? (
              <Image src={data.logoSrc} alt={data.company} width={28} height={28} className="object-contain" />
            ) : (
              <span className="text-xs font-bold text-primary">{data.logo}</span>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{data.title}</h3>
            <p className="text-primary font-medium text-sm">{data.company}</p>
          </div>
        </div>
        <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
          {data.timeline}
        </span>
      </div>
      <div className="space-y-4">
        {data.experience.map((item: any, index: number) => (
          <div key={index}>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {item.shortreview}
            </p>
            <ul className="space-y-2">
              {item.points.map((point: any, idx: number) => (
                <li key={idx} className="flex gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-secondary-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
