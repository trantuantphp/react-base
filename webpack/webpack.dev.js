const Dotenv = require("dotenv-webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
        open: false,
        compress: true,
        hot: true,
        port: 18001,
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve("babel-loader"),
                        options: {
                            plugins: [require.resolve("react-refresh/babel")].filter(Boolean),
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new Dotenv({
            path: "./.env.development",
        }),
        new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
});
