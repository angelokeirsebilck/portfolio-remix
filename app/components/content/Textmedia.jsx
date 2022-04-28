import React from "react";
import parse from "html-react-parser";
import Container from "../base/Container";

const getSizes = () => {
  return "(max-width: 375px) 342px, (max-width: 640px) 607px, (max-width: 768px) 720px, (max-width: 1024px) 475px, (max-width: 1280px) 603px, 732px";
};

const Textmedia = ({ content }) => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10">
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
              src={
                content.itemMedia[0].fieldPortfolioDefaultImgOpt
                  .placeholderImage
              }
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
