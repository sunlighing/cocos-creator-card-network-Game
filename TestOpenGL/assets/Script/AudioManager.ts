const { ccclass, property } = cc._decorator;

@ccclass
export class AudioManager {
    // use this for initialization
    private static m_sInstance: AudioManager = null;
    private musicVolume: number = 1.0;
    private videoVolume: number = 1.0;
    private bgmAudioID: number = -1;
    private sfxAudioID : number  = -1;
    private sextype: number = 0;
    private idArr: any[] = [];
    public static getInstance(): AudioManager {
        if (!this.m_sInstance) {
            this.m_sInstance = new AudioManager();
            this.m_sInstance.init();
        }
        return this.m_sInstance;
    }
    private init(): void {
        this.idArr = [];
        var t = cc.sys.localStorage.getItem("musicVolume");
        cc.log(" t = " + t);
        if (t != null) {
            cc.log(" 00000 ");
            this.musicVolume = parseFloat(t);
        }
        else {
            this.musicVolume = 0.5;
        }

        t = cc.sys.localStorage.getItem("videoVolume");
        if (t != null) {
            this.videoVolume = parseFloat(t);
        }
        else {
            this.videoVolume = 0.5;
        }

        t = cc.sys.localStorage.getItem("sextype");
        if (t != null) {
            this.sextype = parseFloat(t);
        }
        else {
            this.sextype = 0;
        }
    }

    private saveSound(): void {
        cc.sys.localStorage.setItem("musicVolume", this.musicVolume);
        cc.sys.localStorage.setItem("videoVolume", this.videoVolume);
        cc.sys.localStorage.setItem("sextype", this.sextype);
    }

    // 获取播放的音频id
    public getAudioId(path: string): any {
        cc.loader.loadRes(path, cc.AudioClip, function(err, clip){
            return cc.audioEngine.play(clip, false, 0.5);
        }.bind(this));
    }

    //播放背景音
    public playBGM(audioUrl: string): void {//"resources/audio/" + url + (isMp3 ? ".mp3" : ".wav");
        cc.log(audioUrl);
        // cc.audioEngine.stopAll();
        this.stopBackAudio();
        cc.loader.loadRes(audioUrl, cc.AudioClip, function(err, clip){
            let v = Number(this.musicVolume) + 0.00001;
            v = v > 1 ? 1 : v;
            this.bgmAudioID = cc.audioEngine.playMusic(clip, true);
            cc.audioEngine.setMusicVolume(v);
        }.bind(this));
    }

    //停止播放背景音效
    public stopBackAudio(): void {
        // this.bgmAudioID = 0;
        cc.audioEngine.stopMusic();
    }

    public stopBGM():void
    {
        cc.audioEngine.stopEffect(this.sfxAudioID)
    }

    //播放音效
    public playSFX(audioUrl: string): void {
        let me = this;
        // if (this.videoVolume > 0)
        // {
            // if (this.idArr.length > 8)
            // {
            //     for (let i = 6; i < this.idArr.length; i++) {
            //         cc.audioEngine.stop(this.idArr.pop());
            //     }
            // }
        this.stopBGM();
            cc.loader.loadRes(audioUrl, cc.AudioClip, function(err, clip){
                this.sfxAudioID = cc.audioEngine.play(clip, false, this.videoVolume);
                this.idArr.push(this.sfxAudioID);
                cc.audioEngine.setFinishCallback(this.sfxAudioID, function () {
                    if (me.idArr.indexOf(this.sfxAudioID) >= 0) {
                        for (let j = 0; j < me.idArr.length; j++) {
                            if (me.idArr[j] == this.sfxAudioID) {
                                me.idArr.splice(j, 1);
                                return;
                            }
                        }
                    }
                });
            }.bind(this));
            
        // }
    }

    public setSexType(type: number): void {
        this.sextype = type;
    }

    //设置音效音量
    public setAudioVolume(v: number): void {
        this.videoVolume = v;
        this.saveSound();
    }

    //设置音乐音量
    public setMusicVolume(v: number): void {
        if (v === this.musicVolume) return;
        this.musicVolume = v;
        cc.audioEngine.setVolume(this.bgmAudioID, this.musicVolume);
        if (this.bgmAudioID >= 0) {
            if (v > 0) {
                cc.audioEngine.resume(this.bgmAudioID);
            }
            else {
                cc.audioEngine.pause(this.bgmAudioID);
            }
        }
        this.saveSound();
    }

    // 保存声音状态 on  off
    public setAudioStage(str: string, stage: any): void {
        switch (str) {
            case "music": {
                this.setMusicVolume(this.musicVolume);
                break;
            }
            case "video": {
                break;
            }
            default:
                break;
        }
    }

    // 获取声音大小值
    public getAudioValue(str: string): number {
        var value = 0;
        switch (str) {
            case "music": {
                value = this.musicVolume;
                break;
            }
            case "video": {
                value = this.videoVolume;
                break;
            }
            case "sex":
                value = this.sextype;
                break;
            default:
                break;
        }
        return value;
    }

    public pauseAll(): void {
        cc.audioEngine.pauseAll();
    }

    public resumeAll(): void {
        cc.audioEngine.resumeAll();
    }

}
