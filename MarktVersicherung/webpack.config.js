const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "MarktVersicherung"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        name: "MarktVersicherung",
        filename: "remoteEntry.js",
        exposes: {
            './web-components': './src/bootstrap.ts',
        },        
        
        shared: {
          "@angular/elements": { requiredVersion:'12.0.0-next.6' }, 
          "@angular/core": { requiredVersion:'12.0.0-next.6' }, 
          "@angular/common": { requiredVersion:'12.0.0-next.6' }, 
          "@angular/router": { requiredVersion:'12.0.0-next.6' },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin(),
  ],
};
