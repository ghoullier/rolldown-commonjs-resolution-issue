import { rolldown  } from "rolldown";

import commonjs from "@rollup/plugin-commonjs";

const config = ({ plugins, dir }) => ({
  input: 'src/react-dom.js',
  output: {
    format: "esm",
    dir,
    exports: "named",
  },
  external: ["react"],
  plugins
})

const bundleConfigList = [
    config({
        plugins: [commonjs()],
        dir: 'dist/plugin-commonjs'
    }),
    config({
        plugins:[],
        dir: 'dist/default'
    })
]

for (const bundleConfig of bundleConfigList) {
    const bundle = await rolldown(bundleConfig);
    await bundle.write(bundleConfig.output);
}