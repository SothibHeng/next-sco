import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { inter, suwannaphum, localCustomFont } from "./font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISTAD E-commerce website",
  description:
    "ISTAD E-commerce website is a website that provides a lot of products and services.",
  openGraph: {
    title: "ISTAD E-commerce website",
    description:
      "ISTAD E-commerce website is a website that provides a lot of products and services.",
	  images: "https://store.istad.co/media/brand_images/macbook.jpg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`}
      >
        <header>
          <NavbarComponent />
        </header>
        <ErrorBoundary errorComponent={Error}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
