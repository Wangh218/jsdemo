console.log(parseInt(10/3));

var s= Math.floor(Math.PI*2*2*100)/100;
console.log(s);

var msg='';
var week=new Date().getDate();
if(week==0){
    msg='昨天休息 今天也休息';
}else if(week==1){
    msg='昨天休息 今天要上班';
}else if(week==6){
    msg='昨天上班 今天休息';
}else if(week>1 && week<6){
    msg='昨天上班 今天也要上班';
}
console.log(msg);


function convert10To2(){
    var num=prompt('要转化的十进制数',3);
    var arr=new Array();
    var str='';
    for(var i=0;1;i++){
        if(num/2>=1){
            arr[i]=num%2;
            num=parseInt(num/2);
        }else{
            arr[i]=1;
            break;
        }
    }
    for(var j=7;j>=0;j--){
        if(arr.length>j){
            str=str+arr[j];
        }else{
            str=str+'0';
        }
        
    }
    console.log(str);
}
// convert10To2();

var str = "mynameishero";
var strArr=str.split('');
var s1 = Array.prototype.sort.call(strArr,function(a,b){
	for(var i=0; i<a.length;i++){
		if(a.charCodeAt(i)==b.charCodeAt(i)) continue;
		return a.charCodeAt(i) - b.charCodeAt(i);
	}
});
str=s1.join('');
console.log(str);

var tatol=1000000;
    days=parseInt(tatol/86400);
    hours=parseInt(tatol%86400/3600);
    minutes=parseInt(tatol%86400%3600/60);
    seconds=tatol%86400%3600%60
    str=days>0?days+"天":'';
    str+=hours>0?hours+"小时":'';
    str+=minutes>0?minutes+"分钟":'';
    str+=seconds>0?seconds+"秒":'';
console.log(str);

let one=1;
    two=2;
// var tem=one;
// one=two;
// two=tem;

// one=one+two;
// two=one-two;
// one=one-two;

[one,two]=[two,one];
console.log(one,two);

switch(two){
    case '1':
        console.log(1)
        break;
    case 1:
        console.log(1)
        break;
    default:
        break;
}

var money=10000*1.08;
for(var i=1;1;i++){
    money=money*1.08;
    money=money-1000;
    if(money<=0){
        console.log(i)
        break;
    }

}

function printTriangle(){
    var boxTriabgle=document.getElementById('triangle1');  
    for(var i=1;i<10;i++){
        var strTriangle='';
        for(var j=1;j<=i;j++){
            strTriangle=strTriangle+j+'*'+i+'='+j*i+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp';
        }
        var span1=document.createElement("span");
        span1.innerHTML=strTriangle
        boxTriabgle.appendChild(span1);
        var br1=document.createElement("br");
        boxTriabgle.appendChild(br1);
    }
}
printTriangle();

var obj={
    name:'Steven',
    say:function(content){
        say=function(){
        console.log(this.name+" says "+content);  
        };
        // say(); 
        say.call(this);
    }
};
obj.say('hello');
