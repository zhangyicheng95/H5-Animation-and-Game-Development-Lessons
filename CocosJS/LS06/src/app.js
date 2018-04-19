
var HelloWorldLayer = cc.Layer.extend({
    label:null,
    second:0,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;

        this.labelTTF = new cc.LabelTTF('玩家1：','楷体',32);
        this.labelTTF.setPosition(50,size.height-50);
        this.labelTTF.setAnchorPoint(0,1);
        this.addChild(this.labelTTF);

        this.schedule(this.myTimer,1,cc.REPEAT_FOREVER,0);


        var labelBMFont = new cc.LabelBMFont("建国博物馆",res.LabelBitmap_fnt);
        labelBMFont.x = size.width/2;
        labelBMFont.y = size.height/2;
        this.addChild(labelBMFont);

        var labelBMFont2 = new cc.LabelBMFont("Hello World!",res.LabelBitmap2_fnt);
        labelBMFont2.x = size.width*0.5;
        labelBMFont2.y = size.height*0.15;
        this.addChild(labelBMFont2);

        return true;
    },
    myTimer:function(dt){
        if(this.second >= 5){
            this.labelTTF.setString('玩家1：' + parseInt(this.second));
            this.second -= dt;
        }else{
            this.labelTTF.setString('玩家1：' + parseInt(this.second));
            this.second += dt;
        }

    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

