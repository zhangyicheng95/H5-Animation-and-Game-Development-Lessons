var MainLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.WHITE));
        var BackMenu = new cc.MenuItemFont("返回",function(){
            EffectEngine.playEffect(res.Click_mp3);
            cc.director.runScene(new StartScene());
        },this);
        BackMenu.setColor(cc.color.BLACK);
        BackMenu.setFontSize(50);
        var menu = new cc.Menu(BackMenu);
        menu.setPosition(0,0);
        BackMenu.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(menu);
        return true;
    }
});

var EffectEngine = function(){};
EffectEngine.playEffect = function(url){
    if(cc.sys.localStorage.getItem('isEffectplay') == 'YES'){
        cc.audioEngine.playEffect(url);
    }
};

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});

