type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-terracotta-500" />
      <span className="text-[0.7rem] uppercase tracking-label text-terracotta-500 font-medium">
        {children}
      </span>
    </div>
  );
}
