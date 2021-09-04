module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',//引用~assets
                'network':'@/network',//引用~network
            }
        }
    },
    publicPath:'./',
    devServer: {

        open: process.platform === 'darwin',

        host: '0.0.0.0',

        port: 8080,

        https: false,

        hotOnly: false,
    }
}