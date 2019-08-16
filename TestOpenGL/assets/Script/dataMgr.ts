//消息管理类
//分发数据包

import netMgr from './netMgr';
import playerData from './PlayerData'
import { clientDefineGame1 } from './headDine'

export default class DataMannager {
    private static m_instance: DataMannager = null;

    private netMgr: netMgr = new netMgr();

    // 单例
    public static getInstance(): DataMannager {
        if (!this.m_instance) {
            this.m_instance = new DataMannager();
            this.m_instance.init();
        }
        return this.m_instance;
    }

    private init() {
        this.netMgr.init();
    }

    send() {
        if (playerData.getInstance().getWsSendData() !=null) {
            cc.log(playerData.getInstance().getWsSendData());
            this.netMgr.send();
            return true
        } else {
            return false
        }
    }

    /**
     * act :
     *     login = 0x01; 
     *     
     */

    revData(data:any){
        cc.log("the key is ok")
        if(data.keys){
            playerData.getInstance().setwsKeys(data.keys);
        }

        if(data.act){
            this.loginData(data)
        }
    }

    loginData(data){
        if(data.act === 0x11){
            let pEvent = new cc.Event.EventCustom(clientDefineGame1.loginEvent,true);
            cc.systemEvent.dispatchEvent(pEvent);

            playerData.getInstance().setName(data.name); //设置姓名
    
        }else{
            this.matchingRoom(data);
        }
    }

    matchingRoom(data){
        
        if (data.act === 0x14){
            cc.log(data)
            playerData.getInstance().setRoomNum(data.msg.room);

            playerData.getInstance().setEnomyName(data.msg.enomy);  //设置敌人信息

            let pEvent = new cc.Event.EventCustom(clientDefineGame1.hallIntoGameScene, true);
            cc.systemEvent.dispatchEvent(pEvent);

        }else{
           this.gameGetCard(data) 
        }
    }

    gameGetCard(data){
        if (data.act === 0x15){ //游戏
            
        }else{

        }
    }

}
