import React from "react";
import Content from "./Content";

function PagesDefaultContent({ loaderData }) {
  return (
    <>
      <Content
        content={loaderData?.data?.entry?.fieldPortfolioContent}
      ></Content>
    </>
  );
}

export default PagesDefaultContent;
