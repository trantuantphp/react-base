const paths = require("./paths");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
    entry: [paths.src + "/index.js"],
    output: {
        path: paths.build,
        filename: "[name].bundle.js",
        publicPath: "/",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles/[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.src + "/assets",
                    to: "assets",
                    globOptions: {
                        ignore: ["*.DS_Store"],
                    },
                },
            ],
        }),
        new HtmlWebpackPlugin({
            title: "Project Title",
            // favicon: paths.src + '/assets/icons/favicon.png',
            template: paths.public + "/index.html",
            filename: "index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
                resolve: {
                    extensions: [".js", ".jsx"],
                },
            },
            {
                test: /\.(css|scss|sass|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    // "sass-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                ident: "postcss",
                                plugins: [tailwindcss, autoprefixer],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },
            { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: "asset/inline" },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    "primary-color": "#1DA57A",
                                    "link-color": "#1DA57A",
                                    "border-radius-base": "2px",
                                },
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
};
