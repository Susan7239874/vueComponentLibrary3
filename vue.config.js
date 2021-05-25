
const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'examples/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        // packages和examples目录需要加入编译
        config.module
            .rule('js')
            .include.add(/packages/)
            .end()
            .include.add(/src/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options;
            });
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('packages'),
                'assets': resolve('examples/assets'),
                'views': resolve('examples/views'),
            }
        },
        output: {
            libraryExport: 'default'
        }
    },
    productionSourceMap: false,
    css: {
        extract: false,
    },

}
