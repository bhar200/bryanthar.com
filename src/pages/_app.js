import * as React from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles.css";
import "@fontsource/newsreader/400-italic.css";
import { useRouter } from "next/router";

const defaultLayout = function getLayout(page) {
  return (
    <>
      <CssBaseline />
      {page}
    </>
  );
};
export default function App({ Component, Props }) {
  const getLayout = Component.getLayout ?? defaultLayout;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>MatXi</title>
      </Head>
      {getLayout(<Component {...Props} />, router.asPath)}
    </>
  );
}
