import express from "express"
import path from "path"
import { ServerRequest } from "http";

const server = express()

const webpack = require("webpack");
const config = require("../../config/webpack.dev.js")
const compiler = webpack(config)

const webpackDevMiddleware = 
require("webpack-dev-middleware")(
    compiler,
    config.devServer
)
const webpackHotMiddleware = 
require("webpack-hot-middleware")(compiler)

server.use(webpackDevMiddleware)
server.use(webpackHotMiddleware)

const statucMiddleware = express.static("dist")

server.use(statucMiddleware);

server.listen(8080, ()=>{
    console.log("Server is lintenig");
});