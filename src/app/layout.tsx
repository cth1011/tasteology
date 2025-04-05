import "~/styles/globals.css";

import { type Metadata } from "next";
import { Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Tasteology",
  description: "A culinary journey through taste and color",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
