import React from "react";

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode | React.ReactNode[];
  hr?: boolean;
}
export default function Section({ title, subtitle, children, hr = false }: SectionProps) {
  return (
    <div>
      <h2>{title}</h2>
      <h3 className="mb-3">{subtitle}</h3>
      {children}
      {hr && <hr className="my-3" />}
    </div>
  );
}
