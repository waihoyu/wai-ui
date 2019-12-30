let path = require("path");
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
    outputDir: "distv",
    assetsDir: "",
    indexPath: "index.html",
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule.use("raw-loader").loader("raw-loader");
    },
    css: {
        loaderOptions: {
            css: {},
            sass: {
                loader: "sass-loader",
                includePaths: [path.join(__dirname, "./src/styles")],
                data: `@import "./src/styles/index.scss"; `,
            },
            postcss: {
                // 这里的选项会传递给 postcss-loader
            },
        },
    },
};
