module.exports = {
    publicPath:'./',
    
    devServer: {
        port: 8000,
        https: false,
         proxy: {
           '/api': {
             target: 'http://4611xr3243.qicp.vip:43695/api',
             pathRewrite:{'^/api':''},
             changeOrigin: true
           }
         }
       },
}