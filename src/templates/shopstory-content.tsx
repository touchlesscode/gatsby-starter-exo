import * as React from "react";
import type { RenderableContent, Metadata } from "@shopstory/core";
import {
  Shopstory,
  ShopstoryMetadataProvider,
  ShopstoryProvider,
} from "@shopstory/react";
import type { PageProps } from "gatsby";

type ShopstoryContentProps = PageProps<
  never,
  {
    content: RenderableContent;
    meta: Metadata;
  }
>;

function ShopstoryContent(props: ShopstoryContentProps) {
  return (
    <ShopstoryProvider>
      <ShopstoryMetadataProvider meta={props.pageContext.meta}>
        <Shopstory content={props.pageContext.content} />
      </ShopstoryMetadataProvider>
    </ShopstoryProvider>
  );
}

export default ShopstoryContent;
