import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { NextFont } from "next/dist/compiled/@next/font";
import { ContextProvider } from "@/context/context";

const inter: NextFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Forecast",
  description: "A weather forecast web application",
  authors: [{ name: "Asser Almadawy" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (props: RootLayoutProps) => {
  const { children }: RootLayoutProps = props;

  return (
    <ContextProvider>
      <html lang="en" dir="ltr">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </ContextProvider>
  );
};

export default RootLayout;