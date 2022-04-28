import React from "react";
import Container from "../base/Container";
import Textmedia from "./Textmedia";

function Content({ content }) {
  return (
    <div>
      {content.map((c, index) => {
        switch (c.__typename) {
          case "fieldPortfolioContent_typeTextMedia_BlockType":
            return <Textmedia key={index} content={c} />;
            break;
          default:
            return (
              <Container>No block found with type {c.__typename}</Container>
            );
            break;
        }
      })}
    </div>
  );
}

export default Content;
