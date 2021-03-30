const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "shell"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        
        // For hosts (please adjust)
        // remotes: {
        //     "Partner": "Partner@http://localhost:3000/remoteEntry.js",
        //     //                   \---- Wird zur Compile Time ausgewertet
        //     //                       \---- Static Federation
        //     //                           \---- Alternative: Dynamic Federation
        // },

        shared: {
          "@angular/core": { }, 
          "@angular/common": {  }, 
          "@angular/router": {  },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin(),
  ],
};
