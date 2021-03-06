class iObstacle{
    constructor(x,y,w,h,img){
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;

        this.iObstacle=createSprite(x,y,w,h);
        this.iObstacle.addImage(img);
        this.iObstacle.scale=1.5;
    }
    show(){
        this.iObstacle.visible=true;
    }
    hide(){
        this.iObstacle.visible=false;
    }
    flipx(){
        this.iObstacle.mirrorX(-1);
    }
    getInHouse1(){
        if(this.iObstacle.isTouching(player)){
            if(keyDown("space")){
                playerMove=false;
                area=inHouse1;
                p2.x=0;
                p2.y=220;
                playerMove=true;
            }
        }
    }
    display(){
        p2.bounceOff(this.iObstacle);
    }
}