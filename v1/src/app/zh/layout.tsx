import type { ReactNode } from "react";

export default function ZhLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
