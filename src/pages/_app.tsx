import ErrorBoundary from "@/layouts/ErrorBoundaries";
import "@/styles/globals.css";
import { NextPageWithLayout } from "@/utils";
import type { AppProps } from "next/app";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ErrorBoundary>{getLayout(<Component {...pageProps} />)}</ErrorBoundary>
  );
}
