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
import prefabMgr from "./prefabMgr";

import { clientDefineGame1 } from './headDine'


@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    
    @property(cc.ProgressBar)
    progressB: cc.ProgressBar = null
    
    @property
    index = 0

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        this.progressB.progress =0;
        prefabMgr.getInstance().init(this.progressB);
        
    }

    start () {
        
        cc.systemEvent.on(clientDefineGame1.lodingEvent,function(){cc.director.loadScene("main")});   //进入大厅
        
        
    }
    



    // update (dt) {}
}
