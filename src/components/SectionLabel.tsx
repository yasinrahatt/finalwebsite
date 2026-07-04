type SectionLabelProps = {
  children: string;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-5 inline-flex rounded-full border border-black/10 bg-surface px-4 py-1.5 text-xs font-semibold uppercase text-neutral-500 shadow-line">
      {children}
    </p>
  );
}
