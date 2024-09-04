import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Inter as FontSans } from "next/font/google";
import { type Metadata } from "next";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/components/theme-provider";
import { Toaster } from "~/components/ui/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "HelloFaizan Template",
  description: "A template for Next.js with Shadcn UI and TypeScript",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
