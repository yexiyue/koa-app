
const {APP_PORT}=require('./config/config')

const app=require('./app/index')

const dbConnect=require('./db/connect');

dbConnect();

app.listen(APP_PORT,()=>{
    console.log(`服务已经启动 http://localhost:${APP_PORT}`)
})