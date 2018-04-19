var StartLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.WHITE));
        var ls = cc.sys.localStorage;

        if(ls.getItem('isMusicplay') == null){
            ls.setItem('isMusicplay','YES');
            ls.setItem('isEffectplay','YES');
        }

        //设置音乐开关按钮
        var OnItem = new cc.MenuItemImage(res.MusicOnNormal_png,res.MusicOnSelected_png,function(){

        },this);
        var OffItem = new cc.MenuItemImage(res.MusicOffNormal_png,res.MusicOffSelected_png,function(){

        },this);
        var toggleMenuItem = new cc.MenuItemToggle(OnItem,OffItem,function(){
            if(toggleMenuItem.getSelectedIndex() == 0){
                cc.audioEngine.playMusic(res.Bg_mp3,true);
                ls.setItem('isMusicplay','YES');
            }else{
                cc.audioEngine.stopMusic();
                ls.setItem('isMusicplay','NO');
            }
        },this);
        //音效开关
        var OnItem2 = new cc.MenuItemImage(res.MusicOnNormal_png, res.MusicOnSelected_png, function () {
        }, this);

        var OffItem2 = new cc.MenuItemImage(res.MusicOffNormal_png, res.MusicOffSelected_png, function () {
        }, this);

        var toggleMenuItem2 = new cc.MenuItemToggle(OnItem2, OffItem2, function () {
            if(toggleMenuItem2.getSelectedIndex() == 0 && ls.getItem('isEffectplay') == 'NO'){
                cc.audioEngine.playEffect(res.Click_mp3);
                ls.setItem('isEffectplay','YES');
            }else{
                cc.audioEngine.stopAllEffects();
                ls.setItem('isEffectplay','NO');
            }
        }, this);

        //第二次进入时，记录背景音乐&音效的按钮
        if(ls.getItem('isMusicplay') == 'YES'){
            toggleMenuItem.setSelectedIndex(0);
            cc.audioEngine.playMusic(res.Bg_mp3,true);
        }else if(ls.getItem('isMusicplay') == 'NO'){
            toggleMenuItem.setSelectedIndex(1);
            cc.audioEngine.stopAllEffects();
        }
        if(ls.getItem('isEffectplay') == 'YES'){
            toggleMenuItem2.setSelectedIndex(0);
        }else if(ls.getItem('isEffectplay') == 'NO'){
            toggleMenuItem2.setSelectedIndex(1);
        }
        //开始按钮
        var startMenuItem = new cc.MenuItemFont("进 入", function () {
            cc.log("开始按钮点击啦！");
            if(ls.getItem('isEffectplay') == 'YES'){
                cc.audioEngine.playEffect(res.Click_mp3);
            }
            cc.director.runScene(new MainScene());
        }, this);
        startMenuItem.setFontSize(80);
        startMenuItem.setColor(cc.color.BLACK);
        startMenuItem.setFontName("Arial");

        //菜单
        startMenuItem.x = size.width/2;
        startMenuItem.y = size.height/2;

        toggleMenuItem.x = size.width*0.2;
        toggleMenuItem.y = size.height/5;

        toggleMenuItem2.x = size.width*0.8;
        toggleMenuItem2.y = size.height/5;

        var menu = new cc.Menu(startMenuItem,toggleMenuItem,toggleMenuItem2);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu);
        return true;
    }
});

var StartScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});