const Router=require('koa-router')

const router=new Router({prefix:'/users'})
//导入类控制器
const {register,login}=require('../controller/user.controller');
//注册接口
router.post('/register',register)

//登录接口
router.post('/login',login)

module.exports=router;