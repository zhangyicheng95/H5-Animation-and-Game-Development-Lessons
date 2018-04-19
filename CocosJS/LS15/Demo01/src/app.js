
var HelloWorldLayer = cc.Layer.extend({
    _labelLoading:null,
    _labelPercent:null,
    _numOfSprite:0,
    _numOfLoadedSprite:0,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //添加_labelLoading
        var labelLoading = new cc.LabelTTF("loading","",50);
        labelLoading.x = size.width*0.5;
        labelLoading.y = size.height*0.5 + 50;
        this.addChild(labelLoading);
        this._labelLoading = labelLoading;

        //_labelPercent
        var labelPercent = new cc.LabelTTF("0%","",50);
        labelPercent.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(labelPercent);
        this._labelPercent = labelPercent;

        this._numOfLoadedSprite = 0;
        this._numOfSprite = res_test.length;

        for(var i in res_test){
            var fileName = "res/Enemy11/" + res_test[i];
            cc.textureCache.addImage(fileName,this.loadingCallBack,this);
        }

        var menuItemLabel = new cc.MenuItemFont("测试",function(){
            cc.director.runScene(new TempScene());
        },this);
        menuItemLabel.setFontSize(50);
        var menu = new cc.Menu(menuItemLabel);
        menu.y = size.height*0.1;
        this.addChild(menu);

        return true;
    },
    loadingCallBack:function(texture){
        this._numOfLoadedSprite++;
        var percent = 100*this._numOfLoadedSprite/this._numOfSprite;
        this._labelPercent.setString(parseInt(percent)+"%");

        var index = this._numOfLoadedSprite - 1;
        var sprite = new cc.Sprite(texture);
        sprite.setPosition(this._numOfLoadedSprite*20,cc.winSize.height*0.5);
        this.addChild(sprite,-1);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

