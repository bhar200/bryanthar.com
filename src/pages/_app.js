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
      <Seo
        title="Bryant Har"
        description="Software engineer, researcher, and designer. Making meaningful systems and interfaces for people."
      />
      <Head>
        <title>Bryant Har</title>
        <meta name="description" content="Software engineer, researcher, physicist, and designer. Meaningful systems and user interfaces"></meta>
        <meta name = "description" content = "software projects, operating systems, web development, numerical analysis, music, programming languages, machine learning, and more"></meta>
      </Head>
      {getLayout(<Component {...Props} />, router.asPath)}
    </>
  );
}
