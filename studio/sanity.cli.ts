import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '72wbiimt',
    dataset: 'production'
  },
  graphql: [
      {
        id: "production",
        workspace: "default",
      },
    ]
})
