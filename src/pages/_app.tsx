import { Footer } from "@/components/navigations/footer/Footer";
import { Top_Navigation_Bar } from "@/components/navigations/Top_Navigation_Bar";
import { NextIntlClientProvider } from "next-intl";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Vienna"
      messages={pageProps.messages}
    >
      <Top_Navigation_Bar />
      <Component {...pageProps} />
      <Footer />
    </NextIntlClientProvider>
  );
}
