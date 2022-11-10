import { sdk } from "../../sdk-temp";

//import { PageRenderer } from "@components-frontend/react";
import { PageRenderer } from "components/renderer";

import Tile from "components/tile";
import Hero from "components/hero";

sdk.configure({
  locale: "en-GB",
  currency: "EUR",
  endpoint: process.env.COFE_HOST,
});

const components = {
  "commercetools/ui/content/tile": Tile,
  "commercetools/ui/hero": Hero,
};

export default async function Home({ params, _searchParams }) {
  const slug = params.slug?.join("/") || "";
  const path = `/${slug !== "index" ? slug : ""}`;
  const data = await sdk.getPage(path);

  return <PageRenderer data={data} components={components} />;
}
