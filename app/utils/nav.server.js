import { gql } from "graphql-request";
import cmsClient from "./cmsClient";

export default getNav = async () => {
  const queryParams = {
    siteId: [3],
  };

  const globalNavQuery = gql`
    query MyQuery($siteId: [QueryArgument]!) {
      globalSet(handle: "globalPortfolioNavigation", siteId: $siteId) {
        ... on globalPortfolioNavigation_GlobalSet {
          fieldPortfolioMainNav {
            ... on fieldPortfolioMainNav_BlockType {
              itemLink {
                slug
                title
              }
            }
          }
        }
      }
    }
  `;

  const {
    globalSet: { fieldPortfolioMainNav },
  } = await cmsClient.request(globalNavQuery, queryParams);

  const navList = fieldPortfolioMainNav.map((element) => {
    return element.itemLink[0];
  });

  return navList;
};
