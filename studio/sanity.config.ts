import {AssetSource, defineConfig, useFormValue} from 'sanity'
import {deskTool} from "sanity/desk"
import {structure} from './desk'
import {visionTool} from "@sanity/vision"
import {documentI18n} from "@sanity/document-internationalization"
import {codeInput} from '@sanity/code-input'
import {colorInput} from "@sanity/color-input";
import {scheduledPublishing} from "@sanity/scheduled-publishing";
import {customDocumentActions} from './plugins/customDocumentActions'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {HomeIcon, CogIcon, LinkIcon, PackageIcon, EarthGlobeIcon, IceCreamIcon} from '@sanity/icons'
import colorTheme from './schemas/documents/colorTheme'
import {CustomImagePreview} from './components/media/CustomImagePreview'
//import { contentGraphView } from "sanity-plugin-graph-view";

const i18n_config = {
  fieldNames: {
    lang: 'i18n_lang',
    baseReference: 'i18n_base',
    references: 'i18n_refs'
  }
}

const i18n_fields = (refType: string) => [
  {
    name: 'i18n_lang',
    type: 'string',
    hidden: true,
  },
  {
    name: 'i18n_base',
    type: 'reference',
    to: [{type: refType}],
    hidden: true,
  },
  {
    name: 'i18n_refs',
    type: 'array',
    hidden: true,
    of: [
      {
        type: 'reference',
        to: [{type: refType}],
      },
    ],
  },
]

const supportedLanguages = [
  { id: 'en_US', title: 'English (US)', isDefault: true },
  { id: 'fr_CA', title: 'French (CA)' },
]

