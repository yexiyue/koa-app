const mongoose=require('mongoose');

module.exports=class CRUD{
    model;
    constructor(model){
        this.model=model;
    }
    //增
    async add(obj){
        try {
            await this.model.create(obj);
        } catch (error) {
            console.log(error);
        }
    }
    //删
    async delete(where){
        try {
            return await this.model.findOneAndDelete(where);
        } catch (error) {
            console.error(error);
        }
    }
    //改
    async update(where,obj){
        try {
            return await this.model.findOneAndUpdate(where,obj);
        } catch (error) {
            console.error(error)
        }
    }
    //查
    async find(where){
        try {
            return await this.model.find(where);
        } catch (error) {
            console.error(error)
        }
    }
}