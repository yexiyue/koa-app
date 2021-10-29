const Koa=require('koa')
const KoaBody=require('koa-body')

const app=new Koa()
const user=require('../router/user.router')

app.use(KoaBody())

app.use(user.routes())
app.use(user.allowedMethods())

module.exports=app;