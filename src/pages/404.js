import * as React from "react";
import "../styles/index.scss";
import Header from "./header";

const NotFoundPage = () => {
  return (
    <>
    <Header />
    <main>
      <p>Error! This page doesn't exist.</p>
    </main>
    </>
  )
}

export default NotFoundPage
