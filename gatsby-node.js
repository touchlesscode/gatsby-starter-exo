
const webpack = require(`webpack`)

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const path = require('path')
  
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src/'),
      },
    },
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        fs: require.resolve('browserify-fs'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        url: require.resolve('url'),
        stream: require.resolve("stream-browserify"),
        assert: require.resolve('assert'),
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
        tty: require.resolve("tty-browserify"),
        zlib: require.resolve("browserify-zlib"),
        undefined: false,
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
      }),
      new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
          const mod = resource.request.replace(/^node:/, "");
          switch (mod) {
              case "buffer":
                  resource.request = "buffer";
                  break;
              case "stream":
                  resource.request = "readable-stream";
                  break;
              default:
                  throw new Error(`Not found ${mod}`);
          }
      })
    ],
  })
}