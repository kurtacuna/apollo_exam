import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://spacex-api.fly.dev/graphql/',
  documents: ['app/**/*.{graphql,js,ts,jsx,tsx,vue}'],
  generates: {
    './app/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true
      }
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true
      }
    }
  }
}
 
export default config