import { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";
import json from "@rollup/plugin-json";

export const config: Config = {
  namespace: "PwcMap",
  preamble: "@paraboly Web Component",
  outputTargets: [
    // reactOutputTarget({
    //   componentCorePackage: "@paraboly/pwc-map",
    //   proxiesFile: "./src/components.ts",
    // }),
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },

    {
      type: "docs-readme",
    },
    {
      type: "www",
      copy: [{ src: "components/*/*.json", dest: "build" }],
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    json({
      // All JSON files will be parsed by default,
      // but you can also specifically include/exclude files
      include: "components/**",

      // for tree-shaking, properties will be declared as
      // variables, using either `var` or `const`
      preferConst: true, // Default: false

      // specify indentation for the generated default export —
      // defaults to '\t'
      indent: "  ",

      // ignores indent and generates the smallest code
      compact: true, // Default: false

      // generate a named export for every property of the JSON object
      namedExports: true, // Default: true
    }),
  ],
};
