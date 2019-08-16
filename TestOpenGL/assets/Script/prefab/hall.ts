// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


import PlayerData from "../PlayerData";
import DataMannager from "../dataMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class hall extends cc.Component {
  
  @property(cc.Button)
  MatchingButton:cc.Button = null;
    
  @property
  istrue = false
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
      this.MatchingButton.node.on("click",function(){
          if (this.istrue == false){
              this.istrue = true
              PlayerData.getInstance().setWsSendData(
                  PlayerData.getInstance().getMatchingRoom()
              );
              DataMannager.getInstance().send()
              setTimeout(function(){
                  this.istrue=false;
              }.bind(this),10000)
          }
           
      }.bind(this))
  }

  start() {}

  // update (dt) {}
}
