import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praxis Dr. Vlachou-Vaterrodt | Augenheilkunde in Grünwald",
  description:
    "Praxis Dr. Vlachou-Vaterrodt – persönliche Augenheilkunde in Grünwald.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
