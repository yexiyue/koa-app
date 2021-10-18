const Router=require('koa-router')

const user=new Router({prefix:'/users'})

user.get('/',(ctx,next)=>{
    ctx.body='hello users'
})

module.exports=user;