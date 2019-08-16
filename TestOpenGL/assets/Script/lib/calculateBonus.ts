const { ccclass, property } = cc._decorator;
@ccclass 
export class calculateBonus{ //策略模式
    //策略 模式的目的就是将算法的使用和实现分开
    //有两部分 第一步部分是一组策略类，策略类封装具体的算法，
    //第二部分环境类，随后将请求给某部分策略类
    private create={ 
        "s":function(){

        },

        "a":function(){

        },

        "c":function(){

        },
        
    }
    
    public getindex(s:string){
        this.create[s]
    }
}