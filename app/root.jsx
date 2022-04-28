import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import styles from "./tailwind.css";
import getMainNav from "./utils/nav.server";
import Nav from "./components/nav/Nav";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [{ rel: "stylesheet", href: styles }];

export const loader = async () => {
  const nav = await getMainNav();
  return json(nav);
};

export default function App() {
  const nav = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Nav nav={nav} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
