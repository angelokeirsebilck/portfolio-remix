import React from "react";
import parse from "html-react-parser";
import Container from "../base/Container";

const getSizes = () => {
  return "(max-width: 375px) 327px, (max-width: 640px) 561px, (max-width: 768px) 576px, (max-width: 1024px) 460px, (max-width: 1200px) 716px,";
};

const Textmedia = ({ content }) => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-10">
        <div className="prose">{parse(content.itemText)}</div>
        <div className="">
          <picture>
            <source
              srcSet={
                content.itemMedia[0].fieldPortfolioDefaultImgOpt.srcsetWebp
              }
              type="image/webp"
            />
            <img
              src={content.itemMedia[0].fieldPortfolioDefaultImgOpt.src}
              srcSet={content.itemMedia[0].fieldPortfolioDefaultImgOpt.srcset}
              alt={content.itemMedia[0].title}
            />
          </picture>
        </div>
      </div>
    </Container>
  );
};

export default Textmedia;
