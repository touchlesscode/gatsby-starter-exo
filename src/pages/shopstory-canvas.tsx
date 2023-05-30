import { Canvas, ShopstoryProvider } from "@shopstory/react";
import { sanityPlugin } from "@shopstory/sanity";
import { dataset, projectId, readToken } from "../../libs/sanity-studio/env";

export default function ShopstoryCanvasPage() {
  return (
    <ShopstoryProvider>
      <Canvas
        config={{
          plugins: [
            sanityPlugin({
              dataset: dataset,
              projectId: projectId,
              token: readToken,
            }),
          ],
        }}
      />
    </ShopstoryProvider>
  );
}
