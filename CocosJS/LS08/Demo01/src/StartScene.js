
var StartLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var size = cc.winSize;

        // var layer = new cc.LayerColor(cc.color.BLUE);
        // this.addChild(layer);

        var label = new cc.LabelTTF("准备开始","楷体",80);
        label.x = size.width*0.5;
        label.y = size.height*0.7;
        this.addChild(label);

        var startMenuItem = new cc.MenuItemFont("开始",function(){
            // cc.director.runScene(new MainScene());
            cc.director.runScene(new cc.TransitionMoveInT(2,new MainScene()));//transition设置过渡动画
        },this);
        var menu = new cc.Menu(startMenuItem);
        menu.setPosition(0,0);
        menu.x = size.width*0.5;
        menu.y = size.height*0.4;
        this.addChild(menu);
    }
});
var BgLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        this.addChild(new cc.LayerColor(cc.color.WHITE));
        //渐进层
        var gdLayer1 = new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0,0),cc.p(0,-1));
        var gdLayer2 = new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0,0),cc.p(-1,-1),
            [{p:0,color:cc.color.YELLOW},
                {p:.5,color:new cc.Color(0,0,0,0)},
                {p:1,color:cc.color.BLUE}]);
        this.addChild(gdLayer1);
        // this.addChild(gdLayer2);
    }
});
var StartScene = cc.Scene.extend({
    ctor: function () {
        this._super();
        var bgLayer = new BgLayer();
        this.addChild(bgLayer);
        // var layer = new cc.LayerColor(cc.color.RED);
        var layer = new StartLayer();
        this.addChild(layer);
    }
});