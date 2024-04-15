import {BuildOptions} from "./types/config";
import webpackConfig from "../../webpack.config";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoader} from "./buildLoader";
import {buildResolvers} from "./buildResolvers";
import webpack from "webpack";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths, mode} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoader()
        },
        resolve: buildResolvers()
    }
}