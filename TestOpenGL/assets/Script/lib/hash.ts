const { ccclass, property } = cc._decorator;
@ccclass 
export class hashTable{ //哈希表

    private table = []; 

    private init():void {
         
    };

    private loseloseHashCode(key) { //散列函数
        let hash = 0;
        for(let i =0; i<key.lenght;i++){
            hash += key.charCodeAt(i);
        }
        return hash%37;
    }

    public put(key,value){
        let position = this.loseloseHashCode(key);
        this.table[position] = value;
    }

    public get(key){ 
        return this.table[this.loseloseHashCode(key)];
    }

    public remove(key):void{
        this.table[this.loseloseHashCode(key)] = undefined;
    }

}