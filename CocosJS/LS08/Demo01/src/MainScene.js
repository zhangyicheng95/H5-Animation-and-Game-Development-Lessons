
var MainLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var size = cc.winSize;

        var layer = new cc.LayerColor(cc.color.RED);
        this.addChild(layer);

        var label = new cc.LabelTTF("你死了","",50);
        label.x = size.width*0.5;
        label.y = size.height*0.7;
        this.addChild(label);

        var resetmenuItem = new cc.MenuItemFont("结束",function(){
            // cc.director.runScene(new OverScene());
            cc.director.runScene(new cc.TransitionFade(2,new OverScene()));
        },this);
        var menu = new cc.Menu(resetmenuItem);
        menu.setPosition(0,0);
        menu.x = size.width*0.5;
        menu.y = size.height*0.4;
        this.addChild(menu);
        cc.log('ctor');
    },
    onEnter:function(){
        this._super();
        cc.log('onEnter');
    },
    onExit:function(){
        cc.log('onExit');
    }
});
var MainScene = cc.Scene.extend({
    ctor: function () {
        this._super();
        // var layer = new cc.LayerColor(cc.color.RED);
        var layer = new MainLayer();
        this.addChild(layer);
    }
});