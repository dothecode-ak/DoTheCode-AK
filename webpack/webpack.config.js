const path=require('path');
module.exports={
    mode:"development",
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"vender.js"
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        open: true,
        port:3000
    },
     
}