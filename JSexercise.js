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
convert10To2();