const mongoose=require('mongoose');

module.exports=()=>{
    mongoose.connect("mongodb://yeshifu:123456@localhost:27017/zd_shop").then(()=>{
        console.log('server is running');
    }).catch(err=>{
        console.log(err.message);
    })
}