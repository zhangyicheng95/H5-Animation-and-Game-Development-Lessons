
var HelloWorldLayer = cc.Layer.extend({
    score:0,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var recordItem = new cc.MenuItemFont("记录",function(){
            var ls = cc.sys.localStorage;
            ls.setItem("currentScore",this.score);
            if(this.score > ls.getItem("bestScore")){
                ls.setItem("bestScore",this.score);
            }

            //cc.director.runScene();
        },this);

        recordItem.setFontSize(80);
        recordItem.setColor(cc.color.ORANGE);
        var menu = new cc.Menu(recordItem);
        menu.y = size.height*0.5;
        this.addChild(menu);

        //分数标签
        var scoreLabel = new cc.LabelTTF("0米","",size.width/10);
        scoreLabel.setColor(cc.color.YELLOW);
        scoreLabel.setPosition(size.width/2,size.height-100);
        this.addChild(scoreLabel);
        this.scoreLabel = scoreLabel;

        this.schedule(this.bgCallback,0.001);
        return true;
    },
    bgCallback:function(dt){
        this.score += 1;
        this.scoreLabel.setString(this.score + "米");
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

