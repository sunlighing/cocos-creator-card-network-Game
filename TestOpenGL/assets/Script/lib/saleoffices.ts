const { ccclass, property } = cc._decorator;

@ccclass
export class salesOffices { //订阅者模式
    private clientList = [];

    public listen(key:string,obj:cc.Node){ //监听
        this.clientList[key] =[]
        this.clientList[key].push(obj)
    }
    public triggle(key,data){    //发布给订阅的
        for (let i in this.clientList){
            
        }
    }
}