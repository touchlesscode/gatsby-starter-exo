'use client'
import * as React from "react"
import { Canvas }  from "@shopstory/react";
import { shopstoryConfig } from "../libs/shopstory/config";
import CoreShopstoryProvider from "../libs/shopstory/provider";

export default function CanvasPage() {
  return <CoreShopstoryProvider>
    <Canvas config={shopstoryConfig} />
  </CoreShopstoryProvider>
}
