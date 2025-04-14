
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel | Full Stack Developer",
  description: "Personal Portfólio of Gabriel a full stack developer.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-zinc-900 text-zinc-100`}> 
        
        <main className="max-w-4xl mx-auto px-4 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}