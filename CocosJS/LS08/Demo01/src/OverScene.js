
var OverLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var size = cc.winSize;

        var layer = new cc.LayerColor(cc.color.GREEN);
        this.addChild(layer);

        var label = new cc.LabelTTF("还玩吗","",50);
        label.x = size.width*0.5;
        label.y = size.height*0.7;
        this.addChild(label);

        var overmenuItem = new cc.MenuItemFont("重玩",function(){
            // cc.director.runScene(new StartScene());
            cc.director.runScene(new cc.TransitionCrossFade(1,new StartScene()));
        },this);
        var menu = new cc.Menu(overmenuItem);
        menu.setPosition(0,0);
        menu.x = size.width*0.5;
        menu.y = size.height*0.4;
        this.addChild(menu);
    }
});
var OverScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        var layer = new OverLayer();
        this.addChild(layer);
    }
});