/* 完成游戏 的动态部分*/
// int   double  float  String   在 javascript  里  var
//  垃圾分类 抛物线的状态
var  status = 0;
//  判断要落到 那个垃圾桶
var  select = 1;
//  java  里有类  和对象的概念
// 获取魔理沙的 对象
                       //  获取元素通过  id
var  marisa = document.getElementById("marisa");
//  获取垃圾的对象
var  pj = document.getElementById("rub_R");
// 获取小蔡同学的对象
var  xc = document.getElementById("cai");

//   垃圾类型  二维数组的索引
// 通过 arr[index1][index2]  来确定 访问的具体是哪一个垃圾
var  index1 = 0;
var  index2 = 0;

// 垃圾种类的  二位数组
var  arr = [["厨余垃圾/菜叶.png","厨余垃圾/骨头.png","厨余垃圾/鸡蛋壳.png","厨余垃圾/苹果.png","厨余垃圾/香蕉皮.png"]
,["干垃圾/尿不湿.png","干垃圾/皮球.png","干垃圾/陶瓷.png","干垃圾/橡皮泥.png","干垃圾/纸杯.png"]
,["可回收垃圾/报纸.png","可回收垃圾/啤酒瓶.png","可回收垃圾/塑料袋.png","可回收垃圾/衣服.png","可回收垃圾/易拉罐.png"]
,["有害垃圾/电池.png","有害垃圾/杀虫剂.png","有害垃圾/温度计.png","有害垃圾/药水.png","有害垃圾/油漆.png"]];
// 调用该函数
CastRubbish();

