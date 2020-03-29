import { Config } from "@stencil/core";
import json from "@rollup/plugin-json";

export const config: Config = {
  namespace: "pwc-map",
  preamble: "dev@paraboly Web Component",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },

    {
      type: "docs-readme"
    },
    {
      type: "www",
      copy: [{ src: "components/*/*.json", dest: "build" }],
      serviceWorker: null // disable service workers
    }
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
      namedExports: true // Default: true
    })
  ]
};
