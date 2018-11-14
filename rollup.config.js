import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import vue from "rollup-plugin-vue";

export default {
  input: "src/keyboard-over.vue",
  output: {
    file: "dist/vue-keyboard-over.js",
    format: "esm"
  },
  external: ["vue"],
  plugins: [nodeResolve({ jsnext: true }), commonjs(), vue()]
};
