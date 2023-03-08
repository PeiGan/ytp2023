setInterval(function(){
    $(".accent2").addClass("temp2");
    $(".accent3").addClass("temp3");
    $(".accent4").addClass("temp4");
    $(".accent5").addClass("temp5");
    $(".accent2").removeClass("accent2");
    $(".accent3").removeClass("accent3");
    $(".accent4").removeClass("accent4");
    $(".accent5").removeClass("accent5");
    $(".temp2").addClass("accent3");
    $(".temp3").addClass("accent4");
    $(".temp4").addClass("accent5");
    $(".temp5").addClass("accent2");
    $(".temp2").removeClass("temp2");
    $(".temp3").removeClass("temp3");
    $(".temp4").removeClass("temp4");
    $(".temp5").removeClass("temp5");
}, 200);
var cv1 = document.getElementById('cv1').getContext('2d');
var cv2 = document.getElementById('cv2').getContext('2d');

var size = 20;
var mapx = 500/size;
var mapy = 300/size;
var nowx, nowy;
var arr;
function drawrect(x,y,color){
    cv1.beginPath();
    cv1.rect(x*size+1, y*size+1, size-2, size-2);
    cv1.fillStyle = color;
    cv1.fill();
}
function drawwall(x,y,direction,color){
    cv1.beginPath();
    cv1.lineWidth = 2;
    if(direction==1){cv1.moveTo(x*size, y*size);
        cv1.lineTo((x+1)*size, y*size);}
    if(direction==2){cv1.moveTo((x+1)*size, y*size);
        cv1.lineTo((x+1)*size, (y+1)*size);}
    if(direction==3){cv1.moveTo((x+1)*size, (y+1)*size);
        cv1.lineTo(x*size, (y+1)*size);}
    if(direction==4){cv1.moveTo(x*size, (y+1)*size);
        cv1.lineTo(x*size, y*size);}
    cv1.strokeStyle = color;
    cv1.stroke();
}
function start(){
    nowx=0,nowy=0;
    arr = [];
    for(var i=0;i<mapx;i++){
        arr[i] = [];
        for(var j=0;j<mapy;j++){
            arr[i][j] = [];
            arr[i][j][0] = "#fefefe";
            drawrect(i,j,arr[i][j][0]);
            for(var k=1;k<5;k++){
                arr[i][j][k] = 1;
                drawwall(i,j,k,"#307f30");
            }
        }
    }
    var stop=setInterval(function() {
        if(nowx!=0 || nowy!=0 || arr[mapx-1][mapy-1][0]!="#ffd700"){
            var WallBreak = [];
            if (nowy > 0 && arr[nowx][nowy-1][0] == "#fefefe") {WallBreak.push(1);}
            if (nowx < mapx-1 && arr[nowx+1][nowy][0] == "#fefefe") {WallBreak.push(2);}
            if (nowy < mapy-1 && arr[nowx][nowy+1][0] == "#fefefe") {WallBreak.push(3);}
            if (nowx > 0 && arr[nowx-1][nowy][0] == "#fefefe") {WallBreak.push(4);}
            if(WallBreak.length>0){
                arr[nowx][nowy][0] = "#ffe700";
                drawrect(nowx,nowy,arr[nowx][nowy][0]);
                var rand = Math.floor(Math.random()*WallBreak.length);
                arr[nowx][nowy][WallBreak[rand]]=0;
                drawwall(nowx,nowy,WallBreak[rand],"#ffe700");
                if(WallBreak[rand]==1){nowy--;}
                if(WallBreak[rand]==2){nowx++;}
                if(WallBreak[rand]==3){nowy++;}
                if(WallBreak[rand]==4){nowx--;}
                arr[nowx][nowy][(WallBreak[rand]+1)%4+1]=0;
            }else{
                arr[nowx][nowy][0] = "#ffd700";
                drawrect(nowx,nowy,"#ffd700");
                if(nowy>0 && arr[nowx][nowy][1]==0 && arr[nowx][nowy-1][0]=="#ffe700"){drawwall(nowx,nowy,1,"#ffd700");nowy--;}else
                if(nowx<mapx-1 && arr[nowx][nowy][2]==0 && arr[nowx+1][nowy][0]=="#ffe700"){drawwall(nowx,nowy,2,"#ffd700");nowx++;}else
                if(nowy<mapy-1 && arr[nowx][nowy][3]==0 && arr[nowx][nowy+1][0]=="#ffe700"){drawwall(nowx,nowy,3,"#ffd700");nowy++;}else
                if(nowx>0 && arr[nowx][nowy][4]==0 && arr[nowx-1][nowy][0]=="#ffe700"){drawwall(nowx,nowy,4,"#ffd700");nowx--;}
            }
            drawrect(nowx,nowy,"#7f007f");
        }else{
            clearInterval(stop);
        }
    }, 20);
}
start();
$("#cv1").on('click', function(){
    start();
});
var nodes=[];
for(var i=0;i<100;i++){
    newnode(i);
}
//20Hz迴圈
setInterval(function(){
    cv2.fillStyle = "#ffd700";
    cv2.fillRect(0, 0, 500, 300);
    for(var i=0;i<100;i++){
        //drawcircle(nodes[i][0],nodes[i][1],1,"#ffffff");
        //座標+速度
        nodes[i][0]+=nodes[i][2];
        nodes[i][1]+=nodes[i][3];
        //越界造新點
        if(nodes[i][0]>500 || nodes[i][0]<0 || nodes[i][1]>300 || nodes[i][1]<0){
            newnode(i);
        }
    }
    //距離過小連深綠線
    for(var i=20;i<40;i++){
        for(var j=i+1;j<40;j++){
            if(distance(nodes[i][0],nodes[i][1],nodes[j][0],nodes[j][1])<10000){
                drawline(nodes[i][0],nodes[i][1],nodes[j][0],nodes[j][1],"#307f30",2-distance(nodes[i][0],nodes[i][1],nodes[j][0],nodes[j][1])/5000)
            }
        }
    }
    //距離過小連淺綠線
    for(var i=0;i<20;i++){
        for(var j=i+1;j<20;j++){
            if(distance(nodes[i][0],nodes[i][1],nodes[j][0],nodes[j][1])<5000){
                drawline(nodes[i][0],nodes[i][1],nodes[j][0],nodes[j][1],"#307f30",4-distance(nodes[i][0],nodes[i][1],nodes[j][0],nodes[j][1])/1250)
            }
        }
    }
    //距離過小紅球放大
    for(var i=40;i<100;i++){
        for(var j=i+1;j<100;j++){
            if(distance(nodes[i][0],nodes[i][1],nodes[j][0],nodes[j][1])<1000){
                drawcircle(nodes[i][0],nodes[i][1],5-distance(nodes[i][0],nodes[i][1],nodes[j][0],nodes[j][1])/200,"#7f007f")
                drawcircle(nodes[j][0],nodes[j][1],5-distance(nodes[i][0],nodes[i][1],nodes[j][0],nodes[j][1])/200,"#7f007f")
            }
        }
    }
},50);
//距離
function distance(x1,y1,x2,y2){
    return (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
}
//創造新點
function newnode(ind){
    //[x座標,y座標,x向速度,y向速度]
    nodes[ind]=[Math.floor(Math.random()*500),Math.floor(Math.random()*300),Math.random()*4-2,Math.random()*4-2];
    if(ind<40 && ind>=20){
        nodes[ind][2]*=3;
        nodes[ind][3]*=3;
    }
}
//畫圓
function drawcircle(x,y,radius,color){
    cv2.beginPath();
    cv2.arc(x, y, radius, 0, 2 * Math.PI);
    cv2.fillStyle=color;
    cv2.fill();
}
//畫線
function drawline(x1,y1,x2,y2,color,width){
    cv2.beginPath();
    cv2.strokeStyle = color;
    cv2.moveTo(x1,y1);
    cv2.lineTo(x2,y2);
    cv2.lineWidth=width;
    cv2.stroke();
}