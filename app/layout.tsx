import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DELETE TV — Video Art & AI Short Film Festival | Open Submissions Season 13",
  description: "DELETE TV is an international video art and experimental short film festival. Season 13 submissions are open — AI films, video art, and experimental cinema welcome. Submit via FilmFreeway.",
  alternates: {
    canonical: "https://delete-tv.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S99H7Z1TBE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S99H7Z1TBE');
          `}
        </Script>
      </body>
    </html>
  );
}
