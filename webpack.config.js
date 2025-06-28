module.exports = {
  // ... your existing config
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /node_modules/, // <-- this line prevents the crash
      },
    ],
  },
};
