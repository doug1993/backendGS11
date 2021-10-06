const path = require('path')
module.exports={
    entry: "./src/index.js",
       devServer: {
            static: {
              directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 8080,
          },
    output: {
       path: path.join(__dirname, 'public'),
       filename: 'bundle.js'
        },
     
        
        module:{
            rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
}
}






