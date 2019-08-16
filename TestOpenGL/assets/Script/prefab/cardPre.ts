// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

   
    @property(cc.Sprite)
    img:cc.Sprite = null;
    
   
    textname =0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    
    initLabel(temp:string){
        this.label.string = temp;
    }
    
    initSprinte(temp:cc.SpriteFrame){
        this.img.spriteFrame = temp;
    }

    initname(temp:number){
        this.textname = temp
    }


    start () {

    }

    // update (dt) {}
}
