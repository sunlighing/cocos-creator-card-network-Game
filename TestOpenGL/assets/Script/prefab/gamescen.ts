import DataMannager from "../dataMgr";
import { clientDefineGame1 } from '../headDine'
import PlayerData from '../PlayerData';


const { ccclass, property } = cc._decorator;

@ccclass
export default class gameSence extends cc.Component {
  //游戏界面

  @property(cc.Node)
  barrelNode: cc.Node = null;

  @property(cc.Node)
  cardPoolNode: cc.Node = null;

  @property(cc.Button)
  kaipaibutton1: cc.Button = null;

  @property(cc.Button)
  Button1: cc.Button = null;

  @property(cc.Button)
  Button2: cc.Button = null;

  @property(cc.Button)
  Button3: cc.Button = null ;
    
  @property(cc.Sprite) 
  myHead:cc.Sprite = null;
    
  @property(cc.Sprite)
  enemyHead:cc.Sprite = null;

  buttonIndex = 0 

  // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //初始化第一步，随机头像 
        
        
        //魔法桶隐藏 
        this.barrelNode.active = false;
        
        //添加监听事件
    
        this.listenEvent()

        //增加更新服务器消息
        cc.systemEvent.on(clientDefineGame1.servceGameUpdata,this.servceGame.bind(this))
    }
    
    listenEvent(){

        this.Button1.node.on("click",function(){
            if (this.buttonIndex==0 ){
                this.buttonIndex = this.buttonIndex +1 ;
                PlayerData.getInstance().setWsSendData(
                    PlayerData.getInstance().getGameCard()
                );
                DataMannager.getInstance().send()
            }    
        }.bind(this))

        this.Button2.node.on("click",function(){
            if (this.buttonIndex == 1) {
                this.buttonIndex = this.buttonIndex + 1;
                PlayerData.getInstance().setWsSendData(
                    PlayerData.getInstance().getMatchingRoom()
                );
                DataMannager.getInstance().send()
            }
        })

        this.Button3.node.on("click",function(){
            if (this.buttonIndex == 2) {
                this.buttonIndex = this.buttonIndex + 1;
                PlayerData.getInstance().setWsSendData(
                    PlayerData.getInstance().getMatchingRoom()
                );
                DataMannager.getInstance().send()
            }
        })

        this.kaipaibutton1.node.on("click",function(){
            
        })
    }

    servceGame(){
        
    }

    start() {}

  // update (dt) {}
}