//  JavaScript 定义一个函数  相当java 中   public  int  add(int a,int){}
//  核心函数 小女孩扔垃圾函数
function  CastRubbish(){	
	//  小女孩 停顿 3.2秒钟 小女孩 开始 扔垃圾	
	// 用到的是延时的函数 其实延时3.2秒
	// setTimeout  是一个延时 函数   里边有两个参数   参数1   function(){} 匿名函数  参数2  毫秒单位 延时的时间
	//  第一个参数 完成一些动作
	// 延时器 一个 一次性函数
	setTimeout(function(){
		
		//  每隔 2500毫秒  让魔理沙 抛出一个垃圾
		//   抛完之后 魔理沙恢复静止状态
		//  需要一个定时器  就是  每隔2500毫秒 运行一次的函数
		//  定时器 如果想停止了  通过 返回值  tTubb  进行停止
	    var  tTubb =  setInterval(function(){
	    	
	    	//  把静态魔理沙 换成动态的魔理沙 让魔理沙扔垃圾
	    	// 换图
	    	// 利用上边 定义好的  魔理沙对象  魔理沙对象是一个 图片  img  对象  <img src="img/魔理沙_待机.png" id ="marisa" />
	    	marisa.src = "img/扔垃圾.gif"	    	
	    	// 扔完之后让  魔理沙换回静止的图片
	    	// 750毫秒后  魔理沙切回静止状态
	    	// 其实延时 750 毫秒 让魔理沙 换回静止状态
	    	setTimeout(function(){
	    		marisa.src = "img/魔理沙_待机.png"
	    		
	    	},750)
	    	
	    	
	    },2500); 	
		
	},3200)
	
	
	// 让垃圾  飞走
	// 定义两个局部变量
	//  因为垃圾 飞出的是一个  抛物线  抛出线  x轴速度是匀速的  y轴的速度是加速的  （先减速  后加速）
	
	// 水平方向的速度   
	var  vx = 14;
	// yz轴方向速度
	var   vy = -30;
	
	// 延时 3.4垃圾开始抛出
		setTimeout(function(){
			
			// 啤酒瓶子啤酒瓶子消失   这个垃圾作为模板让程序克隆 通过 克隆函数
			
			pj.style.display = "none";
			// 因为魔理沙的动作是连续的  不间断的创造垃圾(克隆垃圾)
			// 每隔2.57秒克隆出一个垃圾
			//   create1 可以用来 停止克隆函数
			var  create1=setInterval(function(){				
				
				//  在克隆之前把 把要克隆的垃圾  定义好了
				// 通过随机函数定义
				// 取整函数   随机的函数  
				// 因为只有4钟垃圾   Math.random()是  0  到  0.9999999 之间的小数 Math.random()*4 小于4
				 index1 =parseInt(Math.random()*4) ;
                 index2 =parseInt(Math.random()*5) ;
				  //定义随机垃圾的路径				  
				  var src = "img/"+arr[index1][index2];
				
				 // 开始克隆垃圾  得到一个新的垃圾
				 var  newRub = pj.cloneNode(true);
				// 给克隆的垃圾 加一些属性
				newRub.style.position = "absolute";
				// 垃圾产生的左边的位置
				newRub.style.left = "136px";
				// 新垃圾的上边的位置
				newRub.style.top ="-16px";
				//新垃圾的宽度
				newRub.style.width = "80px";
				
				// 新垃圾的高度
				newRub.style.height = "80px";
				// 新垃圾的图片的路径
				newRub.src = src;
				// 让新垃圾显示出来
				newRub.style.display = "block"
				// 给新垃圾一个随机的id
				newRub.id = Math.random();
				// 将新创建的垃圾 添加到 hSec 节点中
			   document.getElementById("hSec").appendChild(newRub); 
			   
			   // setInterval  不间断的改变垃圾的位置 产生一个抛物线
			   // 动态的效果  抛物线效果 在大括号中完成 48 毫秒
			   var  fly=setInterval(function(){
			   	//  改平x轴方向方向的位移
			   	// vx 水平方向的速度 水平的位移是增加状态
			   	newRub.style.left = newRub.offsetLeft +vx +"px";			   	
			   	
			   	// 改变y轴方向距离  vy速度 是减少 后增加
			   	  	newRub.style.top = newRub.offsetTop +vy +"px";
			   	   vy = vy +3; 	   
			   	   
			   	  // 当垃圾到小蔡同学头上时  小蔡同学向上顶一下
			   	   if(vy>26&&status==0){
			   	   	  xc.src="img/mushroom2.png"			   	   	  
			   	   	  // 300后 小蔡同学 恢复  静止状态			   	   	  
			   	   	  setTimeout(function(){
			   	   	  	
			   	   	  	xc.src = "img/mushroom1.png"	   	   	  	
			   	   	  	
			   	   	  },300)		   	   	   
			   	   	   
			   	   }
			   	   
			   	   //  小蔡顶完后 垃圾又网上飞
			   	   if(vy>29&&status==0){
			   	   	
			   	   	 vy = -30;
			   	   	 status = 1;			   	   	 
			   	   	 // 看 最终落到哪一个垃圾箱			   	   	 
			   	   	 if(select == 1){			   	   	 	
			   	   	 	vx  = 15;
			   	   	 	//  index1  等于0
			   	   	 	if(index1==0){
			   	   	 		//  增加以下  分数
			   	   	 		//  获取分数的对象
			   	   	 		var  fenshu = document.getElementById("score").innerText;
			   	   	 		// 因为分数是一个字符串
			   	   	 		 document.getElementById("score").innerText = parseInt(fenshu) +10;
			   	   	 		
			   	   	 	}
			   	   	 
			   	   	 	
			   	   	 }
			   	   	 else if(select ==2){			   	   	 	
			   	   	 	vx = 20;
			   	   	 	 	if(index1==1){
			   	   	 		//  增加以下  分数
			   	   	 		//  获取分数的对象
			   	   	 		var  fenshu = document.getElementById("score").innerText;
			   	   	 		// 因为分数是一个字符串
			   	   	 		 document.getElementById("score").innerText = parseInt(fenshu) +0;
			   	   	 		
			   	   	 	}
			   	   	 
			   	   	 	
			   	   	 }
			   	   	else if(select ==3){			   	   	 	
			   	   	 	vx = 25;			   	   	 	
			   	   	 	
			   	   	 		if(index1==2){
			   	   	 		//  增加以下  分数
			   	   	 		//  获取分数的对象
			   	   	 		var  fenshu = document.getElementById("score").innerText;
			   	   	 		// 因为分数是一个字符串
			   	   	 		 document.getElementById("score").innerText = parseInt(fenshu) +10;
			   	   	 		
			   	   	 	}
			   	   	 
			   	   	 }
			   	   	
			   	   	else if(select ==4){			   	   	 	
			   	   	 	vx = 30;
			   	   	 		if(index1==3){
			   	   	 		//  增加以下  分数
			   	   	 		//  获取分数的对象
			   	   	 		var  fenshu = document.getElementById("score").innerText;
			   	   	 		// 因为分数是一个字符串
			   	   	 		 document.getElementById("score").innerText = parseInt(fenshu) +10;
			   	   	 		
			   	   	 	}	
			   	   	 }
			   	   	 
			   	   }    	   
			   	   
			   	   // 当y轴方向 到一定距离时候  vy 变为原来的值   将抛出的垃圾  弄没它
			   	   if(vy>30){
			   	   	// 让该垃圾不动
			   	   	 clearInterval(fly);			   	   	 
			   	   	 vy = -30;
			   	   	 status = 0;
			   	   	 vx = 14;
			   	   	 // 垃圾消失
			   	   	 // 从 <div id = "hSec"></div>  删掉垃圾子节点
			   	   	 document.getElementById("hSec").removeChild(newRub);			   	   	  
			   	   	
			   	   } 	   
			   	
			   },48) 
				
				
			},2570)			
	    	
	    		
	    },3400)
	
	
}


// 垃圾桶点击函数
//  参数1 代表垃圾桶的对象   参数2  代表  选择第几号垃圾桶
//  dx 代表是的是垃圾桶的对象   z   代笔的是 第几号垃圾桶 默认的值 是  1，2,3,4 中的一个
function clickbutton(dx,z){
	//  select  代表的是  垃圾抛物 落到哪个垃圾桶  通过改变select  才能实现
	select = z;	
	//  让所有垃圾桶没有边框
	$("#section3  img").css({"border":"none"})	
	// 点击的垃圾桶  会出现一个  5像素宽度 点状的 黄色边框	
	dx.style.border ="5px  dashed  yellow"	
	
}

//  钟表倒计时
// 一共60秒
//  默认时间是 60秒
var   time = 100;

// 因为是3400毫秒 抛出垃圾  所以  钟表倒计时 从 3400毫秒后 开始 计时
setTimeout(function(){
	
	var   countDown = setInterval(function(){	
	time = time -1;	
	document.getElementById("count").innerText = time;	
	if(time == 0){
		
			var  fenshu = document.getElementById("score").innerText;
		  alert("You got "+fenshu+" points");
		  window.location.reload();	
	}	
	
  },1000)
	
},3400)







