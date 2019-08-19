//玩家数据类  
import { ServerceDineGame2 } from './headDine';
export default class PlayerData {
    private static m_instance: PlayerData = null;
    // 添加属性
    private wsSendData: any = null; //发送的数据

    private wsKeys: string = null;

    private name: string = null;
    
    private roomNum:string = null;

    private wsRevData: any = null; //接收的数据
    
    private enomyName :any = null;

    private gameCommand :any = null;//游戏命令
    
    private Gamescore : any = null;

    private GameCard :any = null;

    // 单例
    public static getInstance(): PlayerData {
    if (!this.m_instance) {
        this.m_instance = new PlayerData();
        this.m_instance.init();
    }
    return this.m_instance;
    }

    private init() {
    console.log("PlayData init");
    }

    public setWsSendData(data: any) {
        this.wsSendData = data;
    }

    public getWsSendData(): any {
        return this.wsSendData;
    }

    public setWsRevData(data: any) {
        this.wsRevData = data;
    }

    public getWsRevData(): any {
        return this.wsRevData;
    }

    public setwsKeys(msg: string) {
        this.wsKeys = msg;
    }

    public getwskeys(): string {
        return this.wsKeys;
    }

    public setName(msg: string) {
        this.name = msg;
    }

    public getName(): string {
        return this.name;
    }
    
    public setRoomNum(num: string){
        return this.roomNum =num;
    }

    public getRoomNum(){
        return this.roomNum 
    } 
    
    public setEnomyName(data:any){
        this.enomyName = data;
    }

    public getEnomyName(){
        return this.enomyName;
    }
    
    public setGameCommand(temp:any){
        this.gameCommand = temp
    }

    public getGameCommand(){
        return this.gameCommand;
    }

    public setGameScore(temp: any) {
        this.Gamescore = temp
    }

    public getGameScore() {
        return this.Gamescore;
    }
    
    public setGameCard(temp:any){
        this.GameCard = temp
    }

    public getGameMeCard(){
        return this.GameCard;
    }

    // 这部分写的是定义好的数据包，随即可用，在此类执行即可，良好的封装性
    /**
     * 0x14 在线匹配房间
     *  {
     *    name
     *    keys
     *    act :0x14
     *  }
     */

    public getMatchingRoom() {
        return {
            name:this.name,
            keys:this.wsKeys,
            act: ServerceDineGame2.matchingRoom
            };
    }

    public getGameCard(){
        return {
            name:this.name,
            keys:this.wsKeys,
            act:ServerceDineGame2.gameIngData,
            msg:{
                act :0x01,//要牌 
                room: this.roomNum
            }
        }
    }
    
    

}
