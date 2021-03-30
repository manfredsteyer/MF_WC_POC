const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "Partner"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)  // Remotes === MFE
        name: "Partner",
        filename: "remoteEntry.js",
        exposes: {
            './PartnerModule': './src/app/partner/partner.module.ts',
            './PartnerInfoComponent': './src/app/partner/partner-info/partner-info.component.ts',
        },        
        
        shared: {
          "@angular/core": {  }, 
          "@angular/common": {  }, 
          "@angular/router": {  },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin(),
  ],
};
