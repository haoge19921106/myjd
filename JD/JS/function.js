// 解决类名的兼容问题
// 2016.8.29
function getClass(classname,father){
// 判断浏览器
father=father||document;
if(father.getElementsByClassName){
	  return father.getElementsByClassName
	  (classname);
}
else{
	var all=father.getElementsByTagName("*")
	// 所有的标签
	var newarr=[]
	for(var i=0;i<all.length;i++){
		if(del(classname,all[i].className)){
			newarr.push(all[i]);
		}

	}
	return newarr
}
}

function del(val,string){
// 转换
   var arr=string.split("");
for(var i in arr){
	if(val==arr[i]){
		return true;
	}
}
return false;
}

// 方法
// 判断浏览器
// ff:现有的方法
// IE:
// 1)获取所有的标签
// 2）遍历，判断
//    标签.className==classname;
// 3)条件满足，保留标签
// 4）返回新数组
// 解决获取属性的兼容问题
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}
	else{
		return getComputedStyle(obj,null)[attr]
	}
}
// 获取元素的兼容函数（可以支持标签、id、class)
function $(selector,father){
	father=father||document;
	if(typeof selector=="string"){
		selector=selector.replace(/^\s*|\s*$/g,"");
		if(selector.charAt(0)=="."){
			return getClass(selector.substring(1),father)
		}
		else if(selector.charAt(0)=="#"){
			return document.getElementById(selector.substring(1))
		}
		else if(/^[a-z][1-6a-z]*/g.test(selector)){
			return father.getElementsByTagName(selector)
		}
	}
	else if(typeof selector=="function"){
		addEvent(window,"load",function(){
			selector();
		})
	}
}
// 2016.9.2
// 获取所有子节点的兼容函数
// father:指定父节点
// type:"a"只有元素节点
         // "b"元素节点+文本节点
function getChlid(father,type){
	type=type||"a";
	var newarr=[]
	var all=father.childNodes;
	for(var i=0;i<all.length;i++){
		if(type=="a"){
			if(all[i].nodeType==1){
			    newarr.push(all[i])
		    }
		}else if(type=="b"){  
		    if(all[i].nodeType==1||(all[i].nodeType==3&&all[i].nodeValue.replace(/^\s*|\s*$/g,"")!="")){
			    newarr.push(all[i])
		    }
	    }
	}
	return newarr
}
// 获取第一个子节点
function getFirst(father){
	return getChlid(father)[0]
}
// 获取最后一个子节点
function getLast(father){
	return getChlid(father)[getChlid(father).length-1]
}
// 获取指定的子节点
function getNum(father,xiabiao){
	return getChlid(father)[xiabiao-1]
}
// 获取下一个兄弟节点
function getNext(obj){
	var next=obj.nextSibling;
	if(!next){
		return false;
	}
	while(next.nodeType==3||next.nodeType==8){
		next=next.nextSibling;
		if(!next){
		return false;
	    }
	}
	return next;
}
// 获取上一个兄弟节点
function getTop(obj){
	var tops=obj.previousSibling;
	if(!tops){
		return false;
	}
	while(tops.nodeType==3||tops.nodeType==8){
		tops=tops.previousSibling;
		if(!tops){
		return false;
	    }
	}
	return tops;
}
// 绑定事件的兼容函数
function addEvent(obj,event,fun){
	obj[fun]=function(){
			fun.call(obj);
		}
	if(obj.attachEvent){
		obj.attachEvent("on"+event,obj[fun]);
	}else{
		obj.addEventListener(event,obj[fun],false)
	}
}
// 移除时间的兼容函数
function removeEvent(obj,event,fun){
	if(obj.detachEvent){
		obj.detachEvent("on"+event,obj[fun]);
	}else{
		obj.removeEventListener(event,obj[fun],false)
	}
}
// 鼠标的滚轮事件
function mouseWheel(obj,up,down){
    if(obj.attachEvent){
    	obj.attachEvent("onmousewheel",scrollFn);
    	// IE opear
    }else if(obj.addEventListener){
    	obj.addEventListener("mousewheel",scrollFn,false);
    	// chrome,safari,-webkit;
    	obj.addEventListener("DOMMouseScroll",scrollFn,false);
    	// firefox -moz-
    }
 function scrollFn(e){
	var e=e||window.event;
	if(e.preventDefault){
		e.preventDefault
	}else{
		e.returnValue=false;
	}
	var f=e.wheelDelta||e.detail;
	if(f==-3||f==120){
		if(up){
			up();
		}
	}else if(f==3||f==-120){
		if(down){
			down();
		}
	}
}
}



//hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/
