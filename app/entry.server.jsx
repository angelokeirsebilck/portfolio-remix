import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import etag from "etag";

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");
  // responseHeaders.set("ETag", etag(markup));

  // if (request.headers.get("If-None-Match") === request.headers.get("ETag")) {
  //   // and send an empty Response with status 304 and the headers.
  //   return new Response("", { status: 304, headers: request.headers });
  // }

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}

export let handleDataRequest = async (response, { request }) => {
  let body = await response.text(); // parse the response body as text

  // only add the ETag for GET requests
  if (request.method.toLowerCase() === "get") {
    response.headers.set("etag", etag(body)); // and use it to create the ETag

    // As with document requests, check the `If-None-Match` header
    // and compare it with the Etag, if they match, send the empty 304 Response
    if (request.headers.get("If-None-Match") === response.headers.get("ETag")) {
      return new Response("", { status: 304, headers: response.headers });
    }
  }

  return response; // return the response
};
