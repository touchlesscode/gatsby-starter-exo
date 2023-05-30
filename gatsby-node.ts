import { ShopstoryClient } from "@shopstory/core";
import { sanityPlugin } from "@shopstory/sanity";
import { CreatePagesArgs, CreateWebpackConfigArgs } from "gatsby";
import { resolve } from "path";
import { dataset, projectId, readToken } from "./libs/sanity-studio/env";

export function onCreateWebpackConfig({
  actions,
  stage,
}: CreateWebpackConfigArgs) {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        vm: false,
      },
    },
  });

  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      externals: ["node:https", "node:http", "node:url"],
    });
  }
}

export async function createPages({
  actions: { createPage, createRedirect },
  graphql,
}: CreatePagesArgs) {
  const shopstoryClient = new ShopstoryClient(
    {
      plugins: [
        sanityPlugin({
          dataset: dataset,
          projectId: projectId,
          token: readToken,
        }),
      ],
    },
    {
      locale: "en",
    }
  );

  const content = shopstoryClient.add({
    _id: "8bf758e0-7d02-42a3-be8b-047e2aa2a4a6",
    _template: "$RootSections",
    data: [
      {
        _id: "dd86e151-3560-41ab-9586-fe9a6ffc6b70",
        _template: "$BannerSection",
        containerMargin: {
          $res: true,
          xl: {
            value: {
              $res: true,
              xs: 24,
              sm: 24,
              md: 40,
              lg: 50,
              xl: 64,
              "2xl": 96,
            },
            ref: "containerMargin.default",
          },
        },
        escapeMargin: {
          $res: true,
          xl: false,
        },
        hide: {
          $res: true,
          xl: false,
        },
        Component: [
          {
            _id: "73cdb07a-56d0-423e-a6a2-1a824274d6ce",
            _template: "$BannerCard",
            cornerRadius: {
              $res: true,
              xl: "0",
            },
            SideImage: [
              {
                _id: "76668d18-860d-4e1c-aca7-7d829ea727ab",
                _template: "$image",
                image: {
                  $res: true,
                  xl: {
                    id: null,
                  },
                },
                aspectRatio: {
                  $res: true,
                  xl: {
                    value: "3:2",
                    ref: "$landscape",
                  },
                },
                action: [],
              },
            ],
            sideImagePosition: {
              $res: true,
              xl: "right",
            },
            sideImageSize: {
              $res: true,
              xl: {
                value: "3:2",
                ref: "$landscape",
              },
            },
            size: {
              $res: true,
              xl: {
                value: "3:2",
                ref: "$landscape",
              },
            },
            contentPositionInBackgroundMode: {
              $res: true,
              xl: "bottom-center",
            },
            contentHorizontalMarginInBackgroundMode: {
              $res: true,
              xl: {
                value: 24,
                ref: "24",
              },
            },
            contentVerticalMarginInBackgroundMode: {
              $res: true,
              xl: {
                value: 24,
                ref: "24",
              },
            },
            Background: [],
            offsetHorizontal: {
              $res: true,
              xl: {
                value: 24,
                ref: "24",
              },
            },
            offsetVertical: {
              $res: true,
              xl: {
                value: 24,
                ref: "24",
              },
            },
            Stack: [
              {
                _id: "cc96aea8-e7c1-41d9-8425-2c30fc224989",
                _template: "$stack",
                align: {
                  $res: true,
                  xl: "left",
                },
                Items: [
                  {
                    _id: "361f28c8-411d-4628-a979-95c82a311075",
                    _template: "$text",
                    value: {
                      id: "local.ca345d8f-d805-4ae0-ba00-7a530efedd56",
                      value: {
                        en: 'Below we should see\n- left grey arrow button (action link)\n- big red button with black border and black icon "play" (action link)\n- client defined button with "pause" icon, should be white (action custom)',
                      },
                    },
                    color: {
                      $res: true,
                      xl: {
                        value: "black",
                        ref: "black",
                      },
                    },
                    font: {
                      $res: true,
                      xl: {
                        value: {
                          $res: true,
                          "2xl": {
                            fontFamily: "'Graphik Web', sans-serif",
                            fontSize: 16,
                            lineHeight: 1.4,
                          },
                        },
                        ref: "body",
                      },
                    },
                    _itemProps: {
                      $stack: {
                        Items: {
                          width: {
                            $res: true,
                            xl: "576px",
                          },
                          "$previous.marginBottom": {
                            $res: true,
                            xl: {
                              value: 0,
                              ref: "0",
                            },
                          },
                          marginBottom: {
                            $res: true,
                            xl: {
                              value: 0,
                              ref: "0",
                            },
                          },
                        },
                      },
                    },
                  },
                  {
                    _id: "0fb37d99-5c19-44b9-b0fc-a73d12ffdca3",
                    _template: "$buttons",
                    verticalLayout: false,
                    gap: {
                      $res: true,
                      xl: {
                        ref: "16",
                        value: 16,
                      },
                    },
                    Buttons: [
                      {
                        _id: "44639f12-69e9-4a66-9aa0-c29f0b7d8520",
                        _template: "$IconButton",
                        action: [
                          {
                            _id: "8fb8a6a4-a728-43d8-91ee-c3b086c061df",
                            _template: "$StandardLink",
                            url: {
                              id: "local.2f260565-fc74-48e5-b2e3-bc51e63c44d1",
                              value: {
                                en: "https://google.com",
                              },
                            },
                            shouldOpenInNewWindow: true,
                            _itemProps: {
                              $IconButton: {
                                action: {},
                              },
                            },
                          },
                        ],
                        label: {
                          id: "local.c1ea7c36-f5de-47a3-969f-4c23a267785e",
                          value: {
                            en: "Lorem ipsum",
                          },
                        },
                        symbol: [
                          {
                            _id: "9cd0e05d-2b4b-4f79-b874-78fc6e181760",
                            _template: "$icon",
                            icon: {
                              value:
                                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="100px" height="100px"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',
                              ref: "$sliderLeft",
                            },
                            color: {
                              $res: true,
                              xl: {
                                value: "lightgrey",
                                ref: "grey",
                              },
                            },
                          },
                        ],
                        symbolSize: {
                          $res: true,
                          xl: "24",
                        },
                        buttonSize: {
                          $res: true,
                          xl: {
                            value: 32,
                            ref: "32",
                          },
                        },
                        shape: "circle",
                        backgroundColor: {
                          $res: true,
                          xl: {
                            value: "transparent",
                            ref: "transparent",
                          },
                        },
                        border: "0",
                        borderColor: {
                          $res: true,
                          xl: {
                            value: "lightgrey",
                            ref: "grey",
                          },
                        },
                        _itemProps: {
                          $buttons: {
                            Buttons: {},
                          },
                        },
                      },
                      {
                        _id: "a4e66ce6-0a8b-48bc-916b-422f0ad8a54e",
                        _template: "$IconButton",
                        action: [
                          {
                            _id: "97e88687-21aa-4ddc-b962-a928f426e66d",
                            _template: "$StandardLink",
                            url: {
                              id: "local.235bc2e0-060a-4bc1-8454-957a8a5c16a3",
                              value: {
                                en: "https://google.com",
                              },
                            },
                            shouldOpenInNewWindow: true,
                            _itemProps: {
                              $IconButton: {
                                action: {},
                              },
                            },
                          },
                        ],
                        label: {
                          id: "local.bb02dc0a-c747-49e2-98a5-49e605c66e6e",
                          value: {
                            en: "Lorem ipsum",
                          },
                        },
                        symbol: [
                          {
                            _id: "9680f5c2-ed27-400d-9cd6-4d47a84a4a71",
                            _template: "$icon",
                            icon: {
                              ref: "$play",
                              value:
                                '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>',
                            },
                            color: {
                              $res: true,
                              xl: {
                                ref: "black",
                                value: "black",
                              },
                            },
                          },
                        ],
                        symbolSize: {
                          $res: true,
                          xl: "40",
                        },
                        buttonSize: {
                          $res: true,
                          xl: {
                            ref: "64",
                            value: 64,
                          },
                        },
                        shape: "circle",
                        backgroundColor: {
                          $res: true,
                          xl: {
                            ref: "red",
                            value: "#d91e39",
                          },
                        },
                        border: "2",
                        borderColor: {
                          $res: true,
                          xl: {
                            ref: "black",
                            value: "black",
                          },
                        },
                        _itemProps: {
                          $buttons: {
                            Buttons: {},
                          },
                        },
                      },
                      {
                        _id: "9bbe96b4-bead-447b-a6e7-ccb0f0024756",
                        _template: "Button",
                        action: [
                          {
                            _id: "3ba48450-5b41-4faa-a7f0-6cdb7dd3829b",
                            _template: "MyAction",
                            someText: "WTF",
                            _itemProps: {
                              Button: {
                                action: {},
                              },
                            },
                          },
                        ],
                        label: {
                          id: "local.9abf84f8-042f-4ab6-96a3-e57bbd99f0df",
                          value: {
                            en: "Lorem ipsum",
                          },
                        },
                        symbol: [
                          {
                            _id: "94a33803-758e-41a5-ac60-7e883a442f77",
                            _template: "$icon",
                            icon: {
                              ref: "$pause",
                              value:
                                '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>',
                            },
                            color: {
                              $res: true,
                              xl: {
                                ref: "red",
                                value: "#d91e39",
                              },
                            },
                            _itemProps: {
                              Button: {
                                symbol: {},
                              },
                            },
                          },
                        ],
                        light: false,
                        outline: false,
                        _itemProps: {
                          $buttons: {
                            Buttons: {},
                          },
                        },
                      },
                    ],
                    _itemProps: {
                      $stack: {
                        Items: {
                          width: {
                            $res: true,
                            xl: "576px",
                          },
                          "$previous.marginBottom": {
                            $res: true,
                            xl: {
                              value: 0,
                              ref: "0",
                            },
                          },
                          marginBottom: {
                            $res: true,
                            xl: {
                              value: 0,
                              ref: "0",
                            },
                          },
                        },
                      },
                    },
                  },
                ],
              },
            ],
            stackAlign: {
              $res: true,
              xl: "left",
            },
            positionHorizontal: {
              $res: true,
              xl: "left",
            },
            verticalAlign: {
              $res: true,
              xl: "top",
            },
            action: [],
          },
        ],
        headerMode: "none",
        layout1Stack: "left",
        layout2Stacks: {
          $res: true,
          xl: "left-right",
        },
        layout2StacksVerticalAlign: {
          $res: true,
          xl: "center",
        },
        headerSectionGap: {
          $res: true,
          xl: {
            value: 12,
            ref: "12",
          },
        },
        footerSectionGap: {
          $res: true,
          xl: {
            value: 12,
            ref: "12",
          },
        },
        headerStacksGap: {
          $res: true,
          xl: {
            value: 12,
            ref: "12",
          },
        },
        HeaderStack: [
          {
            _id: "c3db1d92-1d9f-48b4-bfda-34d4706d8837",
            _template: "$stack",
            align: {
              $res: true,
              xl: "left",
            },
            Items: [],
          },
        ],
        HeaderSecondaryStack: [
          {
            _id: "cac76619-2495-4f46-8c37-79b75fe2d707",
            _template: "$stack",
            align: {
              $res: true,
              xl: "left",
            },
            Items: [],
          },
        ],
        Background__: [],
        padding: {
          $res: true,
          xl: {
            value: 24,
            ref: "24",
          },
        },
        _itemProps: {
          $RootSections: {
            data: {
              "$previous.bottomMargin": {
                $res: true,
                xl: {
                  value: 0,
                  ref: "0",
                },
              },
              topMargin: {
                $res: true,
                xl: {
                  value: 0,
                  ref: "0",
                },
              },
              bottomMargin: {
                $res: true,
                xl: {
                  value: 32,
                  ref: "32",
                },
              },
            },
          },
        },
      },
    ],
  });

  const meta = await shopstoryClient.build();

  createPage({
    component: resolve("./src/templates/shopstory-content.tsx"),
    path: "/shopstory-content",
    context: {
      content,
      meta,
    },
  });
}
