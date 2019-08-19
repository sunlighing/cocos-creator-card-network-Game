// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import Dictionary from "./usrl/dicnary";
import { clientDefineGame1 } from './headDine'
const {ccclass, property} = cc._decorator;

@ccclass
export default class prefabMgr extends cc.Component {
  private static m_instance: prefabMgr = null;

  // 单例
  public static getInstance(): prefabMgr {
    if (!this.m_instance) {
      this.m_instance = new prefabMgr();
      //this.m_instance.init();
    }
    return this.m_instance;
  }

  private fabMgr = new Dictionary(); //用一个字典类来储存这些对象池，预制体名字作为实值
  /**
   * 添加在这里就会添加预制体，很耗空间，但很省时间,不用啥几把加载，，
   * 后面会做空间管理不用的节点
   */
  init(process: cc.ProgressBar) {
    this.loadResFab("login", 1, process);
    this.loadResFab("hall", 1, process);
    this.loadResFab("gameSence", 1, process);
    this.loadResFab("loadingLayout", 1, process);
    this.loadResFab("cardPre", 10, process);
  }

  loadResFab(path: string, count: number, process: cc.ProgressBar) {
    cc.loader.loadRes(
      "prefab/" + path,
      cc.Prefab,
      function(err, prefab) {
        if (err) {
          cc.log("failed load " + path + " prefab");
          cc.error(err);
        } else {
          cc.log("successful " + path + " prefab"); //TODO
        }
        let tempNodePool = new cc.NodePool();
        for (let i = 0; i < count; i++) {
          let tempNode = cc.instantiate(prefab);
          tempNodePool.put(tempNode);
          process.progress = process.progress + 1 / 14;
        }

        if (tempNodePool.size() > 0) {
          this.fabMgr.set(path, tempNodePool);
        } else {
        }

        if (this.fabMgr.values().length >= 5) {
          let pEvent = new cc.Event.EventCustom(
            clientDefineGame1.lodingEvent,
            true
          );
          cc.systemEvent.dispatchEvent(pEvent);
        }
      }.bind(this)
    );
  }

  getfabMgr(): Dictionary {
    return this.fabMgr;
  }
}
