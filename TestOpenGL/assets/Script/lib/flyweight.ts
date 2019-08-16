const { ccclass, property } = cc._decorator;
@ccclass 
export class flyWeight{  //享元模式，共享同一对象池
    private objectPool=[]

    public addobj(obj){
        this.objectPool.push(obj)
    }

    init(){
        
    }
}