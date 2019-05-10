// 这里的配置 都是webpack的配置 因为vue-cli3集成了默认的常用的webpack配置,所以很多时候
// 我们不需要手动配置
// 但是某些情况下我们需要修改部分配置 需要添加vue.config.js来覆盖默认的webpack配置
const webpack = require('webpack');
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
                'axios': 'axios'
            })
        ]
    }
}