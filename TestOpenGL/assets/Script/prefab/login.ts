// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import dataMgr from "../dataMgr";

import playerData from "../PlayerData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

   
    
    @property(cc.EditBox)
    edito : cc.EditBox = null;
    
    @property(cc.Button)
    loginButton : cc.Button = null; 

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        this.loginButton.node.getChildByName("l_button").runAction(cc.repeatForever(cc.rotateBy(3,360)));
        this.loginButton.node.getChildByName("r_button").runAction(cc.repeatForever(cc.rotateBy(3, 360)));

        this.loginButton.node.on('click',function(){
            if (this.edito.string != ""){
                playerData.getInstance().setWsSendData({
                    keys: playerData.getInstance().getwskeys(),
                    name: this.edito.string,
                    act: 0x11
                });
                dataMgr.getInstance().send() ;//发送数据
            }
        }.bind(this))
    }

    start () {

    }

    // update (dt) {}
}
