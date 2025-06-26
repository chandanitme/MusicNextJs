import React from "react";

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* You can add a sidebar, header, or other layout elements here */}
      {children}
    </section>
  );
}
