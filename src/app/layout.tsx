import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GO Auto",
  description: "Transforme seu carro sem sair de casa. A GO Auto oferece detalhamento automotivo completo a domicílio com qualidade premium, rapidez e total conveniência em Poços de Caldas.",
  keywords: [
    "estética automotiva",
    "detalhamento automotivo",
    "lavagem automotiva",
    "polimento automotivo",
    "estética automotiva a domicílio",
    "GO Auto",
    "lavagem a domicílio",
    "carro limpo em casa",
    "serviço automotivo premium",
    "higienização interna de carros",
    "cuidados automotivos em casa",
    "Poços de Caldas",
    "carro novo em casa"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
