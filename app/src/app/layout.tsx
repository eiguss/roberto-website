import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roberto Martínez Querol | Director of Engineering | Senior software architect",
  description: "Portfolio and CV of Roberto Martínez Querol, Director of Engineering specialized in AI and Full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-black text-white selection:bg-blue-500/30`}
      >
        {children}
      </body>
    </html>
  );
}
