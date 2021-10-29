const User=require('../schemas/user')

class UserController {
    async register(ctx,next){
        //1.获取数据
        const {user_name,password}=ctx.request.body;
        //2.操作数据库
        const res=await User.add({user_name,password});
        //3.返回结果
        ctx.status=200;
        ctx.body={
            code:200,
            msg:'添加用户成功'
        }
    }

    async login(ctx,next){
        const data=await User.find({user_name:ctx.query.user_name})
        ctx.body={
            code:200,
            mag:"查找用户成功",
            data
        }
    }
}
module.exports=new UserController()