export default defineConfig({
  name: "default",
  title: "main",
  projectId: "{{project}}",
  dataset: "production",

  plugins: [
    deskTool({structure}),
    codeInput(),
    visionTool(),
    colorInput(),
    scheduledPublishing(),
    customDocumentActions(),
    media(),
    //contentGraphView({}),
    documentI18n({
      base: "en_US",
      languages: [
        {
          "title": "English (US)",
          "id": "en_US"
        },
        {
          "title": "French (CA)",
          "id": "fr_CA"
        }
      ],
      //@ts-ignore
      idStructure: "delimiter",
      //@ts-ignore
      referenceBehavior: "strong",
      withTranslationsMaintenance: false,
    })
  ],
  schema: {
    types: [
      
      {
        title: "Label",
        name: 'localeString',
        type: 'object',
        fieldsets: [
          {
            title: 'Translations',
            name: 'translations',
            options: { collapsible: true }
          }
        ],
        fields: supportedLanguages.map(lang => ({
          title: lang.title,
          name: lang.id,
          type: 'string',
          fieldset: lang.isDefault ? null : 'translations'
        }))
      },
      {
        title: "Hero Section",
        name: "section.hero",
        type: "document",
        i18n: i18n_config,
        fields: [
          ...i18n_fields('section.hero'),
          {
            title: "Label", 
            name: "label",
            type: "string"
          },
          {
            title: "Heading", 
            name: "Heading",
            type: "string"
          },
         {
            title: "Tagline", 
            name: "tagline",
            type: "text",
            rows: 3
          },
          {
            title: "Content", 
            name: "content",
            hidden: "content" ? false : true,
            type: "array", 
            of: [
              {type: "block"},
              {type: 'media'}
            ]
          },
          {
            title: "Theme", 
            name: "theme",
            type: 'reference',
            to: {type: 'colorTheme'},
          },          
          {
            title: "Background", 
            name: "background",
            type: "background", 
            options: {
              collapsed: true,
              collapsible: true,
            },
          },
          {
            title: "Disabled", 
            name: "isDisabled",
            type: "boolean",
            initialValue: false
          },
          {
            name: 'imagePreview',
            title: 'Preview Image',
            type: 'image',
          },
        ],
        preview: {
          select: {
            title: "label",
            media: "imagePreview"
          }
        }
      },
      {
        title: "Content Section",
        name: "section.content",
        type: "document",
        i18n: i18n_config,
        fields: [
          ...i18n_fields('section.content'),
          {
            title: "Label", 
            name: "label",
            type: "string"
          },
          {
            title: "Content", 
            name: "content",
            hidden: "content" ? false : true,
            type: "array", 
            of: [
              {type: "block"},
              {type: 'media'}
            ]
          },
          {
            name: 'media',
            title: 'Media Image',
            type: 'media',
          },
          {
            title: "Image Position", 
            name: "mediaPosition",
            type: 'string',
            options: {
              list: [
                {title: 'None', value: 'none'},
                {title: 'Left', value: 'left'},
                {title: 'Right', value: 'right'},
              ],
              layout: 'radio',
              direction: 'horizontal',
              initialValue: 'none'
            }
          },
          {
            title: "Primary Link",
            name: "linkPrimary",
            type: "reference",
            to: [{type: 'linkInternal'},{type: 'linkExternal'}],
          },
          {
            title: "Tags",
            name: "tags",
            type: "array",
            of: [{type: "string"}],
            options: {
              layout: "tags"
            }
          }
        ],
        preview: {
          select: {
            title: "label",
          }
        }
      },
      {
        title: "List Section",
        name: "section.list",
        type: "document",
        i18n: i18n_config,
        fields: [
          ...i18n_fields('section.list'),
          {
            title: "Label", 
            name: "label",
            type: "string"
          },
          {
            title: "Title", 
            name: "title",
            type: "string"
          },
          {
            title: "Sub Title", 
            name: "subTitle",
            type: "string"
          },
          {
            title: "List Type", 
            name: "listType",
            type: 'string',
            options: {
              list:[  
                {title: 'Default', value: 'default'},
                {title: 'Cards', value: 'cards'},
                {title: 'Mosaic', value: 'mosaic'},
                {title: 'Timeline', value: 'timeline'},
                {title: 'Rates', value: 'rates'},
                {title: 'Price Plan', value: 'prices'}
              ],
              layout: 'radio',
              direction: 'horizontal',
              initialValue: 'default'
            }
          },
          {
            title: "List Items", 
            name: "listItems",
            type: "array", 
            of: [
              {type: "item"},
            ],
          },
          {
            title: "Main Content", 
            name: "content",
            hidden: "content" ? false : true,
            type: "array", 
            of: [
              {type: "block"},
              {type: 'media'}
            ]
          },
          {
            title: "Background", 
            name: "background",
            type: "background", 
            options: {
              collapsed: true,
              collapsible: true,
            },
          },
          {
            title: "Tags",
            name: "tags",
            type: "array",
            of: [{type: "string"}],
            options: {
              layout: "tags"
            }
          }
        ],
        preview: {
          select: {
            title: "label",
          }
        }
      },
      {
        title: "Background",
        name: "background",
        type: "object",
        i18n: false,
        fields: [
          {
            title: "Type", 
            name: "mediaType",
            type: 'string',
            options: {
              list: [
                {title: 'None', value: 'none'},
                {title: 'Solid Color', value: 'solidColor'},
                {title: 'Gradient', value: 'gradient'},
                {title: 'Cover Image', value: 'imageCover'},
                {title: 'Side Image', value: 'imageSide'}
              ],
              layout: 'radio',
              direction: 'horizontal',
              initialValue: 'none'
            }
          },
          {
            name: 'alt',
            title: 'Alternative Text',
            type: 'localeString',
          },
          {
            name: 'Image',
            title: 'Image',
            type: 'image',
          },
          {
            name: 'imageMobile',
            title: 'Mobile Image Override',
            type: 'image',
          },
          {
            title: "Disabled", 
            name: "isDisabled",
            type: "boolean",
            initialValue: false
          },
          {
            name: 'imagePreview',
            title: 'Preview Image',
            type: 'image',
          },

        ],
        
      },
      {
        title: "Item",
        name: "item",
        type: "object",
        i18n: i18n_config,
        fields: [
          ...i18n_fields('item'),
          {
            title: 'Label',
            name: 'Label',
            type: 'string'
          },
          {
            title: 'Title',
            name: 'title',
            type: 'string'
          },
          {
            title: 'Value',
            name: 'value',
            type: 'string'
          },
          {
            title: 'Image',
            name: 'Image',
            type: 'image',
          },
          {
            title: "Content", 
            name: "content",
            hidden: "content" ? false : true,
            type: "array", 
            of: [
              {type: "block"},
              {type: 'media'}
            ]
          },
          {
            title: "Primary Link",
            name: "linkPrimary",
            type: "reference",
            to: [{type: 'linkInternal'},{type: 'linkExternal'}],
          },
          {
            name: 'imagePreview',
            title: 'Preview Image',
            type: 'image',
          },
        ],
        preview: {
          select: {
            title: "Label"
          }
        }
      },
      {
        title: "CTA Section",
        name: "section.cta",
        type: "document",
        i18n: i18n_config,
        fields: [
          ...i18n_fields('section.cta'),
          {
            title: "Label", 
            name: "label",
            type: "string"
          },
          {
            title: "Heading", 
            name: "Heading",
            type: "string"
          },
          {
            title: "Tagline", 
            name: "tagline",
            type: "text",
            rows: 3
          },
          {
            title: "Primary Link",
            name: "linkPrimary",
            type: "reference",
            to: [{type: 'linkInternal'},{type: 'linkExternal'}],
          },
          {
            title: "Background", 
            name: "background",
            type: "background", 
            options: {
              collapsed: true,
              collapsible: true,
            },
          },
          {
            title: "Disabled", 
            name: "isDisabled",
            type: "boolean",
            initialValue: false
          },
          {
            name: 'imagePreview',
            title: 'Preview Image',
            type: 'image',
          },
        ]
      },
      {
        title: "Page",
        name: "page",
        type: "document",
        i18n: i18n_config,
        fields: [
          ...i18n_fields('page'),
          {
            title: "Title",
            name: "title",
            type: "string"
          },
          {
            title: "Page Path",
            name: "slug",
            type: "slug"
          },
          {
            title: "Content", 
            name: "content",
            hidden: "content" ? false : true,
            type: "array", 
            of: [
              {type: "block"},
              {type: 'media'}
            ]
          },
          {
            title: "Sections", 
            name: "sections",
            type: "array", 
            of: [{
              type: "reference", 
              to: [
                {type: "section.hero" },
                {type: "section.cta"},
                {type: "section.content"},
                {type: "section.list"},
              ]
            }],
            preview: {
              select: {
                title: "label",
                media: "imagePreview",
              }
            }
          },
          {
            title: "SEO Title",
            name: "seoTitle",
            type: "string"
          },
          {
            title: "SEO Description",
            name: "seoDescription",
            type: "text",
            rows: 3
          },
        ],
        preview: {
          select: {
            title: "title",
            subtitle: "i18n_lang"
          }
        }
      },
      {
        title: "Media Asset",
        name: "media",
        type: "document",
        i18n: i18n_config,
        fields: [
          ...i18n_fields('media'),
          {
            title: "Label (non-public)",
            name: "label",
            type: "string",
          },
          {
            title: "File",
            name: "file",
            type: "file"
          },
          {
            title: "Desktop Image",
            name: "image_desktop",
            type: "image"
          },
          {
            title: "Mobile Image",
            name: "image_mobile",
            type: "image"
          },
          {
            title: "ARIA Label (public)",
            name: "alt",
            type: "string",
          },
          {
            title: "Tags",
            name: "tags",
            type: "array",
            of: [{type: "string"}],
            options: {
              layout: "tags"
            }
          }
        ],
        preview: {
          select: {
            title: "label",
            media: "image_desktop"
          }
        }
      },
      {
        title: "Post",
        name: "post",
        type: "document",
        i18n: i18n_config,
        fields: [
          ...i18n_fields('post'),
          {
            title: "Title",
            name: "title",
            type: "string"
          },
          {
            title: "Tags",
            name: "tags",
            type: "array",
            of: [{type: "string"}],
            options: {
              layout: "tags"
            }
          },
          {
            title: "Page Path",
            name: "slug",
            type: "slug"
          },
          {
            title: "Hero Content", 
            name: "hero",
            hidden: true,
            type: "array", 
            of: [{
              type: "block",
              styles: [
                {title: "Normal", value: "normal"},
                {title: "H1", value: "h1"},
                {title: "H2", value: "h2"}
              ],
              lists: [
                {title: "Numbered", value: "number"},
                {title: "Bullet", value: "bullet"}
              ],
              marks: {
                // Only allow these decorators
                decorators: [
                  {title: "Strong", value: "strong"},
                  {title: "Emphasis", value: "em"}
                ],
              }
            },
            {type: 'media'}
          ]
          },
          {
            title: "Content", 
            name: "content",
            type: "array", 
            of: [{
              type: "block",
              styles: [
                {title: "Normal", value: "normal"},
                {title: "H1", value: "h1"},
                {title: "H2", value: "h2"}
              ],
              lists: [
                {title: "Numbered", value: "number"},
                {title: "Bullet", value: "bullet"}
              ],
              marks: {
                // Only allow these decorators
                decorators: [
                  {title: "Strong", value: "strong"},
                  {title: "Emphasis", value: "em"}
                ],
              }
            },
            {type: 'media'}]
          },
          {
            title: "Sections", 
            name: "sections",
            type: "array", 
            of: [{
              type: "reference", 
              to: [
                {type: "section.hero" },
                {type: "section.cta"},
                {type: "section.content"},
              ]
            }],
            preview: {
              select: {
                title: "label",
                media: "imagePreview",
              }
            }
          },
          {
            title: "SEO Title",
            name: "seoTitle",
            type: "string"
          },
          {
            title: "SEO Description",
            name: "seoDescription",
            type: "text",
            rows: 3
          },
        ],
        preview: {
          select: {
            title: "title",
            subtitle: "i18n_lang"
          }
        }
      },
      {
        title: "Mortgage Type",
        name: "mortgageType",
        type: "document",
        i18n: false,
        fields: [
          {
            title: "Title",
            name: "title",
            type: "string"
          }          
        ],
        preview: {
          select: {
            title: "title"
          }
        }
      },
      colorTheme,
      {
        name: 'home',
        title: "Home",
        type: 'document',
        icon: HomeIcon,
        groups: [
          {
            default: true,
            name: 'editorial',
            title: 'Editorial',
          },
          {
            name: 'seo',
            title: 'SEO',
          },
        ],
        fields: [
          // Hero
          {
            title: "Sections", 
            name: "sections",
            type: "array", 
            of: [
              {type: "reference", to: [{type: "section.hero" }, {type: "section.cta"}]},
            ]
          },
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'seo',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'string',
            group: 'seo',
          },
          // Modules
                   
        ],
        preview: {
          prepare() {
            return {
              // media: icon,
              subtitle: 'Index',
              title: "Home",
            }
          },
        },
      },
      {
        title: "Redirect",
        name: "redirect",
        type: "document",
        i18n: false,
        fields: [
          {
            title: "From",
            name: "from_uri",
            type: "string"
          },
          {
            title: "To",
            name: "to_uri",
            type: "string"
          },
          {
            title: "Force",
            name: "force",
            type: "boolean"
          },
        ],
        preview: {
          select: {
            title: "from_uri"
          }
        }
      },
      {
        title: "Locations",
        name: "location",
        type: "document",
        i18n: false,
        fields: [
          {
            title: "Display Name",
            name: "name",
            type: "string"
          },
          {
            title: "Image",
            name: "image",
            type: "image",
          },  
          {
            title: "Media Asset",
            name: "media",
            type: "reference",
            to: [{type: "media"}]
          },          
          {
            title: "Head Office",
            name: "headOffice",
            type: "boolean"
          },
          {
            title: "License #",
            name: "license",
            type: "string"
          },
          {
            title: "Address Line 1",
            name: "address",
            type: "string"
          },
          {
            title: "Address Line 2",
            name: "address2",
            type: "string"
          },
          {
            title: "City",
            name: "city",
            type: "string"
          },
          {
            title: "Province",
            name: "province",
            type: "string"
          },
          {
            title: "Postal Code",
            name: "postal",
            type: "string"
          },
          
        ],
        preview: {
          select: {
            title: "name"
          }
        }
      },
      {
        title: "Staff",
        name: "staff",
        type: "document",
        i18n: false,
        fields: [
          {
            title: "First Name",
            name: "firstname",
            type: "string"
          },
          {
            title: "Last Name",
            name: "lastname",
            type: "string"
          },
          {
            title: "Title",
            name: "title",
            type: "string"
          },
          {
            title: "Photo",
            name: "photo",
            type: "image"
          },
          {
            title: "Tags",
            name: "tags",
            type: "array",
            of: [{type: "string"}],
            options: {
              layout: "tags"
            }
          }     
        ],
        preview: {
          select: {
            title: "firstname"
          }
        }
      },
      {
        name: 'settings',
        title: 'Title',
        type: 'document',
        icon: CogIcon,
        groups: [
          {
            default: true,
            name: 'navigation',
            title: 'Navigation',
          },
          {
            name: 'productOptions',
            title: 'Product options',
          },
          {
            name: 'notFoundPage',
            title: '404 page',
          },
          {
            name: 'seo',
            title: 'SEO',
          },
        ],
        fields: [
          {
            name: 'menu',
            title: 'Menu',
            type: 'menu',
            group: 'navigation',
          },
          {
            name: 'footer',
            title: 'Footer',
            type: 'footer',
            group: 'navigation',
          },
          {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo',
          },
          {
            name: 'notFoundPage',
            title: '404 Not Found',
            type: 'notFoundPage',
            group: 'notFoundPage',
          }
        ],
        preview: {
          prepare() {
            return {
              title: "Title",
            }
          },
        }
      },
      {
        name: 'menu',
        title: 'Menu',
        type: 'object',
        options: {
          collapsed: false,
          collapsible: true,
        },
        fields: [
          // Links
          {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{
              type: "reference", 
              to: [
                {type: "linkInternal" },
                {type: "linkExternal"},
                {type: "linkGroup"},
              ]
            }],
          },
        ],
      },
      // Footer
      {
        name: 'footer',
        title: 'Footer',
        type: 'object',
        options: {
          collapsed: false,
          collapsible: true,
        },
        fields: [
          // Links
          {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{
              type: "reference",
              to: [
                {type: "linkInternal" },
                {type: "linkExternal"},
              ]
            }],
          },
        ],
      },
      
      // Not found page
      {
        name: 'notFoundPage',
        title: '404 page',
        type: 'object',
        fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
        {
            name: 'body',
            title: 'Body',
            type: 'text',
            rows: 2,
          },
        /*{
            name: 'collection',
            title: 'Collection',
            type: 'reference',
            description: 'Collection products displayed on this page',
            weak: true,
            to: [
              {
                name: 'collection',
                type: 'collection',
              },
            ],
          },*/
          // Color theme
        {
            name: 'colorTheme',
            title: 'Color theme',
            type: 'reference',
            to: [{type: 'colorTheme'}],
          },
        ],
      },
      // SEO
      {
        name: 'seo',
        title: 'SEO',
        type: 'object',
        description: 'Defaults for every page',
        options: {
          collapsed: false,
          collapsible: true,
        },
        fields: [
        {
            name: 'title',
            title: 'Site title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            validation: (Rule) =>
              Rule.max(150).warning('Longer descriptions may be truncated by search engines'),
          },
        ],
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'External Link',
        name: 'linkExternal',
        type: 'document',
        i18n: i18n_config,
        icon: EarthGlobeIcon,
        fields: [
          ...i18n_fields('linkExternal'),
          // Title
          {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          // URL
          {
            name: 'url',
            title: 'URL',
            type: 'url',
            // validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
          },
          {
            title: "Content",
            name: "content",
            type: "array",
            of: [
              {type: "block"},
            ]
          },
          // Open in a new window
          {
            title: 'Open in a new window?',
            name: 'newWindow',
            type: 'boolean',
            initialValue: true,
          },
        ],
        preview: {
          select: {
            title: 'title',
            url: 'url',
          },
          prepare(selection) {
            const {title, url} = selection
      
            let subtitle = []
            if (url) {
              subtitle.push(`→ ${url}`)
            }
      
            return {
              // media: image,
              subtitle: subtitle.join(' '),
              title,
            }
          },
        },
      },
      {
        title: 'Internal Link',
        name: 'linkInternal',
        type: 'document',
        i18n: i18n_config,
        icon: LinkIcon,
        fields: [
          ...i18n_fields('linkInternal'),
          // Title
          {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          // Reference
          {
            name: 'reference',
            type: 'reference',
            weak: true,
            to: [
            {
              name: 'page',
              type: 'page',
            },
          ],
          },
          {
            title: 'Path',
            name: 'path',
            type: 'string',
          },
        ],
        preview: {
          select: {
            title: 'title',
            path: 'path',
          },
          prepare(selection) {
            const {title, path} = selection
      
            let subtitle = []
            if (path) {
              subtitle.push(`→ ${path}`)
            }
      
            return {
              subtitle: subtitle.join(' '),
              title,
            }
          }
        }
      },
      {
        title: 'Link Group',
        name: 'linkGroup',
        type: 'document',
        i18n: i18n_config,
        icon: LinkIcon,
        fields: [
          ...i18n_fields('linkGroup'),
          // Title
          {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          // Reference
          {
            title: 'List of Links',
            name: 'links',
            type: 'array',
            weak: true,
            of: [
              {
                type: 'reference',
                to: [{type: 'linkInternal'},{type: 'linkExternal'}]
              }
            ],
          },
          // Open in a new window
          {
            title: 'Mobile Only?',
            name: 'mobile_only',
            type: 'boolean',
            initialValue: false,
          },
        ]
      }
    ]
  },
  form: {
    file: {
      assetSources: (previousAssetSources: AssetSource[]) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources: AssetSource[]) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
      },
    },
  },
})

