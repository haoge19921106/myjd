// banner轮播
$(function(){
   var imgbox=$(".imgbox")[0]
   var imgs=$("a",imgbox);
   var abc=$("li",$(".abc")[0]);
   var leftbn=$(".leftbn")[0];
   var rightbn=$(".rightbn")[0]
        var num=0;
  function change(type){
      type=type||"right"
      if(type=="right"){
          num++;
         if(num>=imgs.length){
            num=0;
         }
      }
      if(type=="left"){
          num--;
         if(num<0){
            num=imgs.length-1;
         }
      }
        
         for(var i=0;i<imgs.length;i++){
            imgs[i].style.opacity=0;
            abc[i].className="";
         };
         // imgs[num].style.opacity=1;
         animate(imgs[num],{opacity:1})
         abc[num].className="abcd"     
   }
   var t=setInterval(change,2000)
       imgbox.onmouseover=function(){
     clearInterval(t);
      leftbn.style.display="block";
      rightbn.style.display="block";
   }
   imgbox.onmouseout=function(){
    t=setInterval(change,2000);
      leftbn.style.display="none";
      rightbn.style.display="none";
   }
   leftbn.onclick=function(){
      change("left")
   }
     rightbn.onclick=function(){
      change("right")
   }
  for(var i=0;i<imgs.length;i++){
    abc[i].cc=i;
   abc[i].onmouseover=function(){
     for(var j=0;j<imgs.length;j++){
      imgs[j].style.opacity=0;
      abc[j].className=""
     }
     imgs[this.cc].style.opacity=1;
     abc[this.cc].className="abcd"
     num=this.cc;
   }

  }
  // banner轮播完
  // banner下轮播
  var imgss=$(".jd-imgs")
  var imgboxs=$(".jd-img")[0];
  var leftbns=$(".lefts")[0];
  var rightbns=$(".rights")[0];
for(var i=1;i<imgss.length;i++){
      imgss[i].style.left="1000px"
}
var now=0
  var next=0
  function move(type){
            type=type||"rights"
      if(type=="rights") {
            next++;
            if(next>=imgss.length){
            next=0
             }
             imgss[next].style.left="1000px";
             imgss[now].style.left="0px";
            animate(imgss[now],{left:-1000},1000)
      } else if(type=="lefts"){
            next--;
            if(next<0){
            next=imgss.length-1
             }
             imgss[next].style.left="-1000px";
            animate(imgss[now],{left:1000},1000)


       }
        imgss[now].style.left="0px";
      animate(imgss[next],{left:0},1000)
       now=next;
  }  
// var t1=setInterval(move,2000)
imgboxs.onmouseover=function(){
      // clearInterval(t1)
      leftbns.style.display="block"
      rightbns.style.display="block"

}
imgboxs.onmouseout=function(){
      // t1=setInterval(move,2000)
      leftbns.style.display="none"
      rightbns.style.display="none"

}
rightbns.onclick=function(){
      move("rights")
}
leftbns.onclick=function(){
      move("lefts")
}
// banner下轮播完
// 楼层轮播
function lunboa(num,numa){
var imgboxss=$(".jd-lunbo")[num]
var imgsss=$(".abcde",$(".jd-lunbo")[num]);
var conss=$("li",$(".lunbodian")[num]);
var leftss=$(".leftbnss")[num];
var rightss=$(".rightbnss")[num];
var numa=imgboxss.offsetWidth;
for (var i = 1; i < imgsss.length; i++) {
  imgsss[i].style.left=numa+"px"
};
  var ne=0
  var dd=0
  function moves(type){
                type=type||"rights"
      if(type=="rights") {
            dd++;
            if(dd>=imgsss.length){
            dd=0
             }
             imgsss[dd].style.left=numa+"px";
             imgsss[ne].style.left="0px";
            animate(imgsss[ne],{left:-numa})
               animate(imgsss[dd],{left:0})
               conss[ne].className="";
             conss[dd].className="conx";
       ne=dd;
     }else if(type=="lefts"){
            dd--;
            if(dd<=-1){
            dd=imgsss.length-1
             }
             imgsss[dd].style.left=-numa+"px";
             imgsss[ne].style.left="0px";

            animate(imgsss[ne],{left:numa})
               animate(imgsss[dd],{left:0})
               conss[ne].className="";
             conss[dd].className="conx";
       ne=dd;
   }
  }
 var t1=setInterval(moves,2000)


   
      conss[ne].className="";
      conss[dd].className="conx";


for(var i=0;i<imgsss.length;i++){
      conss[i].aa=i
      conss[i].onclick=function(){
      dd=this.aa
      if(dd>ne){
        imgsss[dd].style.left=numa+"px";
       imgsss[ne].style.left="0px";
      animate(imgsss[ne],{left:-numa})
      animate(imgsss[dd],{left:0})
      conss[ne].className="";
      conss[dd].className="conx";
      ne=dd;
    }else{
      imgsss[dd].style.left=-numa+"px";
       imgsss[ne].style.left="0px";
      animate(imgsss[ne],{left:numa})
      animate(imgsss[dd],{left:0})
      conss[ne].className="";
      conss[dd].className="conx";
      ne=dd;
    }
     
      }
}
imgboxss.onmouseover=function(){
      clearInterval(t1)
      leftss.style.display="block"
      rightss.style.display="block"

}
imgboxss.onmouseout=function(){
      t1=setInterval(moves,2000)
      leftss.style.display="none"
      rightss.style.display="none"

}
rightss.onclick=function(){
      moves("rights")
}
leftss.onclick=function(){
      moves("lefts")
}
}
for(var i=0;i<13;i++){
  lunboa(i)
}
// 楼层轮播完
function xuanxiang(num){
  var wenzi=$(".wenzi",$(".floor")[num]);
var xuanxiangka=$(".xuanxiangka",$(".floor")[num])
for(var i=0;i<wenzi.length;i++){
  wenzi[i].name=i;
  wenzi[i].onmouseover=function(){
    for(var j=0;j<xuanxiangka.length;j++){
      xuanxiangka[j].style.display="none";
      wenzi[j].className="wenzi"
    }
    wenzi[this.name].className="wenzi xuanxiang";
    xuanxiangka[this.name].style.display="block";
  }
}
}
for(var i=0;i<11;i++){
  xuanxiang(i)
}
// 左边楼层
function jump(){
  var life=$(".jd-life")[0];
  var floor=$(".floor");
  var elevator=$(".louceng")[0];
  var lis=$("li",elevator);
  var num=$(".shuzi",elevator);
  var etitle=$(".louwenzi",elevator);
  var lowprice=$("#lowprice")
  var now=0;
  document.documentElement.scrollTop=1;
  var obj=document.documentElement.scrollTop?document.documentElement:document.body;
  window.onscroll=function(){
    if(obj.scrollTop>life.offsetTop&&obj.scrollTop<lowprice.offsetTop){
      elevator.style.display="block";
    }else{
      elevator.style.display="none";
    }
    for(var i=0;i<floor.length;i++){
      if(obj.scrollTop>=floor[i].offsetTop){
        now=i;
        for(var j=0;j<lis.length;j++){
          num[j].style.display="block"
          etitle[j].style.color="#fff";
        }
        num[i].style.display="none"
        etitle[i].style.color="#C81623";
      }
    }
    if(obj.scrollTop<floor[0].offsetTop){
      for(var i=0;i<lis.length;i++){
        num[i].style.display="block";
        etitle[i].style.color="#fff";     
      }
    }
  }
    for(var i=0;i<lis.length;i++){
      lis[i].name=i;
      lis[i].onmouseover=function(){
        num[this.name].style.display="none";
        etitle[this.name].style.color="#fff";
        etitle[this.name].style.background="#C81623";
        }
      lis[i].onmouseout=function(){
        num[this.name].style.display="block";
        etitle[this.name].style.color="#C81623";
        etitle[this.name].style.background="";  
      }
      lis[i].onclick=function(){
        animate(obj,{scrollTop:floor[this.name].offsetTop});
      }
    }
}
jump();
// 左边楼层完
    var dayrightconbox=$(".dayrightconbox")[0];
    function day(){
        var lastday=getLast(dayrightconbox);
        animate(lastday,{height:0},function(){
            dayrightconbox.insertBefore(lastday,getFirst(dayrightconbox))
            animate(lastday,{height:113})
        })
        
    }
    var dayt=setInterval(day,1000)
    dayrightconbox.onmouseover=function(){
        clearInterval(dayt);
    }
    dayrightconbox.onmouseout=function(){
        dayt=setInterval(day,1000)
    }
    var jdmenu=$(".jd-top-top-left")[0];
    var menu=$(".menu")[0];
    var biao=$(".biaoa")[0]
    jdmenu.onmouseover=function(){
      menu.style.display="block";
      biao.style.top="0px"
    }
    jdmenu.onmouseout=function(){
      menu.style.display="none";
      biao.style.top="-7px"
    }
})