const { ccclass, property } = cc._decorator;

export enum clientDefineGame1 {
  loginEvent = "loginEvent",
  processOver = "tamadetouride",
  lodingEvent = "loadingEventing",
  hallIntoGameScene = "intoGameScene",
  servceGameUpdata = "servceGameUpdata"
}
/**
 *  0x11 登录事件
 * 0x12 聊天信息
 * 0x13 设置信息
 * 0x14 在线匹配房间
 * 0x15 游戏中信息
 * 0x16 自动结束游戏，关闭游戏服务
 */
export enum ServerceDineGame2 {
  loginEvent = 0x11,
  chatEvent = 0x12,
  processOver = 0x13,
  matchingRoom = 0x14,
  gameIngData = 0x15,
  gameOver = 0x16
}
