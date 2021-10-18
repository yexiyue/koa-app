const Koa=require('koa')
const {APP_PORT}=require('./config/config')

const user=require('./router/user')
const app=new Koa();

//user路由
app.use(user.routes())
app.use(user.allowedMethods())

app.listen(APP_PORT,()=>{
    console.log(`服务已经启动 http://localhost:${APP_PORT}`)
})