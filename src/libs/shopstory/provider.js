'use client'

import * as React from "react"
import {
    ShopstoryProvider,
} from "@shopstory/react";

const CoreShopstoryProvider = ({ children }) => (
 
  <>
  <ShopstoryProvider>
    {children}
  </ShopstoryProvider>
  </>

);

export default CoreShopstoryProvider