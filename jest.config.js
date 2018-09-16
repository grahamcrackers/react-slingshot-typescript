module.exports = {
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tools/assetsTransformer.js",
    "\\.(css)$": "<rootDir>/tools/assetsTransformer.js"
  },
  setupFiles: ["raf/polyfill"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  setupTestFrameworkScriptFile: "<rootDir>/tools/enzymeTestAdapterSetup.ts",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
