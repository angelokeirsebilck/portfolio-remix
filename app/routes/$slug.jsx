import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import PagesDefaultContent from "../components/content/PagesDefaultContent";
import cmsClient from "../utils/cmsClient";
import { gql } from "graphql-request";

export function headers({ loaderHeaders }) {
  return {
    "Cache-Control": loaderHeaders.get("Cache-Control"),
  };
}

export const loader = async ({ params, request }) => {
  const globalNavQuery = gql`
    query MyQuery($siteId: [QueryArgument]!, $slug: [String!]) {
      entry(siteId: $siteId, slug: $slug) {
        ... on portfolioPages_default_Entry {
          id
          fieldPortfolioContent {
            ... on fieldPortfolioContent_typeTextMedia_BlockType {
              __typename
              id
              itemText
              itemMedia {
                ... on imagesPortfolio_Asset {
                  id
                  title
                  fieldPortfolioDefaultImgOpt {
                    srcsetWebp
                    srcset
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const queryParams = {
    slug: params.slug,
    siteId: [3],
  };

  const data = await cmsClient.request(globalNavQuery, queryParams);

  return json(
    {
      data,
      slug: params.slug,
    },
    { status: 200, headers: { "cache-control": "max-age=15, must-revalidate" } }
  );
};

export default function Slug() {
  const loaderData = useLoaderData();
  let content;

  switch (loaderData.data.entry.__typename) {
    default:
      content = <PagesDefaultContent loaderData={loaderData} />;
      break;
  }
  return <>{content}</>;
}
