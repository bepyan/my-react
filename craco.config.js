const CracoAlias = require('craco-alias')

module.exports = {
  babel: {
    presets: [
      [
        "@babel/preset-react",
        { "runtime": "automatic", "importSource": "@emotion/react" }
      ]
    ],
    plugins: ["@emotion/babel-plugin"]
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: './src',
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
}