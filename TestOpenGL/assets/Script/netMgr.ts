// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import PlayerData from "./PlayerData"
import DataMannager from './dataMgr';


const {ccclass, property} = cc._decorator;

@ccclass
export default class netMgr extends cc.Component {
  private ws: WebSocket;

  private isOk: boolean;

  async init() {
    cc.log("init net1");
    await this.initWs();
  }

  async initWs(){
      this.ws = new WebSocket("ws://192.168.1.102:8080");

      this.ws.onopen = function (event){
          console.log("ws.onopen")
          
      }
      this.ws.onmessage = (event) => {
 
          this.recive(event.data)
      }

      this.ws.onerror = (event) => {
          cc.error("ws.onerror")
      }

      this.ws.onclose = (event) => {
          cc.error("ws.onclose")
          this.ws = null
      }
  };
    /**
     * json 数据格式 收到后先解包
     * @param data 
     * 
     * 
     * 
     */
    recive(msg){
        cc.log(msg);
        let data = JSON.parse(msg);
        PlayerData.getInstance().setWsRevData(data);
        DataMannager.getInstance().revData(data)
    }
    /**
     * 暂时用json
     * @param data 
     */
    send(){
        this.ws.send(JSON.stringify(PlayerData.getInstance().getWsSendData()));
        PlayerData.getInstance().setWsSendData(null);
    }
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  // update (dt) {}
}
