import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";

import { AppProvider } from "@/appProvider/AppProvider.provider";
import { LayoutWrapper } from "@/shared";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SchoolBook",
  description: "New generation e-schoolbooks for students, teachers, parents",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <AppProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
