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

      referenceBehavior: "strong",
      withTranslationsMaintenance: false,
    })
  ],
  schema: {
    types: [
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
          },,
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

