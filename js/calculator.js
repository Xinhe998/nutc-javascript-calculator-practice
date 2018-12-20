
var sum="";
var ans="";
$("button").click(function(){
    var obj="";
    obj=$(this).val();
    if(obj=="back"){
        sum=sum.substring(0,sum.length-1)
    }else{
        sum+=obj;
        ans=eval(obj);
    }
    /*}else if(obj=="/"){
        sum+=obj;
        ans=obj
    }else if(obj=="*"){
        sum+=obj;
        ans=obj;
    }else if(obj=="-"){
        sum+=obj;
        ans=obj;
    }else if(obj=="+"){
        sum+=obj;
        ans=obj;
    }else if(obj=="clean"){
        sum+="";
        ans="";
    }else if(obj=="equals"){
        ans=sum;
        sum=ans;
    }*/
    $("#show").val(sum);
    console.log(ans);
});